//Encode Function
function encode(stringInput,numberInput){
    const asciiArray=[]
    //Converting the given String to ASCII values
    for(let item of stringInput){
        asciiArray.push(item.charCodeAt(0))
    }
    
    const convertedAsciiArray=[]
    for(let i=0;i<asciiArray.length;i++){
        convertedAsciiArray.push(asciiArray[i]+numberInput)//Adding the input to ASCII value
    }

    //Converting ASCII values back to String
    const stringArray=[]
    for(let i=0;i<convertedAsciiArray.length;i++){
        stringArray.push(String.fromCharCode(convertedAsciiArray[i]))
    }

    //Converting array of strings to String
    let resultString=""
    for(let j of stringArray){
        resultString+=j
    }
    return resultString
}

//Decode Function
function decode(stringInput,numberInput){
    let asciiArray=[]
    //Converting the given String to ASCII values
    for(let i of stringInput){
        asciiArray.push(i.charCodeAt(0))
    }
    let convertedAsciiArray=[]
    for(let i=0;i<asciiArray.length;i++){
        convertedAsciiArray.push(asciiArray[i]-numberInput)//Adding the input to ASCII value
    }

    //Converting ASCII values back to String
    let stringArray=[]
    for(let i=0;i<convertedAsciiArray.length;i++){
        stringArray.push(String.fromCharCode(convertedAsciiArray[i]))
    }

    //Converting array of strings to String
    let resultString=""
    for(let j of stringArray){
        resultString+=j
    }
    return resultString

}
console.log(encode("arun",2))
console.log(decode("ctwp",2))