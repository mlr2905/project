let game_type=0 // סוגי משחק: 1 זה נגד משתתף אחר 2 זה נגד מחשב רמה קלה 3 נגד מחשב רמה קשה
let xo = "1" // ו0 שווה לעיגול xכדי לשנות  בין איקס לעיגול 1 שווה ל
let rounds =0   // כדי לדעת כמות סבבים
let win_x=0 // כדי לדעת כמות נצחונות של איקס
let win_o=0// כדי לדעת כמות נצחונות של עיגול
let on_or_off_rotation = 1 //  בלבד הי מופעלת שלוחצים על הסמל של הסיבויםon_or_off_rotation_for_pattern() להדלק ולכבות את הסיבוב זה רלוונטי לפונקציה הזו 

// בהתחלה אני מגדיר מחרוזת עם 9 מספרים שכולם מוגדרים -1 זחשוב להמשך המשחק
let arr =[-1,-1,-1,-1,-1,-1,-1,-1,-1]

// פונקציה שאחראית לנתב לפוקציה רצוי ברגע שבוחרים באחד מאפשרויות
function select(){
            
        let option = document.getElementById('select').value;  
    switch(option){
        
        case "3":Easy()  // #1
        break;
        case "4":bot_or_you() // #2
        break;
    }
}
// פונקציה זו מפעילה מספר פונקציות וגם מגירה שהשחקן משחק נגד רמה הקלה #1
function Easy(){
    Hide_select() //  מסתיר את הרדימה הנפתחת
    hide_button() // מסתירה את הכפתורים
    on_blink_for_x()
        return game_type=2;
}
function bot_or_you(){  // #2   פוקציה זו מציג בפניה המשתמש שתי אופציות 1 שהוא מתחיל והשניה שהמחשב מתחיל
document.getElementById('x_or_o').style.display="none";   // זה הגדרתי שם במידה התחרט ורוצה לשחק נגד מחשב
   document.getElementById('bot_or_you').style.display="block"; // מציג את האפשרויות
    document.getElementById('you_first').onclick = function(){  // אפשרות ראשנה השחקן משחק ראשון 
        return xo=1,Hard_last_game(),document.getElementById('bot_or_you').style.display="none"; 

    };
    document.getElementById('bot_first').onclick = function(){// אפשרות שניה המחשב משחק ראשון
    document.getElementById('bot_or_you').style.display="none";  xo=0, Hard(),document.getElementById('bot_or_you').style.display="none"; 

    };
    }  
    
    function o_or_x_first(){ //  ומציגה שתי אפשרויות שמי ישחק ראשון Two Playerפוקציה זו מופעלת ברגע שלוחצים על כפתור 

document.getElementById('bot_or_you').style.display="none"; // זה הגדרתי שם במידה התחרט ורוצה לשחק נגד שחקן אחר
document.getElementById('x_or_o').style.display="block";  // מציג את האפשרויות 
        document.getElementById('x_first').onclick = function(){ // מתחיל  X אפשרות ראשון ה
            return xo=1, Two_Player(),on_blink_for_x(),document.getElementById('x_or_o').style.display="none";  //

        };
        document.getElementById('o_first').onclick = function(){ //מתחיל  X אפשרות שני ה
           return  xo=0,Two_Player(),on_blink_for_o(),document.getElementById('x_or_o').style.display="none";

        };
        } 


function Hard_last_game(){ //  פןקציה זו מופעלת על ידי בחירה ששחקן יתחיל ראשון בעת משחק נגד מחשב ברשמה קשה ומפעילה מספר פוקציות
    hide_button() 
    Hide_select()
    on_or_off_rotation_for_pattern()
    on_blink_for_x()
 
        return game_type=3;  // הגדרה זו חשובה על מנת לדעת שהמשחק מתנהל ברמה קשה
}
function Hard(){ // פוקציה זו מופעלת על ידי בחירה שהמחשב יתחיל ראשון ברמה הקשה ומפעילה מספר פוקציות
    
    hide_button()
    Hide_select()
    setTimeout(function () {on_blink_for_o(),cell_click(4);}, 1300);      // צעד ראשון שהמחשב תופס את המרכז
    on_or_off_rotation_for_pattern()
    
        return game_type=3;   // הגדרה זו חשובה על מנת לדעת שהמשחק מתנהל ברמה קשה
}

