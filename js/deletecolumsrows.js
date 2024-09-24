import checkInvadersBoxDown from "./checkinvadersboxdown.js"
import { deletedColumns } from "./startgame.js"
import { deletedRows } from "./startgame.js"

let idinvadersareblured = []
function fixTranslate()
{
    const con = document.querySelector("#invadersContainer")
    if(deletedColumns.includes("col8"))
    {
        con.style.transform = "translate(1rem)"
        if(deletedColumns.includes("col7"))
        {
            con.style.transform = "translate(2rem)"
            if(deletedColumns.includes("col6"))
            {
                con.style.transform = "translate(3rem)"
                if(deletedColumns.includes("col5"))
                {
                    con.style.transform = "translate(4rem)"
                    if(deletedColumns.includes("col4"))
                    {
                        con.style.transform = "translate(5rem)"
                        if(deletedColumns.includes("col3"))
                        {
                            con.style.transform = "translate(6rem)"
                            if(deletedColumns.includes("col2"))
                            {
                                con.style.transform = "translate(7rem)"
                            }
                        }
                    }
                }
            }
        }
    }
}
function checkArray()
{
   if(deletedRows.includes("row3"))
    {
        idinvadersareblured.push("iv25")
        idinvadersareblured.push("iv26")
        idinvadersareblured.push("iv27")
        idinvadersareblured.push("iv28")
        idinvadersareblured.push("iv29")
        idinvadersareblured.push("iv30")
        idinvadersareblured.push("iv31")
        idinvadersareblured.push("iv32")
        if(deletedRows.includes("row2"))
        {
            idinvadersareblured.push("iv17")
            idinvadersareblured.push("iv18")
            idinvadersareblured.push("iv19")
            idinvadersareblured.push("iv20")
            idinvadersareblured.push("iv21")
            idinvadersareblured.push("iv22")
            idinvadersareblured.push("iv23")
            idinvadersareblured.push("iv24")
            if(deletedRows.includes("row1"))
            {
                idinvadersareblured.push("iv9")
                idinvadersareblured.push("iv10")
                idinvadersareblured.push("iv11")
                idinvadersareblured.push("iv12")
                idinvadersareblured.push("iv13")
                idinvadersareblured.push("iv14")
                idinvadersareblured.push("iv15")
                idinvadersareblured.push("iv16")
            }
        }
    }
}
export default function checkSizeInvadersBox()
{
        const con = document.querySelector("#invadersContainer")
        idinvadersareblured =[]
        const invaderblured = [...document.querySelectorAll(".displayNone")]
        for(let i =0;i<invaderblured.length;i++)
        {
            idinvadersareblured.push(invaderblured[i].id)
        }
        checkArray()
        if(idinvadersareblured.includes("iv8") && idinvadersareblured.includes("iv16") && idinvadersareblured.includes("iv24") && idinvadersareblured.includes("iv32"))
        {
            if(document.querySelector("#iv8"))
            {
                document.querySelector("#iv8").remove()
            }
            if(document.querySelector("#iv16"))
            {
                document.querySelector("#iv16").remove()
            }
            if(document.querySelector("#iv24"))
            {
                document.querySelector("#iv24").remove()
            }
            if(document.querySelector("#iv32"))
            {
                document.querySelector("#iv32").remove()
            }
            deletedColumns.push("col1")
            fixTranslate()
        }
        if(deletedColumns.includes("col1"))
        {
            if(idinvadersareblured.includes("iv7") && idinvadersareblured.includes("iv15") && idinvadersareblured.includes("iv23") && idinvadersareblured.includes("iv31"))
            {
                if(document.querySelector("#iv7"))
                {
                    document.querySelector("#iv7").remove()
                }
                if(document.querySelector("#iv15"))
                {
                    document.querySelector("#iv15").remove()
                }
                if(document.querySelector("#iv23"))
                {
                    document.querySelector("#iv23").remove()
                }
                if(document.querySelector("#iv31"))
                {
                    document.querySelector("#iv31").remove()
                }
                deletedColumns.push("col2")
                fixTranslate()
                }
        }
        if(deletedColumns.includes("col2"))
        {
            if(idinvadersareblured.includes("iv6") && idinvadersareblured.includes("iv14") && idinvadersareblured.includes("iv22") && idinvadersareblured.includes("iv30"))
            {
                if(document.querySelector("#iv6"))
                {
                    document.querySelector("#iv6").remove()
                }
                if(document.querySelector("#iv14"))
                {
                    document.querySelector("#iv14").remove()
                }
                if(document.querySelector("#iv22"))
                {
                    document.querySelector("#iv22").remove()
                }
                if(document.querySelector("#iv30"))
                {
                    document.querySelector("#iv30").remove()
                }
                deletedColumns.push("col3")
                fixTranslate()
            }
        }
        if(deletedColumns.includes("col3"))
        {
            if(idinvadersareblured.includes("iv5") && idinvadersareblured.includes("iv13") && idinvadersareblured.includes("iv21") && idinvadersareblured.includes("iv29"))
            {
                if(document.querySelector("#iv5"))
                {
                    document.querySelector("#iv5").remove()
                }
                if(document.querySelector("#iv13"))
                {
                    document.querySelector("#iv13").remove()
                }
                if(document.querySelector("#iv21"))
                {
                    document.querySelector("#iv21").remove()
                }
                if(document.querySelector("#iv29"))
                {
                    document.querySelector("#iv29").remove()
                }
                deletedColumns.push("col4")
                fixTranslate()
            }
        }
        if(deletedColumns.includes("col4"))
        {
            if(idinvadersareblured.includes("iv4") && idinvadersareblured.includes("iv12") && idinvadersareblured.includes("iv20") && idinvadersareblured.includes("iv28"))
            {
                if(document.querySelector("#iv4"))
                {
                    document.querySelector("#iv4").remove()
                }
                if(document.querySelector("#iv12"))
                {
                    document.querySelector("#iv12").remove()
                }
                if(document.querySelector("#iv20"))
                {                  
                    document.querySelector("#iv20").remove()
                }
                if(document.querySelector("#iv28"))
                {
                    document.querySelector("#iv28").remove()
                }
                deletedColumns.push("col5")
                fixTranslate()
            }
        }
        if(deletedColumns.includes("col5"))
        {
            if(idinvadersareblured.includes("iv3") && idinvadersareblured.includes("iv11") && idinvadersareblured.includes("iv19") && idinvadersareblured.includes("iv27"))
            {
                if(document.querySelector("#iv3"))
                {
                    document.querySelector("#iv3").remove()
                }
                if(document.querySelector("#iv11"))
                {
                    document.querySelector("#iv11").remove()
                }
                if(document.querySelector("#iv19"))
                {
                    document.querySelector("#iv19").remove()
                }
                if(document.querySelector("#iv27"))
                {
                    document.querySelector("#iv27").remove()
                }
                deletedColumns.push("col6")
                fixTranslate()
            }
        }
        if(deletedColumns.includes("col6") )
        {
           
            if(idinvadersareblured.includes("iv2") && idinvadersareblured.includes("iv10") && idinvadersareblured.includes("iv18") && idinvadersareblured.includes("iv26"))
            {
                if(document.querySelector("#iv2"))
                {
                    document.querySelector("#iv2").remove()
                }
                if(document.querySelector("#iv10"))
                {
                    document.querySelector("#iv10").remove()
                }
                if(document.querySelector("#iv18"))
                {
                    document.querySelector("#iv18").remove()
                }
                if(document.querySelector("#iv26"))
                {
                    document.querySelector("#iv26").remove()
                }
                deletedColumns.push("col7")
                fixTranslate()
            }
        }
        if(deletedColumns.includes("col7"))
        {
            if(idinvadersareblured.includes("iv1") && idinvadersareblured.includes("iv9") && idinvadersareblured.includes("iv17") && idinvadersareblured.includes("iv25"))
            {
                if(document.querySelector("#iv1"))
                {
                    document.querySelector("#iv1").remove()
                }
                if(document.querySelector("#iv9"))
                {
                    document.querySelector("#iv9").remove()
                }
                if(document.querySelector("#iv17"))
                {
                    document.querySelector("#iv17").remove()
                }
                if(document.querySelector("#iv25"))
                {
                    document.querySelector("#iv25").remove()
                }
                deletedColumns.push("col8")
                fixTranslate()
            }
        }



    if(idinvadersareblured.includes("iv1") && idinvadersareblured.includes("iv9") && idinvadersareblured.includes("iv17") && idinvadersareblured.includes("iv25"))
        {
            if(!deletedColumns.includes("col7"))
            {
             con.style.transform = "translate(1rem)"
             moveInvadersBullets()
            }
            if(document.querySelector("#iv1"))
            {
                document.querySelector("#iv1").remove()
            }
            if(document.querySelector("#iv9"))
            {
                document.querySelector("#iv9").remove()
            }
            if(document.querySelector("#iv17"))
            {
                document.querySelector("#iv17").remove()
            }
            if(document.querySelector("#iv25"))
            {
                document.querySelector("#iv25").remove()
            }
          
          
            deletedColumns.push("col8")
        }
        if(deletedColumns.includes("col8"))
        {
            if(idinvadersareblured.includes("iv2") && idinvadersareblured.includes("iv10") && idinvadersareblured.includes("iv18") && idinvadersareblured.includes("iv26"))
            {
                if(!deletedColumns.includes("col6"))
                {
                   con.style.transform = "translate(2rem)"
                   moveInvadersBullets()
                }
                if(document.querySelector("#iv2"))
                {
                    document.querySelector("#iv2").remove()
                }
                if(document.querySelector("#iv10"))
                {
                    document.querySelector("#iv10").remove()
                }
                if(document.querySelector("#iv18"))
                {
                    document.querySelector("#iv18").remove()
                }
                if(document.querySelector("#iv26"))
                {
                    document.querySelector("#iv26").remove()
                }
                deletedColumns.push("col7")
}
        }
        if(deletedColumns.includes("col7"))
        {
            if(idinvadersareblured.includes("iv3") && idinvadersareblured.includes("iv11") && idinvadersareblured.includes("iv19") && idinvadersareblured.includes("iv27"))
            {
                if(!deletedColumns.includes("col5"))
                {
                    con.style.transform = "translate(3rem)"
                    moveInvadersBullets()
                }
                if(document.querySelector("#iv3"))
                {
                    document.querySelector("#iv3").remove()
                }
                if(document.querySelector("#iv11"))
                {
                    document.querySelector("#iv11").remove()
                }
                if(document.querySelector("#iv19"))
                {
                    document.querySelector("#iv19").remove()
                }
                if(document.querySelector("#iv27"))
                {
                    document.querySelector("#iv27").remove()
                }
                deletedColumns.push("col6")
            }
        }
        if(deletedColumns.includes("col6"))
        {
            if(idinvadersareblured.includes("iv4") && idinvadersareblured.includes("iv12") && idinvadersareblured.includes("iv20") && idinvadersareblured.includes("iv28"))
            {
                if(!deletedColumns.includes("col4"))
                {
                  con.style.transform = "translate(4rem)"
                  moveInvadersBullets()
                }
                if(document.querySelector("#iv4"))
                {
                    document.querySelector("#iv4").remove()
                }
                if(document.querySelector("#iv12"))
                {
                    document.querySelector("#iv12").remove()
                }
                if(document.querySelector("#iv20"))
                {
                    document.querySelector("#iv20").remove()
                }
                if(document.querySelector("#iv28"))
                {
                    document.querySelector("#iv28").remove()
                }
                deletedColumns.push("col5")
            }
        }
        if(deletedColumns.includes("col5"))
        {
            if(idinvadersareblured.includes("iv5") && idinvadersareblured.includes("iv13") && idinvadersareblured.includes("iv21") && idinvadersareblured.includes("iv29"))
            {
                if(!deletedColumns.includes("col3"))
                {
                   con.style.transform = "translate(5rem)"
                   moveInvadersBullets()
                }
                if(document.querySelector("#iv5"))
                {
                    document.querySelector("#iv5").remove()
                }
                if(document.querySelector("#iv13"))
                {
                    document.querySelector("#iv13").remove()
                }
                if(document.querySelector("#iv21"))
                {
                    document.querySelector("#iv21").remove()
                }
                if(document.querySelector("#iv29"))
                {
                    document.querySelector("#iv29").remove()
                }
                deletedColumns.push("col4")
            }
        }
        if(deletedColumns.includes("col4"))
        {
            if(idinvadersareblured.includes("iv6") && idinvadersareblured.includes("iv14") && idinvadersareblured.includes("iv22") && idinvadersareblured.includes("iv30"))
            {
                if(!deletedColumns.includes("col2"))
                {
                    con.style.transform = "translate(6rem)"
                    moveInvadersBullets()
                }
                if(document.querySelector("#iv6"))
                {
                    document.querySelector("#iv6").remove()
                }
                if(document.querySelector("#iv14"))
                {
                    document.querySelector("#iv14").remove()
                }
                if(document.querySelector("#iv22"))
                {
                    document.querySelector("#iv22").remove()
                }
                if(document.querySelector("#iv30"))
                {
                    document.querySelector("#iv30").remove()
                }
                deletedColumns.push("col3")
            }
        }
        if(deletedColumns.includes("col3"))
        {
            if(idinvadersareblured.includes("iv7") && idinvadersareblured.includes("iv15") && idinvadersareblured.includes("iv23") && idinvadersareblured.includes("iv31"))
            {
                if(!deletedColumns.includes("col1"))
                {
                    con.style.transform = "translate(7rem)"
                    moveInvadersBullets()
                }
                if(document.querySelector("#iv7"))
                {
                    document.querySelector("#iv7").remove()
                }
                if(document.querySelector("#iv15"))
                {
                    document.querySelector("#iv15").remove()
                }
                if(document.querySelector("#iv23"))
                {
                    document.querySelector("#iv23").remove()
                }
                if(document.querySelector("#iv31"))
                {
                    document.querySelector("#iv31").remove()
                }
                deletedColumns.push("col2")
            }
        }
        checkInvadersBoxDown()
}

function moveInvadersBullets()
{
    const invadersBullets = document.querySelectorAll(".invaderShot")
    invadersBullets.forEach(x=>{
        
        
        
     
    
        if(!x.style.translate)
        {
           
            x.style.translate = "-1rem"

        }
        else
        {
          
            let idx = Number(x.style.translate[1])
            idx++
           
            x.style.translate = `-${idx}rem`
        }
    })
}