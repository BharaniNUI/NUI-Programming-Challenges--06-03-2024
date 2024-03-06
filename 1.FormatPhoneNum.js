function phoneFormat(phoneNumber) {
    phoneNumber = String(phoneNumber) //Phonenumber converted to string

    if (phoneNumber.length == 10) { //Condition to check phonenumber with 10 digit

        resultphoneNumber = "(" //Adding "(" initially
        let stringphoneNumber = ""

        for (let i = 0; i < phoneNumber.length; i++) {

            stringphoneNumber += phoneNumber.charAt(i)
            if (i === 2) {
                stringphoneNumber += ")" //Adding ")" after three digits
            }
            else if (i === 5) {
                stringphoneNumber += "-" //Adding "-" after six digits
            }

        }
        return resultphoneNumber += stringphoneNumber //Concat with initial value
    } else {
        return `Invalid PhoneNumber! Enter 10 digit PhoneNumber`
    }
}

console.log(phoneFormat(9840164723))