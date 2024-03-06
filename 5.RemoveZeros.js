function removeZeros(inputString, toChange) {
    let result = 0
    const createdArray = []
    let resultInput = ""

    for (let item of inputString) {
        createdArray.push(item) //Pushing string into array to perform pop operation
    }

    //Leading
    if (toChange === "leading") {
        result = Number(inputString) //Converting the string to number
        resultInput = String(result) //Converting the Number to String
        return resultInput
    }
    //Trailing
    else if (toChange === "trailing") {
        for (let i = inputString.length - 1; i >= 0; i--) { //Running the loop from trail to find zero
            if (createdArray[i] === '0') {
                createdArray.pop() //Removing zeros with the help of pop() function
            } else {
                break //Breaking the loop when no zero is found at trail
            }
        }

        for (let item of createdArray) {
            resultInput += item //Converting the array to String
        }
        return resultInput
    }
}


console.log(removeZeros("000000123423423000", "leading"))
console.log(removeZeros("000000123423423000", "trailing"))