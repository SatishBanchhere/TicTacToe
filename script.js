let boxes = document.querySelectorAll(".box");
console.log(boxes[1]);
let reset = document.querySelector(".reset");
let top1 = document.querySelector(".top");

let turn0 = 0;
let turnX = 1;
if (turn0 === 1) {
    top1.innerText = "Player 0, make your move:";
}
else {
    top1.innerText = "Player X, make your move:";
}


let winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Wow");
//     });
// });

boxes.forEach(e => {
    e.addEventListener("click", () => {
        console.log("Wow1");
        if (turn0 == 1) {
            e.innerText = '0';
            turn0 = 0;
            turnX = 1;
        }
        else {
            e.innerText = 'X';
            turnX = 0;
            turn0 = 1;

        }
        if (turn0 === 1) {
            top1.innerText = "Player 0, make your move:";
        }
        else {
            top1.innerText = "Player X, make your move:";
        }
        e.disabled = 1;
        e.style.backgroundColor = "rgb(173, 168, 190)";
        checkWinner(e);
    })
});

reset.addEventListener("click", () => {
    boxes.forEach(e => {
        e.innerText = '';
        e.disabled = 0;
        e.style.backgroundColor = "white";
        top1.innerText = '';
        // e.style.backgroundColor = "rgb(185,164,177)";
    });
})
top1.classList.remove("hide");
const checkWinner = (e) => {
    for (let index = 0; index < winPatterns.length; index++) {
        const e1 = winPatterns[index];
        console.log(e1[0], e1[1], e1[2]);
        console.log(boxes[e1[0]].innerText, boxes[e1[1]].innerText, boxes[e1[2]].innerText);

        if (boxes[e1[0]].innerText === boxes[e1[1]].innerText && boxes[e1[1]].innerText === boxes[e1[2]].innerText && boxes[e1[0]].innerText != '') {
            // console.log(boxes[e1[0]].i);
            // console.log("Jhala");

            // alert(boxes[e1[0]].innerText + " won the match");
            for (box of boxes) {
                box.disabled = 1;
                if (box.innerText === '') {

                    box.style.backgroundColor = "rgb(185,164,177)";
                }
            }
            top1.innerText = "Winner is " + boxes[e1[0]].innerText;
            top1.classList.remove("hide");
        }
    }
}