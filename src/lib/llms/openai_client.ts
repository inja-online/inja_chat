const VITE_OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

interface ChatCompletionResponse {
    choices: Array<{
        message: {
            content: string;
            role: string;
        };
    }>;
}

export async function getChatCompletion(
    chatHistory: ChatMessage[]
): Promise<ChatCompletionResponse> {
    const url = 'https://openrouter.ai/api/v1/chat/completions';

    const messages = [
        { role: 'system' as const, content: 'You are a helpful assistant.' },
        ...chatHistory
    ];

    const headers = {
        'Authorization': `Bearer ${VITE_OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
    };

    const data = {
        model: 'qwen/qwen3-32b',
        provider: {
            only: ['Cerebras']
        },
        messages
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Chat completion error:', error);
        throw error;
    }
}