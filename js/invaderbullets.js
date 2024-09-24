import { lostlife } from "./startgame.js"
import { gameover } from "./startgame.js"
let invadersBullets = []
const gameBoard = document.querySelector("#game-board")
let time2 = 5000

function randomInvaderShot()
{
    const invaders = [...document.querySelectorAll(".inv")].filter(x=>x.classList.contains("displayNone") == false)
    let idx =0
    if(invaders.length > 0)
    {
        do
        {
            idx = Math.floor(Math.random()*100)
        }
        while(idx >= invaders.length)
        return idx 
    }
}

function randomSoundsforInvadersShot()
{
    let random
    let sound
    do
    {
        random = Math.floor(Math.random()*10)

    }
    while(random <=0 || random >4)
    if(random == 1)
    {
        sound = new Audio("sounds/fastinvader1.wav")
    }
    else if(random == 2)
    {
        sound = new Audio("sounds/fastinvader2.wav")
    }
    else if(random == 3)
    {
        sound = new Audio("sounds/fastinvader3.wav")
    }
    else
    {
        sound = new Audio("sounds/fastinvader4.wav")
    }
    
    sound.play()
}

function createBullet()
{
    if(!gameover)
    {
        const invaders = [...document.querySelectorAll(".inv")].filter(x=>x.classList.contains("displayNone") == false)
        const idx = randomInvaderShot()
        const bullet = document.createElement('div')
        bullet.classList.add('invaderShot')
        bullet.style.left = `${invaders[idx].offsetLeft}px`
        bullet.style.top = `${invaders[idx].offsetTop}px`
        randomSoundsforInvadersShot()
        return bullet
    }
   
}

function shotInvaders()
{
    const con = document.querySelector("#invadersContainer")
    const bullet  = createBullet()
    con.appendChild(bullet)
    invadersBullets.push(bullet)
}

function checkcolision()
{
    const player = document.querySelector("#player")
    invadersBullets.forEach(x=>{
        if(checkpositions(player.getBoundingClientRect(),x.getBoundingClientRect()))
        {
            const idx = invadersBullets.indexOf(x)
            invadersBullets.splice(idx,1)
            x.remove()
            lostlife()
        }
    })
}

function checkpositions(player,bullet)
{
  return ((player.top < bullet.top && player.bottom > bullet.bottom) &&(player.left<=bullet.left && player.right >= bullet.right))
}

function startInervalGenerate()
{
    const generate = setInterval(()=>{
        shotInvaders()
        time2 -= 100
        if(time2>400)
        {
            clearInterval(generate)
            startInervalGenerate()
        }
    },time2)
}

export function generateBullets(state)
{   
    const godown = setInterval(()=>{
        if(state)
        {
            invadersBullets.forEach(x=>x.remove())
            invadersBullets = []
        }
        else
        {
            for(let i =0;i<invadersBullets.length;i++)
            {
                const positionTop = invadersBullets[i].offsetTop + window.innerWidth/100
                const positionTopbound = invadersBullets[i].getBoundingClientRect().top
                const positionBoard = gameBoard.getBoundingClientRect().bottom
                    if(positionTopbound < positionBoard)
                    {
                        invadersBullets[i].style.top = `${positionTop}px`
                        checkcolision()
                    }
                    else
                    {
                        invadersBullets[i].remove()
                        invadersBullets.splice(i,1)
                    }
                }
        }
    },150)
    
    startInervalGenerate()
}