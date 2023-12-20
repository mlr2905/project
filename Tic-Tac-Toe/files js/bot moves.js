function easy_bot() { //  זה בעצם הרמה הקלה  היא יכולה לנצח וגם נתן לנצח אותה
    let a = Game_board.arr[0]; let b = Game_board.arr[1]; let c = Game_board.arr[2]; let d = Game_board.arr[3]
    let e = Game_board.arr[4]; let f = Game_board.arr[5]; let g = Game_board.arr[6]; let h = Game_board.arr[7]; let i = Game_board.arr[8]
    const cond = [
        e !== "o" && e !== "x", e === "x" && i === -1, a === "x" && b === "x" && c === -1,
        a === "x" && c === "x" && b === -1, b === "x" && c === "x" && a === -1,
        a === "x" && d === "x" && g === -1, a === "x" && g === "x" && d === -1,
        d === "x" && g === "x" && a === -1, a === "x" && e === "x" && i === -1,
        a === "x" && i === "x" && e === -1, d === "x" && e === "x" && f === -1,
        b === "x" && h === "x" && e === -1, h === "x" && e === "x" && b === -1,
        a === "o" && b === "o" && c === -1, h === "o" && f === "o" && i === -1,
        a === "o" && c === "o" && b === -1, c === "o" && g === "o" && b === -1,
        a === "o" && i === "o" && h === -1, b === "o" && d === "o" && a === -1,
        b === "o" && c === "o" && a === -1, a === "o" && d === "o" && g === -1,
        a === "o" && g === "o" && d === -1]
    const action = [4, 8, 2, 1, 0, 6, 3, 0, 8, 4, 5, 4, 1, 2, 8, 1, 1, 7, 0, 0, 6, 3]
    for (let i = 0; i < cond.length; i++) {
        if (cond[i] === true) {
            action[i]
            return cell_click(action[i], Game_board.xo = 0)
        }
    }
    return random_bot()
}

function Hard_bot() { // הרמה הקשה לא ניתן לנצח אותה
    let a = Game_board.arr[0]; let b = Game_board.arr[1]; let c = Game_board.arr[2]; let d = Game_board.arr[3]
    let e = Game_board.arr[4]; let f = Game_board.arr[5]; let g = Game_board.arr[6]; let h = Game_board.arr[7]; let i = Game_board.arr[8]
    const cond = [
        e !== "o" && e !== "x", e === "x" && i === -1, a === "o" && b === "o" && c === -1,
        e === "o" && f === "x" && i === -1 && a === -1 && b === -1 && c === -1 && d === -1 && g === -1 && h === -1,
        e === "o" && h === "x" && i === -1 && a === -1 && b === -1 && c === -1 && d === -1 && e === -1 && g === -1 && f === -1,
        e === "o" && d === "x" && i === -1 && a === -1 && b === -1 && h === -1 && c === -1 && e === -1 && g === -1 && f === -1,
        e === "o" && c === "x" && i === -1 && a === -1 && b === -1 && h === -1 && d === -1 && e === -1 && g === -1 && f === -1,
        e === "o" && a === "x" && i === -1 && c === -1 && b === -1 && h === -1 && d === -1 && e === -1 && g === -1 && f === -1,
        e === "o" && b === "x" && i === -1 && c === -1 && a === -1 && h === -1 && d === -1 && e === -1 && g === -1 && f === -1,
        e === "o" && i === "x" && a === -1 && c === -1 && b === -1 && h === -1 && d === -1 && e === -1 && g === -1 && f === -1,
        h === "o" && f === "o" && i === -1, a === "o" && c === "o" && b === -1, c === "o" && g === "o" && b === -1, a === "o" && i === "o" && h === -1,
        b === "o" && d === "o" && a === -1, b === "o" && c === "o" && a === -1, a === "o" && d === "o" && g === -1, a === "o" && g === "o" && d === -1,
        d === "o" && g === "o" && a === -1, a === "o" && e === "o" && i === -1, a === "o" && i === "o" && e === -1, i === "o" && e === "o" && a === -1,
        c === "o" && e === "o" && g === -1, c === "o" && g === "o" && e === -1, g === "o" && e === "o" && c === -1, c === "o" && f === "o" && i === -1,
        c === "o" && i === "o" && f === -1, i === "o" && f === "o" && c === -1, d === "o" && e === "o" && f === -1, f === "o" && b === "o" && i === -1,
        d === "o" && f === "o" && e === -1, f === "o" && e === "o" && d === -1, g === "o" && h === "o" && i === -1, g === "o" && i === "o" && h === -1,
        i === "o" && h === "o" && g === -1, b === "o" && e === "o" && h === -1, b === "o" && h === "o" && e === -1, h === "o" && e === "o" && b === -1,
        a === "x" && b === "x" && c === -1, a === "x" && c === "x" && b === -1, a === "x" && i === "x" && e === -1, b === "x" && c === "x" && a === -1,
        a === "x" && d === "x" && g === -1, a === "x" && g === "x" && d === -1, d === "x" && g === "x" && a === -1, a === "x" && e === "x" && i === -1,
        a === "x" && i === "x" && e === -1, i === "x" && e === "x" && a === -1, c === "x" && e === "x" && g === -1, c === "x" && g === "x" && e === -1,
        g === "x" && e === "x" && c === -1, c === "x" && f === "x" && i === -1, c === "x" && i === "x" && f === -1, i === "x" && f === "x" && c === -1,
        d === "x" && e === "x" && f === -1, d === "x" && f === "x" && e === -1, f === "x" && e === "x" && d === -1, g === "x" && h === "x" && i === -1,
        g === "x" && i === "x" && h === -1, i === "x" && h === "x" && g === -1, b === "x" && e === "x" && h === -1, b === "x" && h === "x" && e === -1,
        h === "x" && e === "x" && b === -1, h === "x" && f === "x" && i === -1, c === "x" && g === "x" && b === -1, f === "x" && b === "x" && i === -1
    ]

    const action = [4, 8, 2, 8, 8, 8, 8, 8, 8, 5, 8, 1, 1,
        7, 0, 0, 6, 3, 0, 8, 4, 0, 6, 4, 2, 8,
        5, 2, 5, 8, 4, 3, 8, 7, 6, 7, 4, 1, 2,
        1, 4, 0, 6, 3, 0, 8, 4, 0, 6, 4, 2, 8,
        5, 2, 5, 4, 3, 8, 7, 6, 7, 4, 1, 8, 1, 8]
    for (let i = 0; i < cond.length; i++) return cond[i] ? cell_click(action[i], Game_board.xo = 0) : random_bot()
}

function random_bot() { //פונקציה שנתונת תא אקראי
    while (true) {
        const cell_number = Math.floor(Math.random() * Game_board.arr.length);
        if (Game_board.arr[cell_number] === -1) {
            return cell_click(cell_number, Game_board.xo = 0)
        } else {
            continue;
        }
    }
}