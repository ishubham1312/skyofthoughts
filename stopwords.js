// List of words that are not allowed in Star Thoughts
export const stopwords = [

    
    // Add inappropriate words as needed
];

// Function to check if text contains any stopwords
export function containsStopwords(text) {
    if (!text || typeof text !== 'string') {
        return false;
    }
    const words = text.toLowerCase().split(/\s+/);
    // Return both the result and the found word for better error messages
    const foundWord = words.find(word => stopwords.includes(word));
    return {
        hasStopword: Boolean(foundWord),
        word: foundWord
    };
}
