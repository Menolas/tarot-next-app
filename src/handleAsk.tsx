// export const handleAsk = async (question: string) => {
//     if (!process.env.CONNECTION_OPEN_AI_KEY) {
//         throw new Error("API key is missing.");
//     }
//
//     const apiKey = process.env.CONNECTION_OPEN_AI_KEY;
//     console.log('apiKey:', process.env.CONNECTION_OPEN_AI_KEY);
//
//
//     try {
//         const res = await fetch('https://api.openai.com/v1/chat/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${apiKey}`
//             },
//             body: JSON.stringify({
//                 model: 'gpt-3.5-turbo', // or 'gpt-3.5-turbo' for GPT-3.5
//                 messages: [{ role: 'user', content: question }]
//             })
//         });
//
//         const data = await res.json();
//         if (data.choices && data.choices[0] && data.choices[0].message) {
//             return data.choices[0].message.content.trim();
//         } else {
//             return 'No response received.';
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return 'Sorry, something went wrong.';
//     }
// };

export const handleAsk = async (question: string) => {
    try {
        const res = await fetch('/api/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });

        const data = await res.json();
        if (data.content) {
            return data.content;
        } else {
            return 'No response received.';
        }
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, something went wrong.';
    }
};
