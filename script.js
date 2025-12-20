"use scrict"
//selecting elements
let hangmanImg = document.getElementById(`hangman_image`)
const hintText = document.getElementById(`hint`);
const secretWord = document.getElementById(`secret_word`);
const keys = document.querySelectorAll(`.keys`);
let winOrLose = document.getElementById("won-or-lose-popup");
let popup = document.getElementById("popup");
const restart = document.querySelector(".restart");
let guese = document.querySelector(".gueses")
let wrongGuesses = 0


//picking random word
let random = words[Math.floor(Math.random() * words.length)];
let selectedWord = random.word.toUpperCase();
let hint = random.hint;
guese.innerHTML= (`Incorrect guese: ${wrongGuesses}/6`);
hintText.innerText = `Hint:${hint}`;


//creating li tags
secretWord.innerHTML = selectedWord.split("").map(() => `<li class="word-letter"></li>`).join("");


// calculating letters to hide
let minHide = Math.ceil((selectedWord.length) * 0.5);
let maxHide = Math.ceil((selectedWord.length) * 0.7);
let letterToHide = Math.floor(Math.random() * (maxHide - minHide + 1)) + minHide;


//hiding ramdom letters in words
let displayed = selectedWord.split("")
let hideIndices = new Set();
while (hideIndices.size < letterToHide) {
     let randomIndex = Math.floor(Math.random() * selectedWord.length);
     hideIndices.add(randomIndex)
}
hideIndices.forEach(i => {
     secretWord.querySelectorAll("li")[i].innerText = displayed[i]
})




//function of keyboard
keys.forEach(btn => {
     let clickedLetter = btn.textContent.toUpperCase();
     btn.addEventListener("click", function () {
          if (selectedWord.includes(clickedLetter)) {
               selectedWord.split("").forEach((letter, i) => {
                    if (letter === clickedLetter) {
                         secretWord.querySelectorAll("li")[i].innerText = letter;
                         btn.classList.add("key-disabled-correct")
                         btn.disable = true;



                         //popup
                         let allLetterFound = [...secretWord.querySelectorAll("li")].every(li => li.textContent !== "");
                         if (allLetterFound) {
                              winOrLose.classList.add("won-or-lose-popup")
                              popup.classList.add("popup")

                              //congratsIMG
                              let congratsImg = document.createElement("img");
                              congratsImg.setAttribute("src", `media/icons/trophy.png`)
                              congratsImg.classList.add("congratulation-img")
                              popup.appendChild(congratsImg)

                              //status
                              let status = document.createElement("p");
                              status.classList.add("status");
                              status.innerText = `you won!!`;
                              popup.appendChild(status);

                              //info
                              let info = document.createElement("p");
                              info.classList.add("info");
                              info.innerText = `wanna try again`;
                              popup.appendChild(info);

                              //restart button
                              let restart = document.createElement("button");
                              restart.classList.add("restart");
                              restart.innerText = "restart";
                              popup.appendChild(restart)
                              restart.addEventListener("click", function () {
                                   window.location.reload();
                              })
                         }
                    }
               })
          }


          else {

               wrongGuesses++

               guese.innerHTML= (`Incorrect guese: ${wrongGuesses}/6`);

               hangmanImg.setAttribute("src", `media/hangman/lives-${wrongGuesses}.png`);
               hangmanImg.classList.add("wrong-click");
               setTimeout(() => {
                    hangmanImg.classList.remove("wrong-click");
               }, 100);

               btn.classList.add("key-disabled-incorrect");
               btn.disabled = true


               //popup
               if (wrongGuesses >= 6) {
                    winOrLose.classList.add("won-or-lose-popup");
                    popup.classList.add("popup");
                    //congratsIMG
                    let congratsImg = document.createElement("img");
                    congratsImg.setAttribute("src", `media/icons/lost.png`);
                    congratsImg.classList.add("congratulation-img");
                    popup.appendChild(congratsImg);
                    //status
                    let status = document.createElement("p");
                    status.classList.add("status");
                    status.innerText = `YOU LOST!!`;
                    popup.appendChild(status);

                    //info
                    let info = document.createElement("p");
                    info.classList.add("info");
                    info.innerText = `wanna try again`;
                    popup.appendChild(info);

                    //restart button
                    let restart = document.createElement("button");
                    restart.classList.add("restart");
                    restart.innerText = "Restart";
                    popup.appendChild(restart);
                    restart.addEventListener("click", function () {
                         window.location.reload();
                    })
               }
          }
     })
})

console.log(displayed)
console.log(wrongGuesses)