import React, {useEffect, useState} from 'react';
import {useAppContext} from "@/AppProvider";

export const ChatGPTComponent = () => {
    const { state, setState } = useAppContext();
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let prompt = `Can you reveal my fate by interpreting the meaning of the ${state.chosenCards[0].name}, ${state.chosenCards[1].name}, and ${state.chosenCards[2].name} I drew from the tarot deck?`;
        setQuestion(prompt);
    }, [state.chosenCards]);

    const handleAsk = async () => {
        if (!question) {
            alert('Please enter a question');
            return;
        }
        const apiKey = "bklgjsdfg;sdgusd;ogudsgu";
        setIsLoading(true);
        setResponse('Thinking...');
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
            const answer = data.choices[0].message.content.trim();
            setResponse(answer);
        } catch (error) {
            setResponse('Sorry, something went wrong.');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="chat-container">
            <button onClick={handleAsk} disabled={isLoading}>
                Ask
            </button>
            <div id="response">{response}</div>
        </div>
    );
};
