let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "blue"];

let h1 = document.querySelector("#title");

document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("game is started");
        started = true;

        levelup();
    }
});

function levelup() {
    level++;
    userseq = [];

    h1.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 4);
    let randcol = btns[random];

    let randombtn = document.querySelector(`.${randcol}`);
    gameseq.push(randcol);

    console.log("Random color:", randcol);
    btnflash(randombtn);
}

function btnflash(btn) {
    if (!btn) {
        console.error("Button not found");
        return;
    }

    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}
