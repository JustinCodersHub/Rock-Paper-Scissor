let playerWin = 0;
let botWin = 0;

function addDoubleClickAlert(element) {
element.addEventListener("dblclick", function() {
    document.getElementById("warnbg").style.display = "block";
});
}

function understand(){
        document.getElementById("warnbg").style.display = "none";
}

let btnRock = document.getElementById("manyattemptsRock");
addDoubleClickAlert(btnRock);

let btnPaper = document.getElementById("manyattemptsPaper");
addDoubleClickAlert(btnPaper);

let btnScissor = document.getElementById("manyattemptsScissor");
addDoubleClickAlert(btnScissor);

function updateBotChoice() {
    let botRock = "Rock";
    let botPaper = "Paper";
    let botScissors = "Scissors";

    let randomPickBot = [botRock, botPaper, botScissors];
    let randomIndex = Math.floor(Math.random() * randomPickBot.length);
    return randomPickBot[randomIndex];
}

function playerrock() {
    let randombot = updateBotChoice();
    
    if (randombot == "Rock") {
        document.getElementById("gamedecide").innerHTML = "Tie";
        document.getElementById("ipickrock").style.display = "block";
        setTimeout(() => {
            document.getElementById("ipickrock").style.display = "none";
            document.getElementById("gamedecide").innerHTML = "";
        }, 2000);


        document.getElementById("botpickrock").style.display = "block";
        setTimeout(() =>{
            document.getElementById("botpickrock").style.display = "none";
        },2000);
    }else if(randombot == "Scissors") {
        if(playerWin > 8){
            alert("Congratulations!");
            playerWin = 0;
            botWin = 0;
        }else{
            playerWin += 1;
        }
        document.getElementById("playerCount").innerHTML = playerWin;
        document.getElementById("botCount").innerHTML = botWin;
        
        document.getElementById("gamedecide").innerHTML = `You Win`;
        document.getElementById("ipickrock").style.display = "block";
        setTimeout(() => {
            document.getElementById("ipickrock").style.display = "none";
            document.getElementById("gamedecide").innerHTML = "";
        }, 2000);

        document.getElementById("botpickscissors").style.display = "block";
        setTimeout(() =>{
            document.getElementById("botpickscissors").style.display = "none";
        }, 2000);
}else{
        if(botWin > 8){
            alert("You Lost! Try Again :)");
            botWin = 0;
            playerWin = 0;
        }else{
            botWin += 1;
        }
        document.getElementById("botCount").innerHTML = botWin;
        document.getElementById("playerCount").innerHTML = playerWin;

        document.getElementById("gamedecide").innerHTML = `Bot Win`;
        document.getElementById("ipickrock").style.display = "block";
        setTimeout(() => {
            document.getElementById("ipickrock").style.display = "none";
            document.getElementById("gamedecide").innerHTML = "";
        }, 2000);

        document.getElementById("botpickpaper").style.display = "block";
        setTimeout(() =>{
            document.getElementById("botpickpaper").style.display = "none";
        }, 2000);
}
}

function playerpaper(){
    let randombot = updateBotChoice();
    
    if (randombot == "Paper") {
        document.getElementById("gamedecide").innerHTML = "Tie";
        document.getElementById("ipickpaper").style.display = "block";
        setTimeout(() => {
            document.getElementById("ipickpaper").style.display = "none";
            document.getElementById("ipickpaper").innerHTML = "";
        }, 2000);


        document.getElementById("botpickpaper").style.display = "block";
        setTimeout(() =>{
            document.getElementById("botpickpaper").style.display = "none";
        },2000);
    }else if(randombot == "Rock") {
        if(playerWin > 8){
            alert("Congratulations!");
            playerWin = 0;
            botWin = 0;
        }else{
            playerWin += 1;
        }
        document.getElementById("playerCount").innerHTML = playerWin;
        document.getElementById("botCount").innerHTML = botWin;
        
        document.getElementById("gamedecide").innerHTML = `You Win`;
        document.getElementById("ipickpaper").style.display = "block";
        setTimeout(() => {
            document.getElementById("ipickpaper").style.display = "none";
            document.getElementById("gamedecide").innerHTML = "";
        }, 2000);

        document.getElementById("botpickrock").style.display = "block";
        setTimeout(() =>{
            document.getElementById("botpickrock").style.display = "none";
        }, 2000);
}else{
        if(botWin > 8){
            alert("You Lost! Try Again :)");
            botWin = 0;
            playerWin = 0;
        }else{
            botWin += 1;
        }
        document.getElementById("botCount").innerHTML = botWin;
        document.getElementById("playerCount").innerHTML = playerWin;

        document.getElementById("gamedecide").innerHTML = `Bot Win`;
        document.getElementById("ipickpaper").style.display = "block";
        setTimeout(() => {
            document.getElementById("ipickpaper").style.display = "none";
            document.getElementById("gamedecide").innerHTML = "";
        }, 2000);

        document.getElementById("botpickscissors").style.display = "block";
        setTimeout(() =>{
            document.getElementById("botpickscissors").style.display = "none";
        }, 2000);
}
}

