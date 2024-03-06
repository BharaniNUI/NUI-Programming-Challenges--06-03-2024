function arrayOfMultiples(arrayInput) {
    if (arrayInput.length === 2 && Array.isArray(arrayInput)) {
        const resultArray = [];
        const range = arrayInput[1]; //Range of the multiples

        for (let i = 1; i <= range; i++) {
            resultArray.push(arrayInput[0] * i);//Multiplied and pushed to resultArray
        }
        return resultArray;
    } else {
        return `Type only two numbers in the array as [multiple, range]`;
    }

}

console.log(arrayOfMultiples([2, 5]))