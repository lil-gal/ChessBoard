"use strict";
// npx tsc src/main.ts --outDir dist --watch 
const chessboard = document.querySelector("#chessBoard");
const whiteClassName = "white";
const blackClassName = "black";
const alph = "abcdefgh";
const size = 8;
if (chessboard) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            if (i % 2 == j % 2) { // shoutout to Replicube for teaching me this!!
                square.classList.add(whiteClassName);
            }
            else {
                square.classList.add(blackClassName);
            }
            if (j == 0) {
                const coord = document.createElement("p");
                coord.innerHTML = alph[(alph.length - 1) - i];
                coord.classList.add("leftColumnP");
                square.appendChild(coord);
            }
            if (i == size - 1) {
                const coord = document.createElement("p");
                coord.innerHTML = `${j + 1}`;
                coord.classList.add("bottomRowP");
                square.appendChild(coord);
            }
            chessboard.appendChild(square);
        }
    }
}
