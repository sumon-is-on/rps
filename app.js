let userScore = 0;
let systemScore = 0;
let draw = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePrint = document.querySelector("#user_score")
const systemScorePrint = document.querySelector("#system_score")
const drawScorePrint = document.querySelector("#draw_score")

const genSystemChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame= (userChoice,sysChoice)=>{
    draw++;
    drawScorePrint.innerText =draw;
    
    msg.innerText =`Draw your ${userChoice} matches to System ${sysChoice}`;
    msg.style.backgroundColor="#081b31";
    msg.style.color="#fff";
}

const showWinner = (userWin,userChoice,sysChoice)=>{
    if(userWin){
        userScore++;
        userScorePrint.innerText =userScore;

        msg.innerText=`You win! your ${userChoice} systems beats ${sysChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="black";
    }else{
        systemScore++;
        systemScorePrint.innerText=systemScore;

        msg.innerText=`System won! System's ${sysChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="black";
    }
}

const playGame = (userChoice)=>{
    const sysChoice = genSystemChoice();
    if (userChoice === sysChoice) {
        drawGame(userChoice,sysChoice);
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = sysChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = sysChoice === "scissors" ? false : true ;
        }else{
            userWin = sysChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,sysChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});