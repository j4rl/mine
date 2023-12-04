addEventListener("DOMContentLoaded", function(){
    const box=document.querySelector(".box");
    const screen=document.querySelector(".screen");
    let width=10
    let bombAmount=10
    let isGameOver=false
    let tiles=[]

    function createBoard(){
        let bombsArray=Array(bombAmount).fill('bomb');
        let emptyArray=Array(width*width-bombAmount).fill('clear');
        let gameArray=emptyArray.concat(bombsArray);
        console.log(gameArray);
        let shuffledArray=gameArray.sort(() => Math.random() -0.5);
        console.log(shuffledArray);
        for(let i=0;i<width*width;i++){
            const tile=document.createElement("div");
            tile.setAttribute("id", i);
            tile.classList.add("cen");
            tile.classList.add("tile");
            tile.innerHTML=i;
            tile.classList.add(shuffledArray[i]);
            box.appendChild(tile);
            tiles.push(tile);

            //vanligt klick
            tile.addEventListener("click", function(e){
                click(tile);
            })
            //högerklicks
            tile.oncontextmenu=function(e){
                e.preventDefault();
                addFlag(tile);
            }
        }


    }


    createBoard();
})