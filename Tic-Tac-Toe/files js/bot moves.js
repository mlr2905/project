
function easy_bot() { //  זה בעצם הרמה הקלה  היא יכולה לנצח וגם נתן לנצח אותה
   
        const cond = [
    Game_board.arr[4] !== "o" && Game_board.arr[4] !== "x",
    Game_board.arr[4] === "x" && Game_board.arr[8] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[1] === "x" && Game_board.arr[2] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[2] === "x" && Game_board.arr[1] === -1,
    Game_board.arr[1] === "x" && Game_board.arr[2] === "x" && Game_board.arr[0] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[3] === "x" && Game_board.arr[6] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[6] === "x" && Game_board.arr[3] === -1,
    Game_board.arr[3] === "x" && Game_board.arr[6] === "x" && Game_board.arr[0] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[4] === "x" && Game_board.arr[8] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[8] === "x" && Game_board.arr[4] === -1,
    Game_board.arr[3] === "x" && Game_board.arr[4] === "x" && Game_board.arr[5] === -1,
    Game_board.arr[1] === "x" && Game_board.arr[7] === "x" && Game_board.arr[4] === -1,
    Game_board.arr[7] === "x" && Game_board.arr[4] === "x" && Game_board.arr[1] === -1,
    Game_board.arr[0] === "o" && Game_board.arr[1] === "o" && Game_board.arr[2] === -1,
    Game_board.arr[7] === "o" && Game_board.arr[5] === "o" && Game_board.arr[8] === -1,
    Game_board.arr[0] === "o" && Game_board.arr[2] === "o" && Game_board.arr[1] === -1,
    Game_board.arr[2] === "o" && Game_board.arr[6] === "o" && Game_board.arr[1] === -1,
    Game_board.arr[0] === "o" && Game_board.arr[8] === "o" && Game_board.arr[7] === -1,
    Game_board.arr[1] === "o" && Game_board.arr[3] === "o" && Game_board.arr[0] === -1,
    Game_board.arr[1] === "o" && Game_board.arr[2] === "o" && Game_board.arr[0] === -1,
    Game_board.arr[0] === "o" && Game_board.arr[3] === "o" && Game_board.arr[6] === -1,
    Game_board.arr[0] === "o" && Game_board.arr[6] === "o" && Game_board.arr[3] === -1]
    const action = [4, 8, 2, 1, 0, 6, 3, 0, 8, 4, 5, 4, 1, 2, 8, 1, 1, 7, 0, 0, 6, 3]
    for (let i = 0; i < cond.length; i++) {
        if (cond[i] === true) {
            action[i]
            return cell_click(action[i],Game_board.xo = 0)
        }
    }
    return default1()
}

