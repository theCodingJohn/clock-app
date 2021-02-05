import React, { createContext, useState } from "react";

export const StatusContext = createContext(null);

export const StatusProvider = (props) => {
  const [isComponentOpen, setComponentStatus] = useState(false);
  return (
    <StatusContext.Provider value={{isComponentOpen, setComponentStatus }}>
      {props.children}
    </StatusContext.Provider>
  );
};