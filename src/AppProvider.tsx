import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Card} from "@/types/Types";
import {tarots} from "@/data";
import {getQuestionPrompt} from "@/utils";

type AppState = {
    tarots: Card[];
    chosenCards: Card[];
    resetFlipped: boolean;
    isPredictionReady: boolean;
    response: string;
    isResponseLoading: boolean;
};

type AppContextType = {
    state: AppState;
    setState: React.Dispatch<React.SetStateAction<AppState>>;
};

const defaultState: AppContextType = {
    state: {
        tarots: tarots,
        chosenCards: [],
        resetFlipped: false,
        isPredictionReady: false,
        response: '',
        isResponseLoading: false,
    },
    setState: () => {},
};

const AppContext = createContext<AppContextType>(defaultState);

type AppProviderProps = {
    children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
    const [state, setState] = useState<AppState>(defaultState.state);

    useEffect(() => {
        if (state.chosenCards.length > 0) {
            setState({...state, isResponseLoading: true});
            const prompt = getQuestionPrompt(state.chosenCards);
            handleAsk(prompt).then(() => {
                setState(prevState => ({...prevState, isResponseLoading: false}));
            });
        }
    }, [state.chosenCards]);

    const handleAsk = async (question: string) => {

        const apiKey = "bklgjsdfg;sdgusd;ogudsgu";
        try {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo', // or 'gpt-3.5-turbo' for GPT-3.5
                    messages: [{ role: 'user', content: question }]
                })
            });

            const data = await res.json();
            if (data.choices && data.choices[0] && data.choices[0].message) {
                const answer = data.choices[0].message.content.trim();
                setState(prevState => ({
                    ...prevState,
                    response: answer
                }));
            } else {
                setState(prevState => ({
                    ...prevState,
                    response: 'No response received.'
                }));
            }
        } catch (error) {
            setState(prevState => ({
                ...prevState,
                response: 'Sorry, something went wrong.'
            }));
            console.error('Error:', error);
        }
    };

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
