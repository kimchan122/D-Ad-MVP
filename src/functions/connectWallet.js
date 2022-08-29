import { useWeb3React } from "@web3-react/core";
import injected from "./connector";

const ConnectWallet = async () => {
    const { account, active, activate } = useWeb3React();
    try {
        await activate(injected, (error) => {
            console.log(error);
            if ("/No Ethereum provider was found on window.ethereum/")
                throw new Error("Metamask 익스텐션을 설치해주세요");
        });
    } catch (err) {
        alert(err);
        window.open("https://metamask.io/download.html");
    }
};

export default ConnectWallet;