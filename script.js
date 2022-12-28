const textarea = document.querySelector("#text-area")
const typedtext = document.querySelector(".typed-text")

// const innertext = textarea.innerHTML
// console.log(innertext)

textarea.onkeyup = function(){
    typedtext.innerHTML = textarea.value;
}