
let hands = document.getElementsByClassName("hand");
let button = document.querySelector("button");
let userPicked = document.querySelector(".user-picked");
let computerPicked= document.querySelector(".computer-picked");
let triangle = document.querySelector(".triangle");
let totalHands = document.querySelector(".hand");
let textPosition = document.querySelector(".text-position");
let someText = document.querySelector(".some-text");
let myScore = document.querySelector("#my-score");
let resetButton = document.querySelector("#reset-button");
let scissor = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let testDiv = document.querySelector(".test-div")
let cancelButton = document.querySelector(".cancel-button")
let rules = document.querySelector(".rules-container");
let rulesButton = document.querySelector(".rules-button");


cancelButton.addEventListener("click", function(){
    rules.style.display = "none";
})

rulesButton.addEventListener("click", function(){
    rules.style.display = "block";
})



// let scissor = 0;
// let paper = 1;
// let rock = 2
let count = 12;
let myPick;

myScore.textContent = count;

let boxShadowColor =  "0px 0px 5px 50px  hsla(214, 78%, 30%, 0.7), 0px 0px 5px 100px hsla(214, 78%, 25%, 0.8), 0px 0px 5px 150px  hsla(214, 78%, 20%, 0.9)"; 

let compPick;

for (let i=0; i < hands.length; i++) {
    hands[i].addEventListener("click", function(){
        makeClickAble();
        userPicked.textContent ="YOU PICKED";
        triangle.style.display = "none";
        blockAll();
        this.style.display = "flex";
        this.style.left ="30%";
        this.style.top = "35%";
       
      
        if ( i == 0) {
            myPick = "scissor";
       
        } else if (i==1) {
            myPick = "paper";
       
        } else if (i==2) {
            myPick = "rock";
        }

         compPick = computerPicker();

        while ( compPick == i ) {
            compPick = computerPicker();
            if(compPick != i){
               break;
            }
       }
       computerPicked.textContent = "THE HOUSE PICKED"
       testDiv.classList.add("blank-div");
       
       setTimeout(delayComputerPick, 500);

    })
}


 function delayComputerPick(){
        testDiv.classList.remove("blank-div");
      
        hands[compPick].style.display = "flex";
        hands[compPick].style.left = "60%";
        hands[compPick].style.top = "35%";
        
        if (compPick == 0 ) {
            computerChoice = "scissor";
        } else if (compPick == 1) {
            computerChoice = "paper";
        } else if (compPick == 2) {
            computerChoice = "rock";
        }

        if ((myPick == "scissor") && (computerChoice=="paper")) {
            // alert("You won")
            textPosition.style.display = "block"; 
            someText.textContent = "YOU WON"
            myScore.textContent = ++count;
            scissor.style.boxShadow = boxShadowColor; 
            scissor.style.zIndex = "-1";
            makeUnclickAble();

            // increase count

        }  else if ((myPick == "scissor") && (computerChoice == "rock")){
            // alert("You lost")
            textPosition.style.display = "block"; 
            someText.textContent = "YOU LOST"
            myScore.textContent = --count;
            rock.style.boxShadow = boxShadowColor; 
            rock.style.zIndex ="-1"
            makeUnclickAble();

        } else if ((myPick == "rock") && (computerChoice == "paper")){
            // alert("You lost")
            textPosition.style.display = "block"; 
            someText.textContent = "YOU LOST";
            myScore.textContent = --count;
            paper.style.boxShadow = boxShadowColor;
            paper.style.zIndex = "-1";
            makeUnclickAble(); 
       
        } else if ((myPick == "rock") && (computerChoice == "scissor")){
            // alert("You won")
            textPosition.style.display = "block"; 
            someText.textContent = "YOU WON";
            myScore.textContent = ++count;
            rock.style.boxShadow = boxShadowColor;
            rock.style.zIndex = "-1";
            makeUnclickAble();

        } else if ((myPick == "paper") && (computerChoice == "rock")){
            // alert("You won")
            textPosition.style.display = "block"; 
            someText.textContent = "YOU WON"; 
            myScore.textContent = ++count;
            paper.style.boxShadow = boxShadowColor; 
            paper.style.zIndex= "-1"
            makeUnclickAble();

          

        } else if ((myPick == "paper") && (computerChoice == "scissor")){
            // alert("You lost")  
            textPosition.style.display = "block"; 
            someText.textContent = "YOU LOST"
            scissor.style.boxShadow = boxShadowColor; 
            scissor.style.zIndex = "-1";
           
            myScore.textContent = --count; 
            makeUnclickAble();
        }
        // button.style.display = "block";
    }


function makeUnclickAble() {
    for(let hand of hands){
        // disenable  click event
        hand.style.pointerEvents = "none"
    }
}

function makeClickAble() {
    for(let hand of hands) {
        // enable click event
        hand.style.pointerEvents = "auto";
    }
}


resetButton.addEventListener("click", function(){

    makeClickAble();
    textPosition.style.display = "none";
    userPicked.textContent = "";
    computerPicked.textContent = ""
    triangle.style.display = "block";
    
    for(let i = 0; i < hands.length; i++) {
      
        hands[i].style.display = "flex";
        hands[i].style.justifyContent = "center";
        hands[i].style.alignItems = "center";
        hands[i].style.boxShadow = "none";
        hands[i].style.zIndex = "1";
    }
    
    scissor.style.top = "35%";
    scissor.style.left = "34%";
    scissor.style.boxShadow = "none";
    
   
    paper.style.top = "35%";
    paper.style.left = "54%";
    paper.style.boxShadow = "none";

    rock.style.top = "62%";
    rock.style.left = "44%";
    rock.style.boxShadow = "none";
   

    
})

function computerPicker() {
   return Math.floor(Math.random() * hands.length);
}

function blockAll() {
    for(let hand of hands){
        hand.style.display = "none";
        
    }
}













