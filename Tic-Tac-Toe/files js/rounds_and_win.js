function cell_click(cell_number) { //  פוקציה אשר בודקת תורמי ואם יש בחירה כפולה על תא
    const img = document.createElement("img");
    const Who = Game_board.xo === 1 ? "x" : "o";
    if (Game_board.arr[cell_number] == "x" || Game_board.arr[cell_number] == "o") { // בודק עם אין בחירה נוספת על תא תופס
        swal("Error!", "The place is taken, you need to choose a new place", "error")
    }
    if (Game_board.xo !== 3) { // מפניה לפוקציות נוספות X בודק עם התא הנבחר פנוי ואם זה תור של 
        Game_board.xo = 3
        img.src = `imgs/${Who}.png`;
        const src = document.getElementById(`cell-${cell_number}`);
        src.appendChild(img); //בתא הנבחר X  שם תמונה של 
        Game_board.arr[cell_number] = Who //זהה למספר התא indexב  X מגדיר מחרוזת 
        win() // מפנה לפוקציה בדיקת ניצחון
        //X פוקציה זו מחכה שהסתיים בדיקה של הנצחון ואז מפנה לבדיקה של סיום משחק וכיבוי האור המהבב מעל ה
        setTimeout(function () { finish(Who), toggle_Blin_For_X_or_o(2), toggle_Blin_For_X_or_o(4) }, 1300);
    }
}
function check_win(arr1, arr2) {
    if (arr2.length >= 3) {
        arr1.sort();
        arr2.sort();
        return arr1.reduce((acc, el, i) => (acc && el === arr2[i]), true);
    }
}

function win() { // O או של  X פונקציה שבודקת ניצחון של
    // במידה ושי ניצחון היא מפעילה מספר פונקציות
    const test_win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    const index_x = [];
    const index_o = []
    for (const i of Game_board.arr.keys()) {
        if (Game_board.arr[i] === "x") index_x.push(i);
        if (Game_board.arr[i] === "o") index_o.push(i);
    }
    for (const win of test_win) {
        if (check_win(win, index_x)) {
            Game_board.who_winner = "x"
            return blink_on_or_off(...win), show_win("x"), Game_board.arr = Game_board.arr.map(reset), setTimeout(() => blink_on_or_off(...win), 1299);
        }
        if (check_win(win, index_o)) {
            Game_board.who_winner = "o"
            return blink_on_or_off(...win), show_win("o"), Game_board.arr = Game_board.arr.map(reset), setTimeout(() => blink_on_or_off(...win), 1299);
        }
    }
}
function reset(n) { // למספר 0  MAP בעזרת  ARR בעת ניצחון מתבצע איפוס לרשימה 
    return 0;
}

function blink_on_or_off(a, b, c) { //מדליק אור מהבהב על השורה המנצחת
    const div1 = document.querySelector(`#cell-${a}`);
    const div2 = document.querySelector(`#cell-${b}`);
    const div3 = document.querySelector(`#cell-${c}`);
    const div4 = document.querySelector(`#blink-cell-${a}`);
    const div5 = document.querySelector(`#blink-cell-${b}`);
    const div6 = document.querySelector(`#blink-cell-${c}`);
    (div1)
        ? (div1.id = `blink-cell-${a}`,
            div2.id = `blink-cell-${b}`,
            div3.id = `blink-cell-${c}`)
        : (div4.id = `cell-${a}`,
            div5.id = `cell-${b}`,
            div6.id = `cell-${c}`);
}

function show_win(id) { // מציגה התראה ניצחון מרחפת מלמטה ללמעלה
    const win = document.getElementById(id);
    win.className = "show";
    setTimeout(function () { win.className = win.className.replace("show", ""); }, 3000);
}

function finish(a) {  // פונקציה בודקת אם המשחק  הסתיים ומעלה את מספר הסיבובים והנצחנות של עיגול ואם לא ממשיכה לתור הבא
    for (const number of Game_board.arr) {
        if (number == 0) {
            for (let i = 0; i < Game_board.arr.length; i++) {
                document.getElementById(`cell-${i}`).textContent = null;
            }
            Game_board.who_winner === "x" ? (Game_board.xo = 0, Game_board.win_x++) : (Game_board.xo = 1, Game_board.win_o++);
            return Game_board.arr = [-1, -1, -1, -1, -1, -1, -1, -1, -1],
                Game_board.rounds++,
                document.getElementById("c-5").textContent = Game_board.win_x,
                document.getElementById("c-6").textContent = Game_board.rounds,
                document.getElementById("c-7").textContent = Game_board.win_o
        }
        else {
            return Check_full_arr(a);
        }
    }
}
function toggle_Blin_For_X_or_o(id) {
    const div1 = document.querySelector(`#c-${id}`);
    const div2 = document.querySelector(`#blink-${id}`);
    if (div1 !== null) {
        div1.id = `blink-${id}`
    }
    else {
        div2.id = `c-${id}`
    }
}

function Check_full_arr(a) { // בודקת אם נישאר תא פנוי או שהכל התאים תפוסים 
    for (let i = 0; i < Game_board.arr.length; i++) {
        if (Game_board.arr[i] === -1) {
            if (a === "x") {
                switch (Game_board.game_type) {
                    case 1: return Game_board.xo = 0
                    case 2: return easy_bot()
                    case 3: return Hard_bot()
                }
            }
            else {
                return Game_board.xo = 1
            }
        }
    }
    (Game_board.xo === 1) ? Game_board.xo = 0 : Game_board.xo = 1;

    return swal({ title: "Dead heat!!", text: "", timer: 1000 }),
        Game_board.arr = Game_board.arr.map(reset),
        Game_board.rounds++,
        document.getElementById("c-6").textContent = Game_board.rounds, restarting()
}