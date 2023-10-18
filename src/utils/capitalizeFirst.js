export const capitalizeFirstLetter = (sentence) => {
    // Check if the sentence is not empty
    if (sentence.length === 0) {
        return sentence;
    }

    // Capitalize the first letter and concatenate it with the rest of the sentence
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

// Example usage:
const originalSentence = "this is an example sentence.";
const capitalizedSentence = capitalizeFirstLetter(originalSentence);

console.log(capitalizedSentence);