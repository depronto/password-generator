const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const number = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const charSpecial = characters.concat(specialChar)
const charNumbers = characters.concat(number)
const charNumSpecial = characters.concat(number, specialChar)


let btnGenerate = document.getElementById("btn-generate")
let passwordEl1 = document.getElementById("psw-el1")
let passwordEl2 = document.getElementById("psw-el2")


function generatePsw(){

    
    let specialChr = document.getElementById("special-chr")
    let numbersChecked = document.getElementById("numbers")
    let passwordLength = document.getElementById("psw-length-input").value
    passwordEl1.textContent = ""
    passwordEl2.textContent = ""

    if(specialChr.checked && numbersChecked.checked){
        for(let i = 0; i < passwordLength; i++){
            passwordEl1.textContent += charNumSpecial[randomNumber(charNumSpecial.length)]
        }
        for(let i = 0; i < passwordLength; i++){
            passwordEl2.textContent += charNumSpecial[randomNumber(charNumSpecial.length)]
        }
    }else if(specialChr.checked && !numbersChecked.checked){
        for(let i = 0; i < passwordLength; i++){
            passwordEl1.textContent += charSpecial[randomNumber(charSpecial.length)]
        }
        for(let i = 0; i < passwordLength; i++){
            passwordEl2.textContent += charSpecial[randomNumber(charSpecial.length)]
        }
    }else if(!specialChr.checked && numbersChecked.checked) {
        for(let i = 0; i < passwordLength; i++){
            passwordEl1.textContent += charNumbers[randomNumber(charNumbers.length)]
        }
        for(let i = 0; i < passwordLength; i++){
            passwordEl2.textContent += charNumbers[randomNumber(charNumbers.length)]
        }
    }else {
        for(let i = 0; i < passwordLength; i++){
            passwordEl1.textContent += characters[randomNumber(characters.length)]
        }
        for(let i = 0; i < passwordLength; i++){
            passwordEl2.textContent += characters[randomNumber(characters.length)]
        }
    }
    
}

function randomNumber(length) {
    return Math.floor(Math.random() * length)
    
}
function textCopy1() {
    //copyText variable get the text content from the element with psw-el1 id
    let copyText = document.getElementById("psw-el1").textContent   
    //get
    let textCopied = document.getElementById("text-copied")
    //using the browser API we copy the password to clipboard
    navigator.clipboard.writeText(copyText)
    .then(() => {
      // Show the copied message
    textCopied.textContent = "Text Copied!";
    textCopied.style.opacity = 1;
    
      // Fade away the message after 2 seconds
    setTimeout(() => {
        textCopied.style.opacity = 0;
        textCopied.textContent = "";
    }, 700);
    })
    
}

function textCopy2() {
    //copyText variable get the text content from the element with psw-el1 id
    let copyText = document.getElementById("psw-el2").textContent   
    //get
    let textCopied = document.getElementById("text-copied")
    //using the browser API we copy the password to clipboard
    navigator.clipboard.writeText(copyText)
    .then(() => {
      // Show the copied message
    textCopied.textContent = "Text Copied!";
    textCopied.style.opacity = 1;
    
      // Fade away the message after 2 seconds
    setTimeout(() => {
        textCopied.style.opacity = 0;
        textCopied.textContent = "";
    }, 700);
    })
    
}