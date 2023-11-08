function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = [];

    for (let word of words) {
        let reversedWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWords.push(reversedWord);
    }

    let reversedSentence = reversedWords.join(" ");
    return reversedSentence;
}

// Example usage
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
