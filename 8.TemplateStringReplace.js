function stringReplace(stringInput, arrayInput) {
    if (typeof stringInput === 'string' && Array.isArray(arrayInput) && arrayInput.length === 3) {
        let newString1 = "";
        let newString2 = "";
        let newString3 = "";

        let obj = {}; //Creating Object

        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < arrayInput.length; j++) {
                obj[arrayInput[j][i]] = arrayInput[j][i + 1]; //Assigning array elements to object
            }
        }

        //Replacing Template string to Object values
        newString1 = stringInput.replaceAll('#[location]', obj.location);
        newString2 = newString1.replaceAll('#[state]', obj.state);
        newString3 = newString2.replaceAll('#[phone]', obj.phone);
        return newString3;
    } else {
        return `Enter three array inputs`;
    }

}

console.log(stringReplace("Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]",
    [["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]]))