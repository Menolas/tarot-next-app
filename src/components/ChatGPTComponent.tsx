import React, { useState } from 'react';

export const ChatGPTComponent = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAsk = async () => {
        if (!question) {
            alert('Please enter a question');
            return;
        }

        const apiKey = process.env.OPENAI_API_KEY;

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
            <input
                type="text"
                id="question"
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <button onClick={handleAsk} disabled={isLoading}>
                Ask
            </button>
            <div id="response">{response}</div>
        </div>
    );
};