function Hard_bot() { // הרמה הקשה לא ניתן לנצח אותה
    const cond = [Game_board.arr[4] !== "o" && Game_board.arr[4] !== "x", Game_board.arr[4] === "x" && Game_board.arr[8] === -1, Game_board.arr[0] === "o" && Game_board.arr[1] === "o" && Game_board.arr[2] === -1,
    Game_board.arr[4] === "o" && Game_board.arr[5] === "x" && Game_board.arr[8] === -1 && Game_board.arr[0] === -1 && Game_board.arr[1] === -1 && Game_board.arr[2] === -1 && Game_board.arr[3] === -1 &&
    Game_board.arr[4] === -1  && Game_board.arr[6] === -1  && Game_board.arr[7] === -1,
    Game_board.arr[4] === "o" && Game_board.arr[7] === "x" && Game_board.arr[8] === -1 && Game_board.arr[0] === -1 && Game_board.arr[1] === -1 && Game_board.arr[2] === -1 && Game_board.arr[3] === -1 &&
    Game_board.arr[4] === -1  && Game_board.arr[6] === -1  && Game_board.arr[5] === -1,
    Game_board.arr[4] === "o" && Game_board.arr[3] === "x" && Game_board.arr[8] === -1 && Game_board.arr[0] === -1 && Game_board.arr[1] === -1 && Game_board.arr[7] === -1 && Game_board.arr[2] === -1 &&
    Game_board.arr[4] === -1  && Game_board.arr[6] === -1  && Game_board.arr[5] === -1,
    Game_board.arr[4] === "o" && Game_board.arr[2] === "x" && Game_board.arr[8] === -1 && Game_board.arr[0] === -1 && Game_board.arr[1] === -1 && Game_board.arr[7] === -1 && Game_board.arr[3] === -1 &&
    Game_board.arr[4] === -1  && Game_board.arr[6] === -1  && Game_board.arr[5] === -1,
    Game_board.arr[4] === "o" && Game_board.arr[0] === "x" && Game_board.arr[8] === -1 && Game_board.arr[2] === -1 && Game_board.arr[1] === -1 && Game_board.arr[7] === -1 && Game_board.arr[3] === -1 &&
    Game_board.arr[4] === -1  && Game_board.arr[6] === -1  && Game_board.arr[5] === -1,
    Game_board.arr[4] === "o" && Game_board.arr[1] === "x" && Game_board.arr[8] === -1 && Game_board.arr[2] === -1 && Game_board.arr[0] === -1 && Game_board.arr[7] === -1 && Game_board.arr[3] === -1 &&
    Game_board.arr[4] === -1  && Game_board.arr[6] === -1  && Game_board.arr[5] === -1,
    Game_board.arr[4] === "o" && Game_board.arr[8] === "x" && Game_board.arr[0] === -1 && Game_board.arr[2] === -1 && Game_board.arr[1] === -1 && Game_board.arr[7] === -1 && Game_board.arr[3] === -1 &&
    Game_board.arr[4] === -1  && Game_board.arr[6] === -1  && Game_board.arr[5] === -1,
    Game_board.arr[7] === "o" && Game_board.arr[5] === "o" && Game_board.arr[8] === -1, Game_board.arr[0] === "o" && Game_board.arr[2] === "o" && Game_board.arr[1] === -1,
    Game_board.arr[2] === "o" && Game_board.arr[6] === "o" && Game_board.arr[1] === -1, Game_board.arr[0] === "o" && Game_board.arr[8] === "o" && Game_board.arr[7] === -1,
    Game_board.arr[1] === "o" && Game_board.arr[3] === "o" && Game_board.arr[0] === -1, Game_board.arr[1] === "o" && Game_board.arr[2] === "o" && Game_board.arr[0] === -1,
    Game_board.arr[0] === "o" && Game_board.arr[3] === "o" && Game_board.arr[6] === -1, Game_board.arr[0] === "o" && Game_board.arr[6] === "o" && Game_board.arr[3] === -1,
    Game_board.arr[3] === "o" && Game_board.arr[6] === "o" && Game_board.arr[0] === -1, Game_board.arr[0] === "o" && Game_board.arr[4] === "o" && Game_board.arr[8] === -1,
    Game_board.arr[0] === "o" && Game_board.arr[8] === "o" && Game_board.arr[4] === -1, Game_board.arr[8] === "o" && Game_board.arr[4] === "o" && Game_board.arr[0] === -1,
    Game_board.arr[2] === "o" && Game_board.arr[4] === "o" && Game_board.arr[6] === -1, Game_board.arr[2] === "o" && Game_board.arr[6] === "o" && Game_board.arr[4] === -1,
    Game_board.arr[6] === "o" && Game_board.arr[4] === "o" && Game_board.arr[2] === -1, Game_board.arr[2] === "o" && Game_board.arr[5] === "o" && Game_board.arr[8] === -1,
    Game_board.arr[2] === "o" && Game_board.arr[8] === "o" && Game_board.arr[5] === -1, Game_board.arr[8] === "o" && Game_board.arr[5] === "o" && Game_board.arr[2] === -1,
    Game_board.arr[3] === "o" && Game_board.arr[4] === "o" && Game_board.arr[5] === -1, Game_board.arr[5] === "o" && Game_board.arr[1] === "o" && Game_board.arr[8] === -1,
    Game_board.arr[3] === "o" && Game_board.arr[5] === "o" && Game_board.arr[4] === -1, Game_board.arr[5] === "o" && Game_board.arr[4] === "o" && Game_board.arr[3] === -1,
    Game_board.arr[6] === "o" && Game_board.arr[7] === "o" && Game_board.arr[8] === -1, Game_board.arr[6] === "o" && Game_board.arr[8] === "o" && Game_board.arr[7] === -1,
    Game_board.arr[8] === "o" && Game_board.arr[7] === "o" && Game_board.arr[6] === -1, Game_board.arr[1] === "o" && Game_board.arr[4] === "o" && Game_board.arr[7] === -1,
    Game_board.arr[1] === "o" && Game_board.arr[7] === "o" && Game_board.arr[4] === -1, Game_board.arr[7] === "o" && Game_board.arr[4] === "o" && Game_board.arr[1] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[1] === "x" && Game_board.arr[2] === -1, Game_board.arr[0] === "x" && Game_board.arr[2] === "x" && Game_board.arr[1] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[8] === "x" && Game_board.arr[4] === -1, Game_board.arr[1] === "x" && Game_board.arr[2] === "x" && Game_board.arr[0] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[3] === "x" && Game_board.arr[6] === -1, Game_board.arr[0] === "x" && Game_board.arr[6] === "x" && Game_board.arr[3] === -1,
    Game_board.arr[3] === "x" && Game_board.arr[6] === "x" && Game_board.arr[0] === -1, Game_board.arr[0] === "x" && Game_board.arr[4] === "x" && Game_board.arr[8] === -1,
    Game_board.arr[0] === "x" && Game_board.arr[8] === "x" && Game_board.arr[4] === -1, Game_board.arr[8] === "x" && Game_board.arr[4] === "x" && Game_board.arr[0] === -1,
    Game_board.arr[2] === "x" && Game_board.arr[4] === "x" && Game_board.arr[6] === -1, Game_board.arr[2] === "x" && Game_board.arr[6] === "x" && Game_board.arr[4] === -1,
    Game_board.arr[6] === "x" && Game_board.arr[4] === "x" && Game_board.arr[2] === -1, Game_board.arr[2] === "x" && Game_board.arr[5] === "x" && Game_board.arr[8] === -1,
    Game_board.arr[2] === "x" && Game_board.arr[8] === "x" && Game_board.arr[5] === -1, Game_board.arr[8] === "x" && Game_board.arr[5] === "x" && Game_board.arr[2] === -1,
    Game_board.arr[3] === "x" && Game_board.arr[4] === "x" && Game_board.arr[5] === -1, Game_board.arr[3] === "x" && Game_board.arr[5] === "x" && Game_board.arr[4] === -1,
    Game_board.arr[5] === "x" && Game_board.arr[4] === "x" && Game_board.arr[3] === -1, Game_board.arr[6] === "x" && Game_board.arr[7] === "x" && Game_board.arr[8] === -1,
    Game_board.arr[6] === "x" && Game_board.arr[8] === "x" && Game_board.arr[7] === -1, Game_board.arr[8] === "x" && Game_board.arr[7] === "x" && Game_board.arr[6] === -1,
    Game_board.arr[1] === "x" && Game_board.arr[4] === "x" && Game_board.arr[7] === -1, Game_board.arr[1] === "x" && Game_board.arr[7] === "x" && Game_board.arr[4] === -1,
    Game_board.arr[7] === "x" && Game_board.arr[4] === "x" && Game_board.arr[1] === -1, Game_board.arr[7] === "x" && Game_board.arr[5] === "x" && Game_board.arr[8] === -1,
    Game_board.arr[2] === "x" && Game_board.arr[6] === "x" && Game_board.arr[1] === -1, Game_board.arr[5] === "x" && Game_board.arr[1] === "x" && Game_board.arr[8] === -1]

    const action = [4, 8, 2, 8, 8, 8, 8, 8, 8, 5, 8, 1, 1,
        7, 0, 0, 6, 3, 0, 8, 4, 0, 6, 4, 2, 8,
        5, 2, 5, 8, 4, 3, 8, 7, 6, 7, 4, 1, 2,
        1, 4, 0, 6, 3, 0, 8, 4, 0, 6, 4, 2, 8,
        5, 2, 5, 4, 3, 8, 7, 6, 7, 4, 1, 8, 1, 8]

    for (let i = 0; i < cond.length; i++) {
        if (cond[i] === true) {
            action[i]
            return cell_click(action[i],Game_board.xo = 0)
        }
    }
    return default1()
}

function default1() { //פונקציה שנתונת תא אקראי
    while (true) {
        const cell_number = Math.floor(Math.random() * Game_board.arr.length);
        if (Game_board.arr[cell_number] === -1) {
            return cell_click(cell_number,Game_board.xo = 0)
        } else {
            continue;
        }
    }
}