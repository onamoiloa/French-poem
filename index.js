function displayPoem(response){
console.log("#poem generated");
  new Typerwriter("#poem", {
  strings: response.data.answer,
autoStart :true,
delay:1,
cursor : "",
});
}

function generatePoem(event) {
event.preventDefault();

let instructions = document.querySelector("#user-instructions");
let apiKey ="bb97c23fo71t6ba9f57527004105a77b";
let prompt =` User instructions: Generate a frech poem about ${instructions.value}`;
let context = 
"You are a romantic Poem expert and love to write short poems. You mission is to generate a 4line poem in basic HTML and separate each line with a <br/>. Make sureto follow the user instructions.Do not include a tittle to the poem. Sign the poem with `SheCodes AI`inside a <strong> element at the poem and NOT a the beginning";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key={bb97c23fo71t6ba9f57527004105a77b}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `Generating a French poem about ${instructionsInput.value}`;

console.log("#generating poen");
console.log(`promt:${prompt}`);
console.log(`context: ${context}`);
axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);