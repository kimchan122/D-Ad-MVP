import React, { useState } from "react";
// import "./App.css";

import { Field, Input, Text, Button, Link } from "rimble-ui";

const snarkjs = require("snarkjs");

const getSolidityProofArray = (proof) => {
	let proofList = [
		proof["pi_a"][0],
		proof["pi_a"][1],
		proof["pi_b"][0][1],
		proof["pi_b"][0][0],
		proof["pi_b"][1][1],
		proof["pi_b"][1][0],
		proof["pi_c"][0],
		proof["pi_c"][1],
	];
	return proofList;
};


const makeProof = async (_proofInput, _wasm, _zkey) => {
	const { proof, publicSignals } = await snarkjs.groth16.fullProve(_proofInput, _wasm, _zkey);
	return { proof, publicSignals };
};

const verifyProof = async (_verificationkey, signals, proof) => {
	const vkey = await fetch(_verificationkey).then(function (res) {
		return res.json();
	});

	const res = await snarkjs.groth16.verify(vkey, signals, proof);
	return res;
};

function Proof() {
	const [a, setA] = useState("3");
	const [b, setB] = useState("11");

	const [proof, setProof] = useState("");
	const [signals, setSignals] = useState("");
	const [isValid, setIsValid] = useState(false);

    let wasmFile = `https://gateway.pinata.cloud/ipfs/QmYAjZGHpeg1PT8rDXNHbN4kVW5V3rid346PHENW424ftR`;
    let zkeyFile = `https://gateway.pinata.cloud/ipfs/QmUoB5pgRY9NYJRQT3AGbcZKKSiTm3yPbzkasmHS6QvykX`;
	let verificationKey = "https://gateway.pinata.cloud/ipfs/QmR34ZwdQMj7pZvdVeJz2Lru9zgTkQrX6YDjsQCpcm7xJP";
	// let wasmFile = "http://localhost:8000/ad.wasm";
	// let zkeyFile = "http://localhost:8000/ad_0001.zkey";
	// let verificationKey = "http://localhost:8000/verification_key.json";

	const runProofs = () => {
		console.log(b.length);
		if (a.length == 0 || b.length == 0) {
			return;
		}
		let proofInput = { "fashion" : ["0","0","22","0","0","0","0","0"],
		"food" : ["0","0","22","0","0","0","0","0"],
		"travel" : ["0","0","22","0","0","0","0","0"],
		"medical" : ["0","0","42","0","0","0","0","0"],
		"education" : ["0","0","33","0","0","0","0","0"],
		"exercise" : ["0","0","6","0","0","0","0","0"],
		"slotIndex" : 2,
		"operator" : 3,
		"valueFashion": [4],
		"valueFood": [11],
		"valueTravel": [4],
		"valueMedical": [4],
		"valueEducation": [4],
		"valueExercise": [6] };


		console.log(proofInput);
		console.log(proofInput);
    	console.log(wasmFile);
		console.log(verificationKey);

		makeProof(proofInput, wasmFile, zkeyFile).then(({ proof: _proof, publicSignals: _signals }) => {
			console.log(proof)
			setProof(JSON.stringify(_proof, null, 2));
			setSignals(JSON.stringify(_signals, null, 2));
			verifyProof(verificationKey, _signals, _proof).then((_isValid) => {
				setIsValid(_isValid);
			});
		});
	};

	//runProofs();

	const changeA = (e) => {
		setA(e.target.value);
	};

	const changeB = (e) => {
		setB(e.target.value);
	};

	return (
		<div>
			<header className="App-header">
				<Text>
					The underlying circuit is from the <a href="https://github.com/iden3/snarkjs">snarkjs readme</a>
				</Text>
				<pre>Witness Inputs</pre>
				<Field label="Input a:">
					<Input type="text" required={true} value={a} onChange={changeA} placeholder="e.g. 3" />
				</Field>
				<Field label="Input b:">
					<Input type="text" required={true} value={b} onChange={changeB} placeholder="e.g. 11" />
				</Field>
				<Button.Outline onClick={runProofs}>Generate Proof</Button.Outline>
				Proof: <Text width={1 / 2}>{proof}</Text>
				Signals: <Text>{signals}</Text>
				Result:
				{proof.length > 0 && <Text>{isValid ? "Valid proof" : "Invalid proof"}</Text>}
			</header>
		</div>
	);
}

export default Proof;
