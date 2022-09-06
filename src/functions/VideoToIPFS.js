import axios from 'axios';
import ObjectToIPFS from './ObjectToIPFS';

const VideoToIPFS = async (video, obj) => {
    if (video) {
        try {
            const data = new FormData();
            data.append("file", video);
            const res = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                headers: {
                    "Content-Type": "multipart/form-data",
                    'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                    'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                },
                data: data,
            });

            const RealHash = res.data.IpfsHash;
            // const VideoHash = `https://api.pinata.cloud/data+${res.data.IpfsHash}`;

            // console.log("GO TO OBJ TO IPFS");
            return await ObjectToIPFS(RealHash, obj);
            //return VideoHash;
            // return true;
        } catch (error) {
            console.log("Error sending Video to IPFS: ")
            console.log(error)
            return false;
        }
    }
}

export default VideoToIPFS;
