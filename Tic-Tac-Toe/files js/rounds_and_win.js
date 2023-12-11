function cell_click(cell_number) { //  פוקציה אשר בודקת תורמי ואם יש בחירה כפולה על תא
    const img = document.createElement("img");
    const turn = Game_board.xo === 1 ? "x" : "o";
    if (Game_board.arr[cell_number] == "x" || Game_board.arr[cell_number] == "o") { // בודק עם אין בחירה נוספת על תא תופס
        swal("Error!", "The place is taken, you need to choose a new place", "error")
    }
    else { // מפניה לפוקציות נוספות X בודק עם התא הנבחר פנוי ואם זה תור של 
        img.src = `imgs/${turn}.png`;
        const src = document.getElementById(`cell-${cell_number}`);
        src.appendChild(img); //בתא הנבחר X  שם תמונה של 
        Game_board.arr[cell_number] = turn//זהה למספר התא indexב  X מגדיר מחרוזת 
        Game_board.xo = 3 // נועל את האפשרות ללחוץ על הלוח
        win() // מפנה לפוקציה בדיקת ניצחון
        Game_board.xo = 3 // נועל את האפשרות ללחוץ על הלוח
        //X פוקציה זו מחכה שהסתיים בדיקה של הנצחון ואז מפנה לבדיקה של סיום משחק וכיבוי האור המהבב מעל ה
        if (turn === "x") {
            setTimeout(function () { finish(turn), off_blink_for_x(), on_blink_for_o(); }, 1300);
        }
        else {
            setTimeout(function () { finish(turn), off_blink_for_o(), on_blink_for_x(); }, 1300);

        }
    }
}
function check_win(arr1, arr2) {
    if (arr2.length >= 3) {
        let win = null
        arr1.sort();
        arr2.sort();
        if (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
            return win = true
        }
        else {
            return win = false
        }
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
            blink(...win), show_x_win(), Game_board.arr = Game_board.arr.map(reset), setTimeout(() => Canceling_blink(...win), 1299);
        }
        if (check_win(win, index_o)) {
            Game_board.who_winner = "o"
            blink(...win), show_o_win(), Game_board.arr = Game_board.arr.map(reset), setTimeout(() => Canceling_blink(...win), 1299);
        }
    }
}
function reset(n) { // למספר 0  MAP בעזרת  ARR בעת ניצחון מתבצע איפוס לרשימה 
    return 0;
}

function blink(a, b, c) { //מדליק אור מהבהב על השורה המנצחת
    const div1 = document.querySelector(`#cell-${a}`);
    div1.id = `blink-cell-${a}`;
    const div2 = document.querySelector(`#cell-${b}`);
    div2.id = `blink-cell-${b}`;
    const div3 = document.querySelector(`#cell-${c}`);
    div3.id = `blink-cell-${c}`;
}

function Canceling_blink(a, b, c) {   // מכבה את האור המהבהב של השורה המנצחת
    const div1 = document.querySelector(`#blink-cell-${a}`);
    div1.id = `cell-${a}`;
    const div2 = document.querySelector(`#blink-cell-${b}`);
    div2.id = `cell-${b}`;
    const div3 = document.querySelector(`#blink-cell-${c}`);
    div3.id = `cell-${c}`;
}

function show_x_win() { // מציגה התראה ניצחון מרחפת מלמטה ללמעלה
    var x = document.getElementById("x");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function show_o_win() { // מציגה התראה ניצחון מרחפת מלמטה ללמעלה
    var o = document.getElementById("o");
    o.className = "show";
    setTimeout(function () { o.className = o.className.replace("show", ""); }, 3000);
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
            return a === "x" ? Check_full_arr(Game_board.arr) : Check_full_arr2(Game_board.arr);
        }
    }
}

function off_blink_for_o() {  //O מכבה אור מהבב של ה        
    const div1 = document.querySelector("#blink-4");
    div1.id = "c-4";
}


function off_blink_for_x() {  //X מכבה אור מהבב של ה     
    const div1 = document.querySelector("#blink-2");
    div1.id = "c-2"
}

function Check_full_arr() { // בודקת אם נישאר תא פנוי או שהכל התאים תפוסים 
    for (let i = 0; i < Game_board.arr.length; i++) {
        if (Game_board.arr[i] === -1) {
            return Game_board.game_type == 1 ? Game_board.xo = 0 :
                Game_board.game_type == 2 ? easy_bot(Game_board.arr) :
                    Game_board.game_type == 3 ? Hard_bot(Game_board.arr) : "";
        }
    }
    return swal({ title: "Dead heat!!", text: "", timer: 1000 }),
        Game_board.arr = Game_board.arr.map(reset),
        Game_board.rounds++,
        document.getElementById("c-6").textContent = Game_board.rounds,
        Game_board.xo = 1,
        restarting();  // הקוד יבוצע אם כל הערכים של המערך אינם שווים ל--1
}

function Check_full_arr2() { // בודקת אם נישאר תא פנוי או שהכל התאים תפוסים  
    for (let i = 0; i < Game_board.arr.length; i++) {
        if (Game_board.arr[i] === -1) {
            return Game_board.xo = 1
        }
    }
    return swal({ title: "Dead heat!!", text: "", timer: 1000 }),
        Game_board.arr = Game_board.arr.map(reset),
        Game_board.rounds++,
        document.getElementById("c-6").textContent = Game_board.rounds,
        Game_board.xo = 1,
        restarting();
}