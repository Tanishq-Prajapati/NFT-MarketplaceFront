import {
    PublicClient,
    createTransport,
    createWalletClient,
    getContract
} from "viem";
import { DappString } from "./Dtypes";
import { contractMap } from "./ContractsMap";

function getNFTContract(
    contractName: string,
    address: DappString,
    deployer: DappString,
    publicClient: PublicClient
){
    let client = createWalletClient({
        account: deployer,
        transport: createTransport
    })
    const contract = getContract({
        address: contractMap[contractName].address,
        abi: contractMap[contractName].abi,
        client:{
            wallet: deployer
        }
    })
}