function generatePoem(event){
event.preventDefaul();

alert("Generating poem");
}

let poemForElement = document.querySelector("#poem-generator-form");
poemForElement.addEventListener("submit", generatePoem);