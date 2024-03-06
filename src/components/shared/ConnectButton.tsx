'use client'
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useEffect } from "react";
import { useAccount, useBalance, useChains, useConnectors, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { formatEther } from "viem";

export default () => {
    const { open } = useWeb3Modal();
    const { isConnected, isDisconnected, address, chain } = useAccount();
    const { disconnect } = useDisconnect();

    const result = useBalance({
        address
    });

    useEffect(() => {
        console.log(result.data?.value);
    }, [chain?.id]);

    function getbalance(formattedEthers: string) {
        try {
            let bal = formattedEthers.split('.');
            bal[1] = bal[1].slice(0, 4);
            return bal.join('.');
        }
        catch(e){
            return formattedEthers
        }
    }

    return <div>
        <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '30px',
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontWeight: '600'
        }}>
            <div>{(result.data) ? `Balance ${getbalance(formatEther(result.data?.value))}` : "NO BALANCE"}</div>
            <div>status {(isConnected) ? "CONNECTED" : "DISCONNECTED"}</div>
            <button style={{
                backgroundColor: 'peach',
                color: 'white',
                borderRadius: '10px',
                width: '170px',
                height: '45px',
                border: 'none'
            }} onClick={() => {
                (!isConnected) ? open() : disconnect();
            }}>{(isConnected) ? 'Disconnect' : 'Connect Wallet'}</button>
            {isConnected && <button onClick={() => open()}>Switch Network</button>}
        </div>
    </div>
}