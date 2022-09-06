const snarkjs = require('snarkjs');
const wc = require("./witness_calculator.js");

export default async function generateProof(wasm_buff, zkey_buff, w, x) {

  let input = {
    "fashion" : ["0","0",w[0],"0","0","0","0","0"],
    "food" : ["0","0",w[1],"0","0","0","0","0"],
    "travel" : ["0","0",w[2],"0","0","0","0","0"],
    "medical" : ["0","0",w[3],"0","0","0","0","0"],
    "education" : ["0","0",w[4],"0","0","0","0","0"],
    "exercise" : ["0","0",w[5],"0","0","0","0","0"],
    "slotIndex" : 2,
    "operator" : 3,
    "valueFashion": [x[0]],
    "valueFood": [x[1]],
    "valueTravel": [x[2]],
    "valueMedical": [x[3]],
    "valueEducation": [x[4]],
    "valueExercise": [x[5]]
  }

  let witnessCalculator = await wc(wasm_buff);
  let wtns_buff = await witnessCalculator.calculateWTNSBin(input, 0);

  const { proof, publicSignals } =await snarkjs.groth16.prove(zkey_buff, wtns_buff);

  const solidityCallData = await snarkjs.groth16.exportSolidityCallData(proof, publicSignals);

  const argv = solidityCallData
  .replace(/["[\]\s]/g, "")
  .split(",")

  const a = [argv[0], argv[1]];
  const b = [
    [argv[2], argv[3]],
    [argv[4], argv[5]],
  ];
  const c = [argv[6], argv[7]];
  const pubInput = [];

  for (let i = 8; i < argv.length; i++) {
    pubInput.push(argv[i]);
  }

  const solidityProof = [a, b, c, pubInput];

  return solidityProof;
}

