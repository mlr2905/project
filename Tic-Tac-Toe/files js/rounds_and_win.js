
function cell_click(cell_number) { //  פוקציה אשר בודקת תורמי ואם יש בחירה כפולה על תא
    if (Game_board.arr[cell_number] == "x" || Game_board.arr[cell_number] == "o") { // בודק עם אין בחירה נוספת על תא תופס
        swal("Error!", "The place is taken, you need to choose a new place", "error")
    }
    if (Game_board.arr[cell_number] != "x" && Game_board.xo == "1" && Game_board.arr[cell_number] != "o") { // מפניה לפוקציות נוספות X בודק עם התא הנבחר פנוי ואם זה תור של 
        //
        const img = document.createElement("img");
        img.src = "imgs/x.png";
        const src = document.getElementById(`cell-${cell_number}`);
        src.appendChild(img); //בתא הנבחר X  שם תמונה של 
        Game_board.arr[cell_number] = "x"//זהה למספר התא indexב  X מגדיר מחרוזת 
        Game_board.xo = 3 // נועל את האפשרות ללחוץ על הלוח
        win() // מפנה לפוקציה בדיקת ניצחון
        Game_board.xo = 3 // נועל את האפשרות ללחוץ על הלוח
        //X פוקציה זו מחכה שהסתיים בדיקה של הנצחון ואז מפנה לבדיקה של סיום משחק וכיבוי האור המהבב מעל ה
        setTimeout(function () { finish1(), off_blink_for_x(), on_blink_for_o(); }, 1300);
    }
    if (Game_board.arr[cell_number] != "o" && Game_board.xo == "0" && Game_board.arr[cell_number] != "x") { //O כנל בהקשר של 
        const img = document.createElement("img");
        img.src = "imgs/o.png";
        const src = document.getElementById(`cell-${cell_number}`);
        src.appendChild(img);
        Game_board.arr[cell_number] = "o"
        Game_board.xo = 3
        win()
        Game_board.xo = 3
        setTimeout(function () { finish2(), off_blink_for_o(), on_blink_for_x(); }, 1300);
    }
}



function win() { // O או של  X פונקציה שבודקת ניצחון של
    // במידה ושי ניצחון היא מפעילה מספר פונקציות
    switch (true) {
        case (Game_board.arr[0] == "x" && Game_board.arr[1] == "x" && Game_board.arr[2] == "x"):
            return blink(0, 1, 2), show_x_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(0, 1, 2) }, 1299);
        case (Game_board.arr[2] == "x" && Game_board.arr[4] == "x" && Game_board.arr[6] == "x"):
            return blink(2, 4, 6), show_x_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(2, 4, 6) }, 1299);
        case (Game_board.arr[0] == "x" && Game_board.arr[3] == "x" && Game_board.arr[6] == "x"):
            return blink(0, 3, 6), show_x_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(0, 3, 6) }, 1299);
        case (Game_board.arr[0] == "x" && Game_board.arr[4] == "x" && Game_board.arr[8] == "x"):
            return blink(0, 4, 8), show_x_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(0, 4, 8) }, 1299);
        case (Game_board.arr[3] == "x" && Game_board.arr[4] == "x" && Game_board.arr[5] == "x"):
            return blink(3, 4, 5), show_x_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(3, 4, 5) }, 1299);
        case (Game_board.arr[6] == "x" && Game_board.arr[7] == "x" && Game_board.arr[8] == "x"):
            return blink(6, 7, 8), show_x_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(6, 7, 8) }, 1299);
        case (Game_board.arr[2] == "x" && Game_board.arr[5] == "x" && Game_board.arr[8] == "x"):
            return blink(2, 5, 8), show_x_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(2, 5, 8) }, 1299);
        case (Game_board.arr[1] == "x" && Game_board.arr[4] == "x" && Game_board.arr[7] == "x"):
            return blink(1, 4, 7), show_x_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(1, 4, 7) }, 1299);
        case (Game_board.arr[0] == "o" && Game_board.arr[1] == "o" && Game_board.arr[2] == "o"):
            return blink(0, 1, 2), show_o_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(0, 1, 2) }, 1299);
        case (Game_board.arr[2] == "o" && Game_board.arr[4] == "o" && Game_board.arr[6] == "o"):
            return blink(2, 4, 6), show_o_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(2, 4, 6) }, 1299);
        case (Game_board.arr[0] == "o" && Game_board.arr[3] == "o" && Game_board.arr[6] == "o"):
            return blink(0, 3, 6), show_o_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(0, 3, 6) }, 1299);
        case (Game_board.arr[0] == "o" && Game_board.arr[4] == "o" && Game_board.arr[8] == "o"):
            return blink(0, 4, 8), show_o_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(0, 4, 8) }, 1299);
        case (Game_board.arr[3] == "o" && Game_board.arr[4] == "o" && Game_board.arr[5] == "o"):
            return blink(3, 4, 5), show_o_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(3, 4, 5) }, 1299);
        case (Game_board.arr[6] == "o" && Game_board.arr[7] == "o" && Game_board.arr[8] == "o"):
            return blink(6, 7, 8), show_o_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(6, 7, 8) }, 1299);
        case (Game_board.arr[2] == "o" && Game_board.arr[5] == "o" && Game_board.arr[8] == "o"):
            return blink(2, 5, 8), show_o_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(2, 5, 8) }, 1299);
        case (Game_board.arr[1] == "o" && Game_board.arr[4] == "o" && Game_board.arr[7] == "o"):
            return blink(1, 4, 7), show_o_win(), Game_board.arr = Game_board.arr.map(reset),
                setTimeout(function () { Canceling_blink(1, 4, 7) }, 1299);
    }
}