function playerscissors(){
    let randombot = updateBotChoice();
    
    if (randombot == "Scissors") {
        document.getElementById("gamedecide").innerHTML = "Tie";
        document.getElementById("ipickscissors").style.display = "block";
        setTimeout(() => {
            document.getElementById("ipickscissors").style.display = "none";
            document.getElementById("ipickscissors").innerHTML = "";
        }, 2000);


        document.getElementById("botpickscissors").style.display = "block";
        setTimeout(() =>{
            document.getElementById("botpickscissors").style.display = "none";
        },2000);
    }else if(randombot == "Paper") {
        if(playerWin > 8){
            alert("Congratulations!");
            playerWin = 0;
            botWin = 0;
        }else{
            playerWin += 1;
        }
        document.getElementById("playerCount").innerHTML = playerWin;
        document.getElementById("botCount").innerHTML = botWin;

        document.getElementById("gamedecide").innerHTML = `You Win`;
        document.getElementById("ipickscissors").style.display = "block";
        setTimeout(() => {
            document.getElementById("ipickscissors").style.display = "none";
            document.getElementById("gamedecide").innerHTML = "";
        }, 2000);

        document.getElementById("botpickpaper").style.display = "block";
        setTimeout(() =>{
            document.getElementById("botpickpaper").style.display = "none";
        }, 2000);
}else{
            if(botWin > 8){
            alert("You Lost! Try Again :)");
            botWin = 0;
            playerWin = 0;
        }else{
            botWin += 1;
        }
        document.getElementById("botCount").innerHTML = botWin;
        document.getElementById("playerCount").innerHTML = playerWin;

        document.getElementById("gamedecide").innerHTML = `Bot Win`;
        document.getElementById("ipickscissors").style.display = "block";
        setTimeout(() => {
            document.getElementById("ipickscissors").style.display = "none";
            document.getElementById("gamedecide").innerHTML = "";
        }, 2000);

        document.getElementById("botpickrock").style.display = "block";
        setTimeout(() =>{
            document.getElementById("botpickrock").style.display = "none";
        }, 2000);
}
}

function validate(){
    let name = document.getElementById("getName").value;

    if (isNaN(name)) {
        document.getElementById("success").innerHTML = "Successfully Created";
        document.getElementById("success").style.display = "block";

        let playerName = document.getElementById("getName").value;

        setTimeout(() => {
        document.getElementById("starting").style.display = "none";

        document.getElementById("myName").innerHTML = playerName;

        }, 2000); 
    }else{

        document.getElementById("invalid").innerHTML = "You have invalid input";
        document.getElementById("invalid").style.display = "block";

        document.getElementById("getName").value = "";

        setTimeout(() => {
        document.getElementById("invalid").style.display = "none";
    }, 2000); 
}}



function getMaleAvatar(){
    let gamename = document.getElementById("getName").value;

    document.getElementById("choosegender").style.display = "none";
    document.getElementById("maleavatar").style.display = "block";

    document.getElementById("ign").innerHTML = gamename;
}

function getFemaleAvatar(){
    let gamename = document.getElementById("getName").value;

    document.getElementById("choosegender").style.display = "none";

    document.getElementById("femaleavatar").style.display = "block";

    document.getElementById("ign").innerHTML = gamename;
}
    
