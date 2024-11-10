import React, { createContext } from "react";
import Datalog from "../Components/Assets/Datalog/Alldata"


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {Datalog};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;