function blink(d, e, f) { //מדליק אור מהבהב על השורה המנצחת
    const a = d
    const b = e
    const c = f
    const div1 = document.querySelector(`#cell-${a}`);
    div1.id = `blink-cell-${a}`;
    const div2 = document.querySelector(`#cell-${b}`);
    div2.id = `blink-cell-${b}`;
    const div3 = document.querySelector(`#cell-${c}`);
    div3.id = `blink-cell-${c}`;
}

function Canceling_blink(d, e, f) {   // מכבה את האור המהבהב של השורה המנצחת
    const a = d
    const b = e
    const c = f
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

function reset(n) { // למספר 0  MAP בעזרת  ARR בעת ניצחון מתבצע איפוס לרשימה 
    return 0;
}

function finish2() {  // פונקציה בודקת אם המשחק  הסתיים ומעלה את מספר הסיבובים והנצחנות של עיגול ואם לא ממשיכה לתור הבא
    for (const number of Game_board.arr) {
        if (number == 0) {
            for (let index = 0; index < Game_board.arr.length; index++) {
                document.getElementById(`cell-${index}`).textContent = null;
            }
            return Game_board.arr = [-1, -1, -1, -1, -1, -1, -1, -1, -1], Game_board.rounds++, Game_board.win_o++, Game_board.xo = "1",
                document.getElementById("c-5").textContent = Game_board.win_x,
                document.getElementById("c-6").textContent = Game_board.rounds,
                document.getElementById("c-7").textContent = Game_board.win_o,
                Game_board.xo = 1
        }
        else {
            return Check_full_arr2(Game_board.arr)
        }
    }
}

function off_blink_for_o() {  //O מכבה אור מהבב של ה        
    const div1 = document.querySelector("#blink-4");
    div1.id = "c-4";
}

function finish1() {  // פונקציה בודקת אם המשחק  הסתיים  מעלה  ב1 את מספר הסיבובים ומספר הנצחונות של איקס ואם לא אז בודקת אם היה תיקו
    for (const number of Game_board.arr) {
        if (number == 0) {
            for (let index = 0; index < Game_board.arr.length; index++) {
                document.getElementById(`cell-${index}`).textContent = null;
            }
            return Game_board.arr = [-1, -1, -1, -1, -1, -1, -1, -1, -1], Game_board.rounds++, Game_board.win_x++,
                document.getElementById("c-5").textContent = Game_board.win_x,
                document.getElementById("c-6").textContent = Game_board.rounds,
                document.getElementById("c-7").textContent = Game_board.win_o,
                Game_board.xo = 1;
        } else {
            Game_board.xo = 0
            return Check_full_arr(Game_board.arr)
        }
    }
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