// import axios from 'axios';

const ObjectToIPFS = async (video, obj) => {
    if (obj) {
        try {
            const pinataSDK = require('@pinata/sdk');
            const pinata = pinataSDK(`${process.env.REACT_APP_PINATA_API_KEY}`, `${process.env.REACT_APP_PINATA_API_SECRET}`);

            const MyCustomName = "unchainads";

            // console.log(video)
            // console.log(obj);

            const body = {
                message: `${obj.title}`,
            };
            const options = {
                pinataMetadata: {
                    name: MyCustomName,
                    keyvalues: {
                        title: `${obj.title}`,
                        script: `${obj.script}`,
                        category: `${obj.category}`,
                        amount: `${obj.amount}`,
                        video: `http://unchainads.mypinata.cloud/ipfs/${video}`,
                    },
                },
                pinataOptions: {
                    cidVersion: 0,
                },
            };
            await pinata.pinJSONToIPFS(body, options).then((result) => {
                //handle results here
                console.log(result);
            }).catch((err) => {
                //handle error here
                console.log(err);
            });

            return true;

        } catch (error) {
            console.log("Error sending Object to IPFS: ")
            console.log(error)
            return false;
        }
    }
}

export default ObjectToIPFS;
