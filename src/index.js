function generatestory(event){
    event.preventDefault();
    console.log("we are generating a story");

    let userPrompt = document.getElementById("prompttext").value
    console.log(userPrompt)

    let context  = "You are from tht 1800s. Telling old shakespearean stories"
    let apiKey = "48bf6of5134a63ab203acfc50316tbd4"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let response  = axios.get(apiUrl)



    console.log(response.data.answer)


}


let apiKey = "48bf6of5134a63ab203acfc50316tbd4"
let context = "You are from the 1800s. You tell old viking stories in a semi shakespearean language"

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`



let uForm = document.querySelector("#userform")
uForm.addEventListener("submit" , generatestory)
console.log("submitting..")