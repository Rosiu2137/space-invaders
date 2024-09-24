import { setlifes } from "./index.js"
import { generateBullets } from "./invaderbullets.js"
import checkSizeInvadersBox from "./deletecolumsrows.js"
import getHTMLInvaders from "./gethtmlinvaders.js"
const gameBoard = document.querySelector("#game-board")
const body = document.querySelector("body")
let time =350 
let score = 0
let position = 50
let actuallyshot = false
let direction = true
let bullets = []
let pong = 0
let lifes = 3
let level = 1
let invaders
export let gameover = false
export let deletedColumns = []
export let deletedRows = []

function findinvaders()
{
    invaders =  [...document.querySelectorAll(".inv")]
    const invadercon = document.querySelector("#invadersContainer")
    invadercon.style.top = `.5rem`
    invadercon.style.left = `0px`
}

function levelHandler()
{
    const levelscore = document.querySelector("#nextLevel")
    let idx = 0;
    const interval = setInterval(() => {
        idx++
        levelscore.innerHTML = ``
        setTimeout(() => {
            levelscore.innerHTML = `LEVEL ${level}`
        }, 200);
        if(idx == 6)
        {
            levelscore.innerHTML = `LEVEL ${level}`
            clearInterval(interval)
        }
    }, 400);
}

function startGame()
{
    levelHandler()
    const player = document.querySelector("#player")
    const con = document.querySelector("#invadersContainer")
    const scoreDisplay = document.querySelector("#points")
    body.addEventListener("keydown",keyPress)
    gameBoard.style.cursor = "none"

    findinvaders()

    function keyPress(e){
        if(!gameover)
        {

            keyboardEvent(e.code)
        }
    }

    function keyboardEvent(key)
    {
        switch(key)
        {
            case "ArrowRight":
                changePosition(1)
                break
            case "ArrowLeft":
                changePosition(-1)
                break
            case "Space":
                shot()
                break
        }
    }

    function changePosition(value)
    {
        const newPosition = position + value
        if(newPosition>1 && newPosition<99)
        {
            position+=value
            SetPosition()
        }
    }

    function SetPosition()
    {
        const player2 = document.querySelector("#player")
        player2.style.left = `${position}%`
    }

    function shot()
    {
        if(!actuallyshot)
        {
            let sound = new Audio("sounds/untitled.wav")
            
           sound.play()
            const bullet = document.createElement('div')
            bullet.className = "shot"
            bullet.style.left = `${position}%`
            bullet.style.top = `${player.offsetTop}px`
            gameBoard.appendChild(bullet)
            bullets.push(bullet)
            actuallyshot = true
            culldown()
        }
    }

    const move = () =>
    {
       for(let i =0;i<bullets.length;i++)
       {
            const bl = bullets[i]
            bl.style.top = `${bl.offsetTop - window.innerWidth/200}px`
            if(bl.offsetTop < -10)
            {
                bullets.splice(i,1)
                i--
                bl.remove()
            }
            else
            {
                bulletColision(bl)
            }
       }
    }

    
    

    function bulletColision(bullet)
    {
        const bulletPosition = bullet.getBoundingClientRect()
        for(let i =0;i<invaders.length;i++)
        {
            const inv = invaders[i]
            const invaderPosition = inv.getBoundingClientRect()
            if(checkColision(bulletPosition,invaderPosition))
            {
                const idx = bullets.indexOf(bullet)
                bullets.splice(idx,1)
                bullet.remove()
                invaders.splice(i,1)
                inv.classList.remove("invaderSkin1")
                inv.classList.remove("invaderSkin2")
                inv.classList.add("displayNone")
                score += 100
                displayScore()
                const invaders2 = invaders
                if(!gameover)
                {
                    const sound = new Audio("sounds/invaderkilled.wav")
                    sound.play()

                }
                if(invaders2.length == 0)
                {
                    replay()
                }
                else
                {

                    checkSizeInvadersBox()
                    
                }
                break
            }
        }
    }

    function displayScore()
    {
        const bestScore = localStorage.getItem("bestScore")
        if(score > bestScore)
        {
            localStorage.setItem("bestScore",score)
        }
        if(score == 0)
        {
            scoreDisplay.innerHTML = `0000`
        }
        else if(score <1000)
        {
            scoreDisplay.innerHTML = `0${score}`
        }
        else if(score >= 1000)
        {
            scoreDisplay.innerHTML = score
        }
    }

    function checkColision(bullet,invader)
    {
        return ((bullet.left > invader.left && bullet.right < invader.right) && (bullet.top < invader.bottom && bullet.top < invader.bottom))
    }

    
    function culldown()
    {
        setTimeout(()=>{
            actuallyshot = false
        },800)
    }

    function moveInvadersDown()
    {
        con.style.top = `${con.offsetTop + window.innerWidth/50}px`
        if(gameBoard.getBoundingClientRect().bottom-window.innerWidth/15<con.getBoundingClientRect().bottom)
        {
            return true
        }
        else
        {
            return false
        }
    }


    function moveInvaders()
    {
        const moveinv =  setInterval(() => {
            if(direction)
            {
                const newOffset = con.getBoundingClientRect().right + window.innerWidth/150
                const invbullets = document.querySelectorAll(".invaderShot")
                const gameboardleft = gameBoard.getBoundingClientRect().right
                if(newOffset <gameboardleft)
                {
                    con.style.left = `${con.offsetLeft+window.innerWidth/150}px`
                    reImage()
                    invbullets.forEach(x=>{
                        const pos = x.offsetLeft
                        x.style.left = `${pos-window.innerWidth/150}px`
                    })
                }
                else
                {
                    direction = false
                    pong++
                    if(pong % 3 == 0)
                    {
                        if(moveInvadersDown())
                        {
                            clearInterval(moveinv)
                            gameOver()
                        }
                    }
                    if(time > 50)
                    {
                        time-=10
                        clearInterval(moveinv)
                        moveInvaders()
                    }
                }
            }
            else
            {
                const newOffset = con.getBoundingClientRect().left -window.innerWidth/150
                const invbullets = document.querySelectorAll(".invaderShot")
                const gameboardleft = gameBoard.getBoundingClientRect().left
                if(newOffset > gameboardleft)
                {
                    con.style.left = `${con.offsetLeft-window.innerWidth/150}px`
                    reImage()
                    invbullets.forEach(x=>{
                        const pos = x.offsetLeft
                        x.style.left = `${pos+window.innerWidth/150}px`
                    })
                }
                else
                {
                    direction = true
                    pong++
                    if(pong % 3 == 0)
                    {
                        if(moveInvadersDown())
                        {
                            clearInterval(moveinv)
                            gameOver()
                        }
                    }
                    if(time > 100)
                    {   
                        time-=10
                        clearInterval(moveinv)
                        moveInvaders()
                    }
                }
            }
           
        }, time);
    }
    
    function reImage()
    {
        const invaders2 = [...document.querySelectorAll(".inv")].filter(x=>!x.classList.contains("displayNone"))
        invaders2.forEach(x => {
            if(x.classList.contains("invaderSkin1"))
            {
                x.classList.remove("invaderSkin1")
                x.classList.add("invaderSkin2")
            }
            else
            {
                x.classList.remove("invaderSkin2")
                x.classList.add("invaderSkin1")
            }
        });
    }

    SetPosition()
    displayScore()
    moveInvaders()
    setInterval(move, 50);
    generateBullets(false)
}


