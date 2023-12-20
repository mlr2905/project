function Default_values() {
    Game_board.game_type = 0 // סוגי משחק: 1 זה נגד משתתף אחר 2 זה נגד מחשב רמה קלה 3 נגד מחשב רמה קשה
    Game_board.xo = 1 // ו0 שווה לעיגול xכדי לשנות  בין איקס לעיגול 1 שווה ל
    Game_board.rounds = 0   // כדי לדעת כמות סבבים
    Game_board.win_x = 0 // כדי לדעת כמות נצחונות של איקס
    Game_board.win_o = 0// כדי לדעת כמות נצחונות של עיגול
    Game_board.on_or_off_rotation = 1 //  בלבד הי מופעלת שלוחצים על הסמל של הסיבויםGame_board.on_or_off_rotation_for_pattern() להדלק ולכבות את הסיבוב זה רלוונטי לפונקציה הזו 
    // בהתחלה אני מגדיר מחרוזת עם 9 מספרים שכולם מוגדרים -1 זחשוב להמשך המשחק
    Game_board.arr = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
}
function o_or_x_first() { //  ומציגה שתי אפשרויות שמי ישחק ראשון Two Playerפוקציה זו מופעלת ברגע שלוחצים על כפתור 
    Default_values()
    document.getElementById('bot_or_you').style.display = "none"; // זה הגדרתי שם במידה התחרט ורוצה לשחק נגד שחקן אחר
    document.getElementById('x_or_o').style.display = "block";  // מציג את האפשרויות 
    document.getElementById('x_first').onclick = function () { // מתחיל  X אפשרות ראשון ה
        return Game_board.xo = 1, Two_Player(), toggle_Blin_For_X_or_o(2), document.getElementById('x_or_o').style.display = "none";  //
    };
    document.getElementById('o_first').onclick = function () { //מתחיל  X אפשרות שני ה
        return Game_board.xo = 0, Two_Player(), toggle_Blin_For_X_or_o(4), document.getElementById('x_or_o').style.display = "none";
    };
}

function Two_Player() { // פוקציה זו מגדירה שהמחשק הוא נגד שחקן אחר  ומפעילה מספר פוקציות
    hide_button()
    return Game_board.game_type = 1;
}
// פונקציה שאחראית לנתב לפוקציה רצוי ברגע שבוחרים באחד מאפשרויות
function select() {
    Default_values()
    const option = document.getElementById('select').value;
    [option === "3" && Easy(), option === "4" && bot_or_you()][0];
}
// פונקציה זו מפעילה מספר פונקציות וגם מגירה שהשחקן משחק נגד רמה הקלה #1
function Easy() {
    Hide_select(), hide_button(), toggle_Blin_For_X_or_o("2")
    Game_board.game_type = 2;
}

function bot_or_you() {  // #2   פוקציה זו מציג בפניה המשתמש שתי אופציות 1 שהוא מתחיל והשניה שהמחשב מתחיל
    document.getElementById('x_or_o').style.display = "none";   // זה הגדרתי שם במידה התחרט ורוצה לשחק נגד מחשב
    document.getElementById('bot_or_you').style.display = "block"; // מציג את האפשרויות
    document.getElementById('you_first').onclick = function () {  // אפשרות ראשנה השחקן משחק ראשון 
        Game_board.xo = 1, document.getElementById('bot_or_you').style.display = "none";
        return Hard_last_game()
    };
    document.getElementById('bot_first').onclick = function () {// אפשרות שניה המחשב משחק ראשון
        document.getElementById('bot_or_you').style.display = "none"; Game_board.xo = 0, Hard(), document.getElementById('bot_or_you').style.display = "none";
    };
}

function Hard_last_game() { //  פןקציה זו מופעלת על ידי בחירה ששחקן יתחיל ראשון בעת משחק נגד מחשב ברשמה קשה ומפעילה מספר פוקציות
    hide_button(), Hide_select()
    toggle_Blin_For_X_or_o("2")
    on_or_off_rotation_for_pattern()
    Game_board.game_type = 3;  // הגדרה זו חשובה על מנת לדעת שהמשחק מתנהל ברמה קשה
}

function Hard() { // פוקציה זו מופעלת על ידי בחירה שהמחשב יתחיל ראשון ברמה הקשה ומפעילה מספר פוקציות
    hide_button(), Hide_select()
    setTimeout(function () { toggle_Blin_For_X_or_o("4"), cell_click(4); }, 1300);      // צעד ראשון שהמחשב תופס את המרכז
    on_or_off_rotation_for_pattern()
    Game_board.game_type = 3;   // הגדרה זו חשובה על מנת לדעת שהמשחק מתנהל ברמה קשה
}

function Hide_select() { // מסתיר או מציג בהתאם את הרשימה הנפתחת
    const div1 = document.getElementById("select");
    div1.style.display = div1.style.display === "none" ? "block" : "none";
}

// פונקציה שמסתירה את הכפתורים או מציגה בהתאם למצב הקיים וגם מסתירה את התבנית המשחק בהתאם למצב הקיים
function hide_button() {
    Hide_divs() // מציג/מסתיר את החלק העליון של הלוח  בהתאם למצב הקיים
    Hide_pattern() // מציג/ מסתיר את החלק התחתון של הלוח בהאתם למצב הקיים
    const div1 = document.getElementById("reset");
    div1.style.display = div1.style.display === "block" ? "none" : "block";
    const div2 = document.getElementById("TwoPlayer");
    div2.style.display = div2.style.display === "none" ? "block" : "none";
    const div3 = document.getElementById("bot");
    div3.style.display = div3.style.display === "none" ? "block" : "none";
    const div4 = document.getElementById("exit");
    div4.style.display = div4.style.display === "block" ? "none" : "block";
}

function Cleaning_results() {//  מתאפס כל הנתונים וגם הלוח מתנקה reset בעת לחיצה על כפתור  
    Game_board.rounds = 0, Game_board.win_x = 0, Game_board.win_o = 0
    document.getElementById("c-5").textContent = Game_board.win_x,
        document.getElementById("c-6").textContent = Game_board.rounds,
        document.getElementById("c-7").textContent = Game_board.win_o;
    for (let index = 0; index < Game_board.arr.length; index++) {
        document.getElementById(`cell-${index}`).textContent = null;
    }
    return Game_board.arr = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
}

function Hide_divs() {  // תאי הלוח מוסתרים ומוצגים בהתאם  
    for (let index = 0; index < Game_board.arr.length; index++) {
        let div1 = document.getElementById(`cell-${index}`);
        div1.style.display = div1.style.display === "block" ? "none" : "block";
    }
}

function on_or_off_rotation_for_pattern() {
    const div2 = document.querySelector('#pattern');
    const div3 = document.querySelector('#rotation');
    switch (Game_board.on_or_off_rotation) {
        case 0: div3.id = "pattern", Game_board.on_or_off_rotation = 1
            break;
        case 1: div2.id = "rotation", Game_board.on_or_off_rotation = 0
            break;
    }
}

function Hide_pattern() { // מסתיר או מציג את החלק התחתון של הלוח
    for (let index = 1; index < 8; index++) {
        const div1 = document.getElementById(`c-${index}`);
        div1.style.display = div1.style.display === "block" ? "none" : "block";
    }
}

function restarting() {
    for (let index = 0; index < Game_board.arr.length; index++) {
        document.getElementById(`cell-${index}`).textContent = null;
    }
    Game_board.arr = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
}
function exit() { // exit פונקציה שמופעלת בעת לחיצה על הכפתור 
    window.setTimeout(function () { window.location.reload(); }, 0.1);
}