let boxes=document.querySelectorAll(".box");
let reset_button =document.querySelector(".reset-button");
let msg=document.querySelector(".msg");
let game_over=document.querySelector(".game-over");
let new_game_button=document.querySelector(".new-btn");

let turno = true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno==true)
        {
            box.innerText="O"
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    })
})

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3)
            {
                showwinner(pos1);
            }
        }
    }
}
let disableBoxex=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
let enableBoxes=()=>{
    
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

let showwinner=(winner)=>{
    msg.innerText="Winner is "+winner;
    game_over.classList.remove("hide");
    reset_button.classList.add("hide");
    disableBoxex();
}

const resetgame=()=>{
    turno=true;
    enableBoxes();
    game_over.classList.add("hide");
    reset_button.classList.remove("hide");
}

new_game_button.addEventListener("click",resetgame);
reset_button.addEventListener("click",resetgame);