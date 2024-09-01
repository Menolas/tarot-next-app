import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Card} from "@/types/Types";
import {tarots} from "@/data";

type AppState = {
    tarots: Card[];
    chosenCards: Card[];
};

type AppContextType = {
    state: AppState;
    setState: React.Dispatch<React.SetStateAction<AppState>>;
};

const defaultState: AppContextType = {
    state: {
        tarots: tarots,
        chosenCards: [],
    },
    setState: () => {},
};

const AppContext = createContext<AppContextType>(defaultState);

type AppProviderProps = {
    children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
    const [state, setState] = useState<AppState>(defaultState.state);

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
