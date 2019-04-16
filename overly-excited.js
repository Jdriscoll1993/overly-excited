
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

//need a function to take the array and do something with it.
//what do you want to do with it? console log each word and build a sentence one word at a time.
//going to need a loop to build each time.
//going to need to iterate through the loop inserting punctuation after every 3rd word.
//going to need to repeat the punctuation however many times the developer decides after every third word. ---use the repeat() method.

function addExcitement(sentenceArray, punctuation, numOfTimes) {
    let builtSentence = ""
    for (let i = 0; i < sentenceArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            builtSentence += sentenceArray[i] + punctuation.repeat(numOfTimes) + " "
            console.log(builtSentence);
        } else {
            builtSentence += sentenceArray[i] + " "
            console.log(builtSentence);
        }
    }
}

addExcitement(sentence, "!", 3);
