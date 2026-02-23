let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");


const genCompChoice = () =>{
    //rock,paper,scissor
    const options =["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() *3);
    return options[randidx];

}

const showwinner = (userwin, userchoice , compchoice) =>{
    if (userwin){
        userscore+=1;
        user.innerText = userscore;
        console.log("You win!");
        msg.innerText = `You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        console.log("userscore = ",userscore);
    }
    else{
        compscore+=1;
        comp.innerText = compscore;
        console.log("You lose");
         msg.innerText = `You loose, ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        console.log("compscore = ",compscore);

    }
}


const draw = () =>{
    console.log("game was draw");
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "black";


}

const playgame = (userchoice) =>{
    console.log("userchoice = ", userchoice);
    //generate computer choice
    const compchoice = genCompChoice();
    console.log("comp choice = ",compchoice);

    if (userchoice === compchoice){
        //draw
        draw();
    }else{
        let userwin = true;
        if(userchoice ==="rock"){
            //scissor or paper
            userwin = compchoice==="paper" ? false : true;
        }else if (userchoice ==="paper"){
            //rock or scissor
            userwin = compchoice==="scissor" ? false : true;

        }else{
            //rock or paper
            userwin = compchoice==="rock" ? false : true;
        }
        showwinner(userwin,userchoice, compchoice );
    }
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});