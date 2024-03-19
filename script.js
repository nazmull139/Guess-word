const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span"),
guessLeft =document.querySelector(".guess-left span"),
typinGinput = document.querySelector(".typing-input"),
wrongLetter = document.querySelector(".wrong-letters span")

let word ,maxGuessse,incorrects=[] ,corrects=[];


function randomWord (){
    let ranObj =wordList[Math.floor(Math.random()*wordList.length)];
    maxGuessse = 8; corrects=[] ; incorrects=[];
        guessLeft.innerText=maxGuessse;
     word = ranObj.word;
     wrongLetter.innerText=incorrects;
    console.log(word);
    let html =" ";
    for(let i = 0; i<word.length; i++){
        html+= `<input type="text" disabled>`;
    }
    inputs.innerHTML=html;
    hint.innerText=ranObj.Hint;
}

function initGame(e){
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key} `) &&!corrects.includes(key)){
          console.log(key);

          if(word.includes(key)){

            for(let i=0; i<word.length; i++){
                if(word[i]===key){
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value=key;
                    
                }
            }
          }
          else{
            incorrects.push(` ${key} `);
            maxGuessse--;
          }
          
          wrongLetter.innerText=incorrects;
          guessLeft.innerText=maxGuessse;

    }
  typinGinput.value="";
  setTimeout(() =>{
     if(corrects.length === word.length){

        alert(`Congrats! You have found the word ${word.toUpperCase()} `);
         randomWord();
  }
  else if(maxGuessse<1){
    alert(`You don't have any remaining guesses Press " RESET GAME " to restart`);
    for(let i = 0 ; i<word.length ; i++){
        inputs.querySelectorAll("input")[i].value=word[i];
    }
  }
  })
 
}

randomWord();
 resetBtn.addEventListener("click",randomWord);
 typinGinput.addEventListener("input",initGame);
 inputs.addEventListener("click",() => typinGinput.focus());
 document.addEventListener("keydown",() => typinGinput.focus());