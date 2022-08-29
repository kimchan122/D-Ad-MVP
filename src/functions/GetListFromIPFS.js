import { ResetTvOutlined } from '@mui/icons-material';
import axios from 'axios';
//import pinataSDK from '@pinata/sdk';
//import pinadaSDK from '@pinata/sdk';

const GetListFromIPFS = async () => {
    try {
        const pinataSDK = require('@pinata/sdk');
        const pinata = pinataSDK(process.env.REACT_APP_PINATA_API_KEY, process.env.REACT_APP_PINATA_API_SECRET);

        const metadataFilter = {
            name: 'unchainads',
        };

        const filters = {
            status: 'pinned',
            pageLimit: 20,
            pageOffset: 0,
            metadata: metadataFilter
        };

        let res = null;

        await pinata.pinList(filters).then((result) => {
            console.log(result);
            res = result;
            return result;
        }).catch((err) => {
            console.log(err);
        });

        console.log(res);
        //console.log(res.data);
        //console.log(RealHash);
        return res;

    } catch (error) {
        console.log("Error Get List From IPFS: ");
        console.log(error);
        return false;
    }
}

export default GetListFromIPFS;
