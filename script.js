let gameSeq = [];
let userSeq = [];
let body = document.querySelector("body");
let originalBg = getComputedStyle(body).backgroundColor || "white";


let btns = ["yellow" , "purple" , "red" , "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
})

function btnFalsh(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 220)
}


function userFalsh(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 220)
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randInx = Math.floor(Math.random() * 4);
    let randomColor = btns[randInx];
    
    
    let randbtn = document.querySelector(`.${randomColor}`);
    
    // console.log(randInx);
    // console.log(randbtn);
    // console.log(randomColor)

    // console.log("🎯 Random Index:", randInx);
    // console.log("🎨 Random Color:", randomColor);
    // console.log("📦 Current Game Sequence:", gameSeq);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFalsh(randbtn);
}

function checkAns(index){
    // console.log("curr level : " , level);
    
    if(userSeq[index] == gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(() => {
                levelUp();
            }, 1000);
        }
        
    }else{
        h2.innerHTML = `Game over!  Your score was <b> ${level}</b> <br>Press any key to start again  `;
        body.style.backgroundColor = "red";
setTimeout(function(){
    body.style.backgroundColor = originalBg;
}, 150);


    }
}

function btnPress(){
    
    let btn = this;
    userFalsh(btn);
    let userColor  = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);


}

let allbtns  = document.querySelectorAll(".box");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq =  [];
    userSeq = [];
    level = 0;
    

}