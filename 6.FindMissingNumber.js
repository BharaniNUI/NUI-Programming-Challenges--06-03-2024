function findMissingNumber(arrayInput) {
    if (Array.isArray(arrayInput)) {
        //Sorting the given arrayInput
        for (let i = 0; i < arrayInput.length - 1; i++) {
            for (let j = 0; j < arrayInput.length - 1; j++) {
                if (arrayInput[j] > arrayInput[j + 1]) {
                    let temp = arrayInput[j];
                    arrayInput[j] = arrayInput[j + 1];
                    arrayInput[j + 1] = temp;
                }
            }
        }
        let correctArray = []; //Created new array for comparing original range with input range
        const n = arrayInput.length - 1;

        //Assigning startValue and endValue from sortedarrayInput
        const startValue = arrayInput[0];
        const endValue = arrayInput[n];

        for (let i = startValue; i <= endValue; i++) {
            correctArray.push(i); //Pushing all values between the range
        }

        //with filter() method comparing correctArray with arrayInput 
        let resultArray = correctArray.filter(n => !arrayInput.includes(n));
        return resultArray;
    } else {
        return `Enter input in Array Format`;
    }

}

console.log(findMissingNumber([7, 10, 12, 9]))
