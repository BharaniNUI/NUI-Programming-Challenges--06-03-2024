function sumOfSmallLarge(arrayInput) {

    //Assigning initial minimumValue and maximumValue 
    let minimumValue = arrayInput[0]
    let maximumValue = arrayInput[0]

    //Finding minimumValueimum value
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i] < minimumValue) { //Comparing each element with minimumValue
            minimumValue = arrayInput[i]
        }
    }

    //Finding maximumValueimum value
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i] > maximumValue) { //Comparing each element with maximumValue
            maximumValue = arrayInput[i]
        }
    }

    let result = minimumValue + maximumValue //Adding both minimumValue and maximumValue
    return result
}

console.log(sumOfSmallLarge([45, 2, 25, 11, 16]))