function checkGraphicsOption(el)
{
    el.classList.remove("displayNone")
    const invaders = [...document.querySelectorAll(".inv")]
    const indexof = invaders.indexOf(el)
    if(indexof < 8 || (indexof >15 && indexof < 24))
    {
        if(indexof % 2 == 0)
        {
            el.classList.add("invaderSkin1")
        }
        else
        {
            el.classList.add("invaderSkin2")
        }
    }
    else
    {
        if(indexof % 2 == 0)
        {
            el.classList.add("invaderSkin2")
        }
        else
        {
            el.classList.add("invaderSkin1")
        }
    }
}

export function replay()
{
    
    bullets.forEach(x=>x.remove())
    bullets = []
    level++
    deletedColumns = []
    deletedRows = []
    levelHandler()
    const invaders = [...document.querySelectorAll(".inv")]
    invaders.forEach(x=>{
        checkGraphicsOption(x)
    })
    actuallyshot = false
    direction = true
    pong = 0
    const con = document.querySelector("#invadersContainer")
    con.style.transform = "translate(0%)"
    getHTMLInvaders()
    findinvaders()
    const sounds = new Audio("sounds/mixkit-repeating-arcade-beep-1084.wav")
    sounds.play()
}

export function gameOver()
{
    gameover = true
    const sound = new Audio("sounds/explosion.wav")
    sound.play()
    gameBoard.style.cursor = "default"
    gameBoard.innerHTML += `<div class="losetheme"></div><div class="lose"><h1>GameOver!</h1><h2>${score}</h2><h3>Your Score</h3><button class="btn" id="playAgain">Play Again</button></div>`
    localStorage.setItem("lastScore",score)
    const lose = document.querySelector(".lose")
    const losetheme = document.querySelector(".losetheme")
    setTimeout(() => {
        lose.style.opacity = 1
        losetheme.style.opacity = 1
    }, 200);
    const btn = document.querySelector("#playAgain")
    btn.addEventListener("click",()=>{
        lose.style.opacity = 0
        losetheme.style.opacity = 0
        location.reload()
    })
    generateBullets(true)
}




export function lostlife()
{
   
    lifes -- 
    const sound = new Audio("sounds/mixkit-laser-gun-shot-3110.wav")
    sound.play()
    setlifes(lifes)
    player.style.opacity = 0
    let indx = 0;
     const a = setInterval(() => {
        indx++
        player.style.opacity = 1
        setTimeout(() => {
            player.style.opacity = 0
            if(indx > 3)
            {   
                player.style.opacity = 1
                clearInterval(a)
           
            }
        }, 150);
        
    }, 300);
    
}

export default startGame