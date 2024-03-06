function checkInRange(arrayInput, numberToFind) {
    if (arrayInput.length == 2 && Array.isArray(arrayInput) && typeof numberToFind === 'number') {
        const startRange = arrayInput[0]; //Assigning start Range
        const endRange = arrayInput[1]; //Assigning end Range

        for (let i = startRange; i <= endRange; i++) {
            if (numberToFind === i) { //Searching the number between the Range
                return true;
            }
        }

        return false;
    } else {
        return `Enter the array in format => [startRange, endRange], numberToFind`;
    }

}

console.log(checkInRange([10, 100], 8))