function convertToMinutes(timeInput) {
    if (timeInput.length <= 5 && typeof timeInput === 'string') {
        //Declaring variables
        let hours = "";
        let minutes = "";
        let totalMinutes = 0;

        for (let i = 0; i < timeInput.length; i++) {
            if (timeInput.charAt(i) === ":") {
                minutes += timeInput.charAt(i + 1) + timeInput.charAt(i + 2); //Assigning remaining values to minutes variable
                break; //Breaking the loop after ":" symbol
            }
            hours += timeInput.charAt(i); //Assigning initial values to hours variable
        }
        hours = Number(hours); //Changing the String type to Number
        minutes = Number(minutes);

        hours *= 60; //Converting the hour to minute
        totalMinutes = hours + minutes; //Adding both hours and minutes
        return totalMinutes;
    } else {
        return `Enter TimeFormat Correctly as 00:00 or 0:00`;
    }

}

console.log(convertToMinutes("2:30"))