'use client'
import {
    createContext,
    ReactNode,
    useState
}  from "react";

interface ContractStorageType{
    marketPlace: any,
    setMarketPlace: any
}

const ContractStorage = createContext<ContractStorageType | undefined>(undefined);

const ContractStorageProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    let [marketPlace, setMarketPlace] = useState();
    
    return <ContractStorage.Provider value={{marketPlace, setMarketPlace}}>
        {children}
    </ContractStorage.Provider>
} 

export default ContractStorageProvider