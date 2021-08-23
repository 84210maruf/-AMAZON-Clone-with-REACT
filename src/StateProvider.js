import React, { createContext, useContext, useReducer } from "react";

// Prepare or Bring the DataLayer 
export const StateContext = createContext();


// Warp & Provide the DataLayer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider 
    value={useReducer(reducer, initialState)} 
    >
        {children}
    </StateContext.Provider>
);

// Pull informaton from the DataLayer
export const useStateValue = () => useContext(StateContext);