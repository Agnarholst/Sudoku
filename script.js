// const b1r1 = document.getElementById("b1r1");
// const b1r2 = document.getElementById("b1r2");
// const b1r3 = document.getElementById("b1r3");
// const b1r4 = document.getElementById("b1r4");
// const b1r5 = document.getElementById("b1r5");
// const b1r6 = document.getElementById("b1r6");
// const b1r7 = document.getElementById("b1r7");
// const b1r8 = document.getElementById("b1r8");
// const b1r9 = document.getElementById("b1r9");


// b1r9.innerHTML = "9";

// When b1r9 is clikced make able to changed innerHTML.
// if  between 1 and 9 = change innerHTML
// else Invalid - try againg

// const what = document.getElementById("b1r1").onclick = function () {
//     what.innerHTML = "9";
// }

let activeCell = null;

function makeActive(cell) {
    if (activeCell !== null) {
        activeCell.classList.remove("active");
    }

    activeCell = cell;
    cell.classList.add("active");
}


function setNumber(num) {
    //active cell will get the number of button clicked. 
    if (activeCell !== null) {
        activeCell.innerHTML = num;
    }
}