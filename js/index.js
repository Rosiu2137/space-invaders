import startGame from "./startgame.js"
import { gameOver } from "./startgame.js"

function deleteSpaceEvent(e)
{
    if(e.code == "Space")
    {
        e.preventDefault()
    }
}

function menuStart()
{
    document.querySelector("body").addEventListener("keydown",deleteSpaceEvent)

    

    const gameBoard = document.querySelector("#game-board")
    gameBoard.innerHTML += `<div class="menuStart"><h1 id="header1">SPACE INVADERS</h1><button id="start" class="btn">Start</button></div>`
    const menustart = document.querySelector(".menuStart")
    const bs = localStorage.getItem("bestScore")
    const ls = localStorage.getItem("lastScore")
    if(ls)
    {
        menustart.innerHTML += `<div class="bs"><h2>${ls}</h2><h3>Last Score</h3></div>`
    }
    if(bs)
    {
        menustart.innerHTML += `<div class="bs"><h2>${bs}</h2><h3>Best Score</h3></div>`
    }
    const start = document.querySelector("#start")
    start.addEventListener("click",()=>{
        setlifes(3)
        setTimeout(()=>{
            menustart.style.opacity = 0
            setTimeout(() => {
                menustart.remove()
                    startGame()
                }, 1100);
        },200)
    })
}
export function setlifes(il)
{
    const life = document.querySelector("#lives")
    life.innerHTML = ``
    if(il < 0)
    {
        gameOver()
    }
    for(let i =0;i<il;i++)
    {
        life.innerHTML+=`<img src="img/heart00000000.png">`
    }
}
menuStart()
