export const summarizeText = async (text, summarizationLength, summarizationRatio) => {

    if (typeof text !== 'string' || text.trim() === '') {
        throw new Error('Invalid text');
    }

    if (typeof summarizationRatio !== 'number' || summarizationRatio <= 0 || summarizationRatio > 1) {
        throw new Error('Invalid summarization ratio');
    }

    try {
        const response = await fetch('http://localhost:3000/api/summarize/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, summarizationLength, summarizationRatio }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred during summarization');
    }
};