function  Two_Player(){ // פוקציה זו מגדירה שהמחשק הוא נגד שחקן אחר  ומפעילה מספר פוקציות
    hide_button()

        return game_type=1; 
}

function Hide_select(){ // מסתיר או מציג בהתאם את הרשימה הנפתחת
    const div1 = document.getElementById("select");
        div1.style.display = div1.style.display === "none" ? "block" : "none";
}


// פונקציה שמסתירה את הכפתורים או מציגה בהתאם למצב הקיים וגם מסתירה את התבנית המשחק בהתאם למצב הקיים
function hide_button(){
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
                           

function Cleaning_results(){// מתאפס כל הנתונים וגם הלוח מפסיק להסתובב  reset בעת לחיצה על כפתור  
    rounds =0, win_x=0, win_o=0
    document.getElementById("c-5").textContent = win_x,
    document.getElementById("c-6").textContent = rounds,
    document.getElementById("c-7").textContent = win_o;
    return arr =[-1,-1,-1,-1,-1,-1,-1,-1,-1]
}


function Hide_divs(){  // תאי הלוח מוסתרים ומוצגים בהתאם  
    for (let index = 0; index <arr.length; index++) {
        const div1 = document.getElementById(`cell-${index}`);
        div1.style.display = div1.style.display === "block" ? "none" : "block";
    }
}



function on_or_off_rotation_for_pattern() {
  const div2 = document.querySelector('#pattern');
  const div3 = document.querySelector('#rotation');


 switch (on_or_off_rotation) {
    case 0 : div3.id = "pattern",on_or_off_rotation = 1
        break;
    case 1:
        return div2.id = "rotation",on_or_off_rotation = 0
        break;
  
    
    

  }
}
function Hide_pattern(){ // מסתיר או מציג את החלק התחתון של הלוח
    for (let index = 1; index <8; index++) {
        const div1 = document.getElementById(`c-${index}`);
        div1.style.display = div1.style.display === "block" ? "none" : "block";
    }  
}

function restarting(){

    for (let index = 0; index <arr.length; index++) {
            document.getElementById(`cell-${index}`).textContent = null;                    
    }
        return  arr =[-1,-1,-1,-1,-1,-1,-1,-1,-1] 
}

function cell_click(cell_number){ //  פוקציה אשר בודקת תורמי ואם יש בחירה כפולה על תא
    if (arr[cell_number] =="x" || arr[cell_number] =="o"){ // בודק עם אין בחירה נוספת על תא תופס
        swal("Error!", "The place is taken, you need to choose a new place", "error")
    }

    if (arr[cell_number] !="x" && xo == "1" && arr[cell_number] !="o") { // מפניה לפוקציות נוספות X בודק עם התא הנבחר פנוי ואם זה תור של 
         //
        const img = document.createElement("img");
        img.src = "imgs/x.png"; 
        const src = document.getElementById(`cell-${cell_number}`);
        src.appendChild(img); //בתא הנבחר X  שם תמונה של 
        arr[cell_number] = "x"//זהה למספר התא indexב  X מגדיר מחרוזת 
        xo=3 // נועל את האפשרות ללחוץ על הלוקח
        win() // מפנה לפוקציה בדיקת ניצחון
        xo=3 // נועל את האפשרות ללחוץ על הלוקח
        //X פוקציה זו מחכה שהסתיים בדיקה של הנצחון ואז מפנה לבדיקה של סיום משחק וכיבוי האור המהבב מעל ה
        setTimeout(function () {finish1(),off_blink_for_x(),on_blink_for_o();}, 1300); 
          
    }
    if (arr[cell_number] !="o" && xo == "0" && arr[cell_number] !="x") { //O כנל בהקשר של 
        const img = document.createElement("img");
        img.src = "imgs/o.png";
        const src = document.getElementById(`cell-${cell_number}`);
        src.appendChild(img);
        arr[cell_number] = "o"
        xo=3
        win()
        xo=
        setTimeout(function () {finish2(),off_blink_for_o(),on_blink_for_x();}, 1300);
    }
}

function off_blink_for_x(){  //X מכבה אור מהבב של ה     

    const div1 = document.querySelector("#blink-2");
    div1.id="c-2"     
}
function off_blink_for_o(){  //O מכבה אור מהבב של ה        

    const div1 = document.querySelector("#blink-4");
    div1.id="c-4";
}

function on_blink_for_o(){ // Oמפעיל אור מהבב על ה 
    const div2 = document.querySelector('#c-4');
        div2.id="blink-4"; 
}

function on_blink_for_x(){  // X אור מהבב על ה 
    const div2 = document.querySelector("#c-2"); 
    div2.id="blink-2"; //Xמפעיל אור מהבב על ה

}


function win(){ // O או של  X פונקציה שבודקת ניצחון של
                // במידה ושי ניצחון היא מפעילה מספר פונקציות
    switch(true){
        
        case (arr[0]=="x" && arr[1]=="x" && arr[2]=="x"): 
            return  blink(0,1,2),show_x_win(),arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(0,1,2)}, 1299);
        case (arr[2]=="x" && arr[4]=="x" && arr[6]=="x"):
            return blink(2,4,6),show_x_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(2,4,6)}, 1299);
        case (arr[0]=="x" && arr[3]=="x" && arr[6]=="x"):
            return blink(0,3,6),show_x_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(0,3,6)}, 1299);
        case (arr[0]=="x" && arr[4]=="x" && arr[8]=="x"):
            return blink(0,4,8),show_x_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(0,4,8)}, 1299);
        case (arr[3]=="x" && arr[4]=="x" && arr[5]=="x"):
            return blink(3,4,5),show_x_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(3,4,5)}, 1299);
        case (arr[6]=="x" && arr[7]=="x" && arr[8]=="x"):
            return blink(6,7,8),show_x_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(6,7,8)}, 1299);
        case (arr[2]=="x" && arr[5]=="x" && arr[8]=="x"):
            return blink(2,5,8),show_x_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(2,5,8)}, 1299);
        case (arr[1]=="x" && arr[4]=="x" && arr[7]=="x"):
            return blink(1,4,7),show_x_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(1,4,7)}, 1299);
        case (arr[0]=="o" && arr[1]=="o" && arr[2]=="o"):
            return blink(0,1,2),show_o_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(0,1,2)}, 1299);
        case (arr[2]=="o" && arr[4]=="o" && arr[6]=="o"):
            return blink(2,4,6),show_o_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(2,4,6)}, 1299);
        case (arr[0]=="o" && arr[3]=="o" && arr[6]=="o"):
            return blink(0,3,6),show_o_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(0,3,6)}, 1299);
        case (arr[0]=="o" && arr[4]=="o" && arr[8]=="o"):
            return blink(0,4,8),show_o_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(0,4,8)}, 1299);
        case (arr[3]=="o" && arr[4]=="o" && arr[5]=="o"):
            return blink(3,4,5),show_o_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(3,4,5)}, 1299);
        case (arr[6]=="o" && arr[7]=="o" && arr[8]=="o"):
            return blink(6,7,8),show_o_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(6,7,8)}, 1299);
        case (arr[2]=="o" && arr[5]=="o" && arr[8]=="o"):
            return blink(2,5,8),show_o_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(2,5,8)}, 1299);
        case (arr[1]=="o" && arr[4]=="o" && arr[7]=="o"):
            return blink(1,4,7),show_o_win(), arr=arr.map(reset),
            setTimeout(function () {Canceling_blink(1,4,7)}, 1299);

    }
}
function blink(d,e,f){ //מדליק אור מהבהב על השורה המנצחת
    const a =d
    const b =e
    const c =f

    const div1 = document.querySelector(`#cell-${a}`);
    div1.id=`blink-cell-${a}`;
    const div2 = document.querySelector(`#cell-${b}`);
    div2.id=`blink-cell-${b}`;
    const div3 = document.querySelector(`#cell-${c}`);
    div3.id=`blink-cell-${c}`;
   
}
function Canceling_blink(d,e,f){   // מכבה את האור המהבהב של השורה המנצחת
    const a =d
    const b =e
    const c =f

    const div1 = document.querySelector(`#blink-cell-${a}`);
    div1.id=`cell-${a}`;
    const div2 = document.querySelector(`#blink-cell-${b}`);
    div2.id=`cell-${b}`;
    const div3 = document.querySelector(`#blink-cell-${c}`);
    div3.id=`cell-${c}`;

}
function show_x_win() { // מציגה התראה ניצחון מרחפת מלמטה ללמעלה
    var x = document.getElementById("x");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  function show_o_win() { // מציגה התראה ניצחון מרחפת מלמטה ללמעלה
    var o = document.getElementById("o");
    o.className = "show";
    setTimeout(function(){ o.className = o.className.replace("show", ""); }, 3000);
  }
   
function reset(n){ // למספר 0  MAP בעזרת  ARR בעת ניצחון מתבצע איפוס לרשימה 
    return 0;
}

function finish2(){  // פונקציה בודקת אם המשחק  הסתיים ומעלה את מספר הסיבובים והנצחנות של עיגול ואם לא ממשיכה לתור הבא
    for (const number of arr){

        if(number == 0){

        for (let index = 0; index <arr.length; index++) {
            document.getElementById(`cell-${index}`).textContent = null;                  
        }
        return  arr =[-1,-1,-1,-1,-1,-1,-1,-1,-1] ,rounds++,win_o++,xo ="1",
        document.getElementById("c-5").textContent = win_x,
        document.getElementById("c-6").textContent = rounds,
        document.getElementById("c-7").textContent = win_o,
        xo=1
        }
        else{
            return Check_full_arr2(arr)
        }
    }    
}
function finish1(){  // פונקציה בודקת אם המשחק  הסתיים  מעלה  ב1 את מספר הסיבובים ומספר הנצחונות של איקס ואם לא אז בודקת אם היה תיקו
    
    for (const number of arr){

        if(number == 0){
            
            for (let index = 0; index <arr.length; index++) {
                document.getElementById(`cell-${index}`).textContent = null;                
            }

            return arr =[-1,-1,-1,-1,-1,-1,-1,-1,-1] ,rounds++,win_x++,
            document.getElementById("c-5").textContent = win_x,
            document.getElementById("c-6").textContent = rounds,
            document.getElementById("c-7").textContent = win_o,
            xo=1;
            

        }else{
            xo=0                
            return Check_full_arr(arr)
        }
    }
}
function Check_full_arr(arr) { // בודקת אם נישאר תא פנוי או שהכל התאים תפוסים 
    for (let i = 0; i < arr.length; i++){

        if(arr[i] === -1){
            return game_type == 1? xo=0: 
            game_type == 2? easy_bot(arr):
            game_type == 3? Hard_bot(arr):"";
            break;
        }
    }
        return swal({title: "Dead heat!!",text: "",timer: 1000}),
        arr=arr.map(reset),
        rounds++,
        document.getElementById("c-6").textContent = rounds,
        xo=1,
        restarting();  // הקוד יבוצע אם כל הערכים של המערך אינם שווים ל--1
}
        
    
function Check_full_arr2(arr) { // בודקת אם נישאר תא פנוי או שהכל התאים תפוסים  
    for (let i = 0; i < arr.length; i++){

        if(arr[i] === -1){
            return xo=1
            break;
        }
    }
    return swal({title: "Dead heat!!",text: "",timer: 1000}),
    arr=arr.map(reset),
    rounds++,
    document.getElementById("c-6").textContent = rounds,
    xo=1,
    restarting();
    }

function easy_bot() { //  זה בעצם הרמה הקלה  היא יכולה לנצח וגם נתן לנצח אותה
    const cond =[arr[4] !== "o" && arr[4] !== "x",arr[4] === "x" && arr[8] === -1,
    arr[0] === "x" && arr[1] === "x" && arr[2] === -1,arr[0] === "x" && arr[2] === "x" && arr[1] === -1,
    arr[1] === "x" && arr[2] === "x" && arr[0] === -1,arr[0] === "x" && arr[3] === "x" && arr[6] === -1,
    arr[0] === "x" && arr[6] === "x" && arr[3] === -1,arr[3] === "x" && arr[6] === "x" && arr[0] === -1,
    arr[0] === "x" && arr[4] === "x" && arr[8] === -1,arr[0] === "x" && arr[8] === "x" && arr[4] === -1,
    arr[3] === "x" && arr[4] === "x" && arr[5] === -1,arr[1] === "x" && arr[7] === "x" && arr[4] === -1,
    arr[7] === "x" && arr[4] === "x" && arr[1] === -1,arr[0] === "o" && arr[1] === "o" && arr[2] === -1,
    arr[7] === "o" && arr[5] === "o" && arr[8] === -1,arr[0] === "o" && arr[2] === "o" && arr[1] === -1,
    arr[2] === "o" && arr[6] === "o" && arr[1] === -1,arr[0] === "o" && arr[8] === "o" && arr[7] === -1,
    arr[1] === "o" && arr[3] === "o" && arr[0] === -1,arr[1] === "o" && arr[2] === "o" && arr[0] === -1,
    arr[0] === "o" && arr[3] === "o" && arr[6] === -1,arr[0] === "o" && arr[6] === "o" && arr[3] === -1]
    const action =[4,8,2,1,0,6,3,0,8,4,5,4,1,2,8,1,1,7,0,0,6,3]
    for ( let i = 0 ; i<cond.length; i++ ){
        if (cond[i] === true){
            action[i]  
            return cell_click(action[i] )
        }
    }
    return default1() 
}
    
function Hard_bot(){ // הרמה הקשה לא ניתן לנצח אותה
    const cond = [arr[4] !== "o" && arr[4] !== "x",arr[4] === "x" && arr[8] === -1,arr[0] === "o" && arr[1] === "o" && arr[2] === -1,
    arr[4] === "o" && arr[5] === "x" && arr[8] === -1 && arr[0] === -1 && arr[1] === -1 && arr[2] === -1 && arr[3] === -1 
    && arr[4] === -1 && arr[6] === -1 && arr[7] === -1,
    arr[4] === "o" && arr[7] === "x" && arr[8] === -1 && arr[0] === -1 && arr[1] === -1 && arr[2] === -1 && arr[3] === -1 
    && arr[4] === -1 && arr[6] === -1 && arr[5] === -1,
    arr[4] === "o" && arr[3] === "x" && arr[8] === -1 && arr[0] === -1 && arr[1] === -1 && arr[7] === -1 && arr[2] === -1 
    && arr[4] === -1 && arr[6] === -1 && arr[5] === -1,
    arr[4] === "o" && arr[2] === "x" && arr[8] === -1 && arr[0] === -1 && arr[1] === -1 && arr[7] === -1 && arr[3] === -1 
    && arr[4] === -1 && arr[6] === -1 && arr[5] === -1,
    arr[4] === "o" && arr[0] === "x" && arr[8] === -1 && arr[2] === -1 && arr[1] === -1 && arr[7] === -1 && arr[3] === -1 
    && arr[4] === -1 && arr[6] === -1 && arr[5] === -1,
    arr[4] === "o" && arr[1] === "x" && arr[8] === -1 && arr[2] === -1 && arr[0] === -1 && arr[7] === -1 && arr[3] === -1 
    && arr[4] === -1 && arr[6] === -1 && arr[5] === -1,
    arr[4] === "o" && arr[8] === "x" && arr[0] === -1 && arr[2] === -1 && arr[1] === -1 && arr[7] === -1 && arr[3] === -1 
    && arr[4] === -1 && arr[6] === -1 && arr[5] === -1,
    arr[7] === "o" && arr[5] === "o" && arr[8] === -1,arr[0] === "o" && arr[2] === "o" && arr[1] === -1,
    arr[2] === "o" && arr[6] === "o" && arr[1] === -1,arr[0] === "o" && arr[8] === "o" && arr[7] === -1,
    arr[1] === "o" && arr[3] === "o" && arr[0] === -1,arr[1] === "o" && arr[2] === "o" && arr[0] === -1,
    arr[0] === "o" && arr[3] === "o" && arr[6] === -1,arr[0] === "o" && arr[6] === "o" && arr[3] === -1,
    arr[3] === "o" && arr[6] === "o" && arr[0] === -1,arr[0] === "o" && arr[4] === "o" && arr[8] === -1,
    arr[0] === "o" && arr[8] === "o" && arr[4] === -1,arr[8] === "o" && arr[4] === "o" && arr[0] === -1,
    arr[2] === "o" && arr[4] === "o" && arr[6] === -1,arr[2] === "o" && arr[6] === "o" && arr[4] === -1,
    arr[6] === "o" && arr[4] === "o" && arr[2] === -1,arr[2] === "o" && arr[5] === "o" && arr[8] === -1,
    arr[2] === "o" && arr[8] === "o" && arr[5] === -1,arr[8] === "o" && arr[5] === "o" && arr[2] === -1,
    arr[3] === "o" && arr[4] === "o" && arr[5] === -1,arr[5] === "o" && arr[1] === "o" && arr[8] === -1,
    arr[3] === "o" && arr[5] === "o" && arr[4] === -1,arr[5] === "o" && arr[4] === "o" && arr[3] === -1,
    arr[6] === "o" && arr[7] === "o" && arr[8] === -1,arr[6] === "o" && arr[8] === "o" && arr[7] === -1,
    arr[8] === "o" && arr[7] === "o" && arr[6] === -1,arr[1] === "o" && arr[4] === "o" && arr[7] === -1,
    arr[1] === "o" && arr[7] === "o" && arr[4] === -1,arr[7] === "o" && arr[4] === "o" && arr[1] === -1,
    arr[0] === "x" && arr[1] === "x" && arr[2] === -1,arr[0] === "x" && arr[2] === "x" && arr[1] === -1,
    arr[0] === "x" && arr[8] === "x" && arr[4] === -1,arr[1] === "x" && arr[2] === "x" && arr[0] === -1,
    arr[0] === "x" && arr[3] === "x" && arr[6] === -1,arr[0] === "x" && arr[6] === "x" && arr[3] === -1,
    arr[3] === "x" && arr[6] === "x" && arr[0] === -1,arr[0] === "x" && arr[4] === "x" && arr[8] === -1,
    arr[0] === "x" && arr[8] === "x" && arr[4] === -1,arr[8] === "x" && arr[4] === "x" && arr[0] === -1,
    arr[2] === "x" && arr[4] === "x" && arr[6] === -1,arr[2] === "x" && arr[6] === "x" && arr[4] === -1,
    arr[6] === "x" && arr[4] === "x" && arr[2] === -1,arr[2] === "x" && arr[5] === "x" && arr[8] === -1,
    arr[2] === "x" && arr[8] === "x" && arr[5] === -1,arr[8] === "x" && arr[5] === "x" && arr[2] === -1,
    arr[3] === "x" && arr[4] === "x" && arr[5] === -1,arr[3] === "x" && arr[5] === "x" && arr[4] === -1,
    arr[5] === "x" && arr[4] === "x" && arr[3] === -1,arr[6] === "x" && arr[7] === "x" && arr[8] === -1,
    arr[6] === "x" && arr[8] === "x" && arr[7] === -1,arr[8] === "x" && arr[7] === "x" && arr[6] === -1,
    arr[1] === "x" && arr[4] === "x" && arr[7] === -1,arr[1] === "x" && arr[7] === "x" && arr[4] === -1,
    arr[7] === "x" && arr[4] === "x" && arr[1] === -1,arr[7] === "x" && arr[5] === "x" && arr[8] === -1,
    arr[2] === "x" && arr[6] === "x" && arr[1] === -1,arr[5] === "x" && arr[1] === "x" && arr[8] === -1]
  
    const action = [4,8,2,8,8,8,8,8,8,5,8,1,1,
                    7,0,0,6,3,0,8,4,0,6,4,2,8,
                    5,2,5,8,4,3,8,7,6,7,4,1,2,
                    1,4,0,6,3,0,8,4,0,6,4,2,8,
                    5,2,5,4,3,8,7,6,7,4,1,8,1,8] 

    for ( let i = 0 ; i<cond.length; i++ ){
        if (cond[i] === true){
            action[i]  
            return cell_click(action[i] )
        }
    }
    return default1() 
}
    

 

function default1(){ //פונקציה שנתונת תא אקראי
    while (true) {
        const cell_number = Math.floor(Math.random() * arr.length);

        if (arr[cell_number] === -1) {
            return  cell_click(cell_number)
        }else{
            continue;
        }
    }
}

function exit(){ // exit פונקציה שמופעלת בעת לחיצה על הכפתור 
    
    window.setTimeout( function() {window.location.reload();}, 0.1);
}