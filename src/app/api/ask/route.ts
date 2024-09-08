import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { question } = await request.json();

    if (!process.env.CONNECTION_OPEN_AI_KEY) {
        throw new Error("API key is missing.");
    }

    const apiKey = process.env.CONNECTION_OPEN_AI_KEY;

    try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: question }]
            })
        });

        const data = await res.json();
        console.log(data);
        if (data.choices && data.choices[0] && data.choices[0].message) {
            return NextResponse.json({ content: data.choices[0].message.content.trim() });
        } else {
            return NextResponse.json({ error: 'No response received.' });
        }

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Sorry, something went wrong.' });
    }
};
