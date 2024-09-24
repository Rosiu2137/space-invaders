import { deletedRows } from "./startgame.js"

export default function checkInvadersBoxDown()
{
    
    if(!deletedRows.includes("row3"))
    {
        const row3 = [...document.querySelector("#row3").children]
        if(row3.filter(x=>!x.classList.contains("displayNone")).length == 0)
        {
            document.querySelector("#row3").remove()
            deletedRows.push("row3")


            if(!deletedRows.includes("row2"))
            {
                const row2 = [...document.querySelector("#row2").children]
                if(row2.filter(x=>!x.classList.contains("displayNone")).length == 0)
                {
                    document.querySelector("#row2").remove()
                    deletedRows.push("row2")
                    if(!deletedRows.includes("row1"))
                    {
                        const row1 = [...document.querySelector("#row1").children]
                        if(row1.filter(x=>!x.classList.contains("displayNone")).length == 0)
                        {
                            document.querySelector("#row1").remove()
                            deletedRows.push("row1")
                        }
                    }
                }

            }
        }
    }
    else if(!deletedRows.includes("row2"))
    {
        const row2 = [...document.querySelector("#row2").children]
        if(row2.filter(x=>!x.classList.contains("displayNone")).length == 0)
        {
            document.querySelector("#row2").remove()
            deletedRows.push("row2")
            if(!deletedRows.includes("row1"))
            {
                const row1 = [...document.querySelector("#row1").children]
                if(row1.filter(x=>!x.classList.contains("displayNone")).length == 0)
                {
                    document.querySelector("#row1").remove()
                    deletedRows.push("row1")
                }
            }
        }
    }
    else if(!deletedRows.includes("row1"))
    {
        const row1 = [...document.querySelector("#row1").children]
        if(row1.filter(x=>!x.classList.contains("displayNone")).length == 0)
        {
            document.querySelector("#row1").remove()
            deletedRows.push("row1")
        }
    }
   
   
}