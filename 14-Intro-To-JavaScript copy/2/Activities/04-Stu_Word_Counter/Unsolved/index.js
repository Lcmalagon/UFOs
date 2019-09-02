function wordCount(myString) {
    words = myString.split(" ");
    var frequencyCounter = {}

    words.forEach(function(currentWord) {

        if (currentWord in frequencyCounter) {
            frequencyCounter[currentWord]  += 1
        } else {
            frequencyCounter[currentWord] = 1;
        }
    });

    console.log(frequencyCounter);

    return(frequencyCounter);
}
    
wordCount("I yam what I yam and always will be what I yam");