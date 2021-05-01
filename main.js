// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const glyphStates = {
  "♡" : "♥",
  "♥" : "♡"
};

const colorHeart = {
  "red" : "",
  "" : "red"
};

// Your JavaScript code goes here!

let hearts = document.querySelectorAll('.like-glyph');


function handleClick(e) {
  let heart = e.target
  mimicServerCall()
  .then(function(serverMessage){
    heart.innerText = glyphStates[heart.innerText]
    heart.style.color = colorHeart[heart.style.color]
    }
  )
  .catch(function(error) {
    const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
  });
}


for (let h of hearts){
  h.addEventListener('click', handleClick)
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
