let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let maincont=document.querySelector("main");
let turnO=true;//playerX playerO
let count=0;//to track draw

const winpatterns=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame=()=>{
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
    maincont.classList.remove("hide");
};
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});
const gamedraw=()=>{
    msg.innerText='game was a draw!';
    msgcontainer.classList.remove("hide");
};
const disableboxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
};
const enableboxes = () => {
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
};
const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    maincont.classList.add("hide");
     disableboxes();
  };
const checkwinner=() =>{
    for(let pattern of winpatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showwinner(pos1Val);
        return true;
      }
    }
}
};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

