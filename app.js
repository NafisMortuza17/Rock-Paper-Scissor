
//cacheing the dom for performance and easibility
let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score")
const compScore_span=document.getElementById("computer-score")
const scoreBoard_div=document.querySelector(".score-board")
const result_div=document.querySelector(".result>p")
const rock_div=document.getElementById("r")
const paper_div=document.getElementById("p")
const scissor_div=document.getElementById("s")


function win(userChoice,computerChoice)

{
    userScore++;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML= convertToword(userChoice)+" "+ "beats"+" "+convertToword(computerChoice)+" "+ "YOU WIN!"

    
}

function lose(userChoice,computerChoice)
{
    computerScore++;
    compScore_span.innerHTML=computerScore;
    result_div.innerHTML=convertToword(computerChoice)+" "+ "beats" + " "+ convertToword(userChoice) +" "+ "YOU LOSE!";
    
}

function draw(userChoice,computerChoice)
{
    result_div.innerHTML="It's a draw!";
}

function getComputerChoice(){
    const choices=['r','p','s'];

    const  randomNumber=Math.floor(Math.random()*3)
    return  choices[randomNumber];

}

function game(userChoice )
{
    let computerChoice=getComputerChoice();
    console.log("Computer choice =>"+computerChoice)
    console.log("User choice=>"+userChoice)

    switch(userChoice+computerChoice)
    {
         case 'rs':
        case "ps":
        case  "sp":
            win(userChoice,computerChoice);
        break;

        case"rp":
        case "ps":
        case "sr":
          lose(userChoice,computerChoice);
        break;

        case "rr":
         case"pp":
        case"ss":
        draw(userChoice,computerChoice);
         break;

    }
}



function main(){
rock_div.addEventListener('click',function(){
    game("r");}
 )

paper_div.addEventListener('click',function(){
    game("p")}
)

scissor_div.addEventListener('click',function(){
    game("s")
})
}


function convertToword(character)
{
    if(character=='r'){
        return "Rock";
    }

    if(character=='p'){
        return "Paper";
    }
    if(character=='s')
    {
        return "Scissors";
    }
}

main();


