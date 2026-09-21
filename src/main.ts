// npx tsc src/main.ts --outDir dist --watch 

const chessboard = document.querySelector("#chessBoard")

const whiteClassName = "white"
const blackClassName = "black"

const size = 8

if(chessboard) {
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const square = document.createElement("div")
            if(i%2 == j%2){ // shoutout to Replicube for teaching me this!!
                square.classList.add(whiteClassName)
            }else{
                square.classList.add(blackClassName)
            }
            chessboard.appendChild(square)
        }
        
    }

} 