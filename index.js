
var gamePad = [3][3] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var turnGame = 1;
var win = [];
var SelectedCounter = 0;
function clickOp(e, row, col) {
    console.warn("Row : " + row + "/" + "Col : " + col);
    gamePad[row][col] = turnGame;
    if (turnGame > 0)
        e.classList.add("green");
    else
        e.classList.add("blue");

    e.classList.add("disabled");
    ++SelectedCounter;
    if (SelectedCounter >= 3) {
        //----------Row Scan---- -------

        const row1 = gamePad[0][0] == turnGame && gamePad[0][1] == turnGame && gamePad[0][2] == turnGame;
        const row2 = gamePad[1][0] == turnGame && gamePad[1][1] == turnGame && gamePad[1][2] == turnGame;
        const row3 = gamePad[2][0] == turnGame && gamePad[2][1] == turnGame && gamePad[2][2] == turnGame;
        //----------Col Scan-----------
        const col1 = gamePad[0][0] == turnGame && gamePad[1][0] == turnGame && gamePad[2][0] == turnGame;
        const col2 = gamePad[0][1] == turnGame && gamePad[1][1] == turnGame && turnGame;
        const col3 = gamePad[0][2] == turnGame && gamePad[1][2] == turnGame && gamePad[2][2] == turnGame;

        const extra1 = gamePad[0][0] == turnGame && gamePad[1][1] == turnGame && gamePad[2][2] == turnGame;
        const extra2 = gamePad[2][0] == turnGame && gamePad[1][1] == turnGame && gamePad[0][2] == turnGame;

        if (row1 || row2 || row3 || col1 || col2 || col3 || extra1 || extra2) {
            document.getElementsByTagName("table")[0].classList.add("disabled");;
            if (turnGame > 0) {
                document.getElementById("result").innerText = "Winer : Green Player";
            } else {
                document.getElementById("result").innerText = "Winer : Blue Player";
            }
            return;
        }
    }
    turnGame = turnGame * -1;


}