let activeCell = null;
let activeCellId = null;
let box = [];
let game = true;

const sudokuboardLetters = {
    "01AAA": 5, "02ABA": 0, "03ACA": 3, "04ADB": 9, "05AEB": 1, "06AFB": 0, "07AGC": 0, "08AHC": 0, "09AIC": 7,

    "10BAA": 0, "11BBA": 2, "12BCA": 6, "13BDB": 0, "14BEB": 3, "15BFB": 0, "16BGC": 8, "17BHC": 0, "18BIC": 5,

    "19CAA": 4, "20CBA": 9, "21CCA": 0, "22CDB": 0, "23CEB": 8, "24CFB": 6, "25CGC": 2, "26CHC": 0, "27CIC": 0,

    "28DAD": 0, "29DBD": 5, "30DCD": 0, "31DDE": 0, "32DEE": 2, "33DFE": 0, "34DGF": 1, "35DHF": 7, "36DIF": 8,

    "37EAD": 7, "38EBD": 0, "39ECD": 0, "40EDE": 0, "41EEE": 5, "42EFE": 0, "43EGF": 0, "44EHF": 0, "45EIF": 3,

    "46FAD": 8, "47FBD": 0, "48FCD": 9, "49FDE": 0, "50FEE": 0, "51FFE": 0, "52FGF": 0, "53FHF": 0, "54FIF": 2,

    "55GAG": 0, "56GBG": 0, "57GCG": 0, "58GDH": 0, "59GEH": 0, "60GFH": 0, "61GGI": 0, "62GHI": 2, "63GII": 4,

    "64HAG": 0, "65HBG": 7, "66HCG": 8, "67HDH": 0, "68HEH": 4, "69HFH": 0, "70HGI": 0, "71HHI": 1, "72HII": 9,

    "73IAG": 0, "74IBG": 4, "75ICG": 5, "76IDH": 7, "77IEH": 9, "78IFH": 0, "79IGI": 3, "80IHI": 0, "81III": 0
};

const entriesArray = Object.entries(sudokuboardLetters);

function setBoard(board) {
    i = 1;
    while (i < 81) {
        cellId = entriesArray[i - 1][0];
        cellValue = entriesArray[i - 1][1];
        if (cellValue !== 0) {
            document.getElementById(cellId).style.color = "rgb(228, 234, 253)";
        }
        document.getElementById(cellId).innerHTML = cellValue;
        i++;
    }
}


setBoard(sudokuboardLetters);

let waitingForNumber = True

function makeActive(cell) { //Function made by chatgpt.  
    if (activeCell !== null) {
        activeCell.classList.remove("active");
    }
    activeCell = cell;
    cell.classList.add("active");
    document.addEventListener('keydown', function (event) {
        if (event.key >= '1' && event.key <= '9') {
            setNumber(event.key);
        }
    });
}


let wrongCounter = 0;
function gameOver() {
    wrongCounter++
    if (wrongCounter == 3) {
        alert("Game Over!")
        game = false;
    }
}

function setNumber(num) {
    while (game == true) {
        if (activeCell !== null) {
            activeCellId = activeCell.getAttribute("id");
        if (sudokuboardLetters[activeCellId] !== 0) {
            return console.log("Only empty squares can be given numbers.");
        } else {
            whichRow = activeCellId.slice(2, -2);
            whichCol = activeCellId.slice(3, -1);
            whichBox = activeCellId.slice(-1);
            for (let i of Object.keys(sudokuboardLetters)) {
                if (i.slice(-1) == whichBox) { // Game logic to avoid duplicates within the same box. 
                    if (sudokuboardLetters[i] == num) {
                        gameOver()
                        return console.log("Can't have two of the same number within one box.");
                    }
                }
                if (i.slice(2, -2) == whichRow) { // Game logic for rows. 
                    if (sudokuboardLetters[i] == num) {
                        gameOver()
                        return console.log("Can't have two of the same number in one row.");
                    }
                }
                if (i.slice(3, -1) == whichCol) { // Game logic for columns
                    if (sudokuboardLetters[i] == num) {
                        gameOver()
                        return console.log("Can't have two of the same number in one column.");
                    }
                }
            }
            activeCell.innerHTML = num;
            activeCell.style.color = "rgb(,228, 234, 253)";
            sudokuboardLetters[activeCellId] = Number(num);
            for (let i of Object.values) {
                if (i == 0) {
                    return console.log("Game goes on");
                }
            }
            alert("Victory!");
            game = false;
        }

        }
    }
} 

