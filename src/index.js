  async function generatestory(event){
    event.preventDefault();
    let page = document.querySelector(".writingpage")
    page.innerHTML = "Generating a story....";

    let userPrompt = document.getElementById("prompttext").value
    console.log(userPrompt)

    let context  = "You are from tht 1800s. Telling old shakespearean short poems"
    let apiKey = "48bf6of5134a63ab203acfc50316tbd4"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${userPrompt}&context=${context}&key=${apiKey}`

    let response  = await axios.get(apiUrl)

    console.log(response.data.answer)

    new Typewriter('.writingpage', {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    
    });



   


}


let apiKey = "48bf6of5134a63ab203acfc50316tbd4"
let context = "Each story must be maximum 200 words. You are from the 1800s. You tell old viking stories in a semi shakespearean language. "

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`



let uForm = document.querySelector("#userform")
uForm.addEventListener("submit" , generatestory)
console.log("submitting..")