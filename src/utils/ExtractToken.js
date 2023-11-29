export const extractToken = (inputString) => {
    // Regular expression to match the token pattern
    const tokenRegex = /TOKEN: (\d{4}-\d{4}-\d{4}-\d{4}-\d{4})/;

    // Use match to find the token in the input string
    const matchResult = inputString.match(tokenRegex);

    // Check if a match was found
    if (matchResult && matchResult[1]) {
        // Extracted token
        const extractedToken = matchResult[1];
        return extractedToken;
    } else {
        // No match found
        return null;
    }
};