import React, { createContext, useState, useEffect } from 'react';

export const ExpressaoContext = createContext({} as any);

export const ExpressaoProvider = ({ children }: any) => {
    const [expressao, setExpressao] = useState('');

    return (
        <ExpressaoContext.Provider value={{ expressao, setExpressao}}> 
            {children}
        </ExpressaoContext.Provider>
    );
};
