function displayPoem(response){

  new Typerwriter("#poem", {
  strings: response.data.answer,
autoStart :true,
delay:1,
cursor : "",
});
}

function generatePoem(event){
event.preventDefault();
let instructions = document.querySelector("#user-instructions");
let apiKey ="bb97c23fo71t6ba9f57527004105a77b";
let prompt =`Generate a frech poem about ${instructionsInput.value}`;
let context = "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4line poem in basic HTML and separate each line with a <br/>. Make sureto follow the user instructions";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key={bb97c23fo71t6ba9f57527004105a77b}`;

axios.get(apiUrl).then(displayPoem);
}
let poemForElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);