export default function convertToSentenceCase(str) {
    // Convert the string to lowercase and split it into an array of words
    const words = str.toLowerCase().split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // Join the words back together with spaces
    const sentence = capitalizedWords.join(' ');
  
    return sentence;
  }
  