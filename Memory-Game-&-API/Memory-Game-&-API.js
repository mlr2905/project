

Definition_of_properties()
// הגדרת בררת מחדל של מאפיינים
function Definition_of_properties() {

  Board._arr = [];
  Board._Creating_a_div = [];
  Board._Two_numbers_use = [];
  Board._doubled = [];
  Board._freeze = 0
  Api._data4 = puse_PokeAPI_data4()
  Board._on_or_off = "OFF"
  Board._game_type = -2
}

function changeBackground() {
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.display = "flex";
  document.body.style.backgroundSize = "100% 100%";
  const images = ["images/poketheme.jpg", "images/digimon.png", "images/HarryPotter.gif", "images/dog-.jpg"];

  const index = Math.floor(Math.random() * images.length);
  document.querySelector("body").style.backgroundImage = `url(${images[index]})`;
}
intervalId = setInterval(changeBackground, 5000);



function stopBackgroundChange() {
  clearInterval(intervalId);
}

function player_vs_player() {

  Board._game_type = 2, Hide_select_first(), hide_button()
}
function player_vs_bot() {

  Board._game_type = 0, Hide_select_first(), hide_button()
}

function hide_button() {
  const div2 = document.getElementById("TwoPlayer");
  div2.style.display = div2.style.display === "none" ? "block" : "none";
  const div3 = document.getElementById("bot");
  div3.style.display = div3.style.display === "none" ? "block" : "none";
  const div4 = document.getElementById("exit");
  div4.style.display = div4.style.display === "block" ? "none" : "block";
}

function Hide_select_two() { // מסתיר או מציג בהתאם את הרשימה הנפתחת
  const div1 = document.getElementById("select_two");
  div1.style.display = div1.style.display === "none" ? "block" : "none";
}
function Hide_select_first() { // מסתיר או מציג בהתאם את הרשימה הנפתחת
  const div1 = document.getElementById("select_first");
  div1.style.display = div1.style.display === "none" ? "block" : "none";
}


function select_first() {

  let option = document.getElementById('select_first').value;
  switch (option) {
    case "1": Board._style = 1, Hide_select_first(), Hide_select_two(), HideOptions()
      break;
    case "2": Board._style = 2, Hide_select_first(), Hide_select_two()
      break;
    case "3": Board._style = 3, Hide_select_first(), Hide_select_two()
      break;
    case "4": Board._style = 4, Hide_select_first(), Hide_select_two()
      break;
    case "5": Board._style = Math.floor(Math.random() * 4) + 1, Hide_select_first(), Hide_select_two(), HideOptions()
      break;
  }
}

function HideOptions() {
  if (Board._style === 1) {

    const select = document.getElementById("select_two");
    const options = select.querySelectorAll("option");

    options[3].style.display = "none";
    options[4].style.display = "none";
  }
}

function select_two() {

  let option = document.getElementById('select_two').value;
  switch (option) {
    case "1": Hide_select_two(), Board._maxarr = 8, main_function(4, 4)
      break;
    case "2": Hide_select_two(), Board._maxarr = 18, main_function(6, 6)
      break;
    case "3": Hide_select_two(), Board._maxarr = 32, main_function(8, 8)
      break;
    case "4": Hide_select_two(), Board._maxarr = 50, main_function(10, 10)
      break;
  }
}


function main_function(rows, cols) {
  sound()
  createPairs()
  random_number_arr()
  on_or_off_sound()
  Board._size = board_size(rows)
  Create_a_board()

  for (let i = 0; i < rows; i++) {

    Board._rowDiv = document.createElement("div");
    Board._rowDiv.classList.add("row");
    Board._parentDiv.appendChild(Board._rowDiv);

    for (let j = 0; j < cols; j++) {
      Board._random = get_random_div()
      Style_cards._imgN = Board._arr[Board._random]

      stopBackgroundChange()
      style_cards()
      Create_a_parent_div()
      card_front_and_over()
      Creating_a_Child_div()
    }
  }

  Board._parentDiv.classList.add("flex");
  Board._parentDiv.style.display = "flex";
  Board._parentDiv.style.flexDirection = "row";

 
  
}

function sound() {
  const parentDiv = document.getElementById("audio")
  const cellDiv = document.createElement("div");
  parentDiv.appendChild(cellDiv);
  const img = document.createElement("img");
  const src = document.getElementById("audio");
  img.src = "images/on.png"
  src.appendChild(img);
  const div = document.getElementById("audio");
  div.addEventListener("click", on_or_off_sound);

}

function on_or_off_sound() {
  const audio = document.querySelector("audio");
  const div = document.querySelector('#audio');
  const img = div.querySelector('img');
  div.removeChild(img);

  if (Board._style !== 2) {
    if (Board._style === 1) {

      audio.src = "audio-mp4/HarryPotter.mp3";
    }

    if (Board._style === 3) {

      audio.src = "audio-mp4/Digimon.mp3";
    }
    if (Board._style === 4) {

      audio.src = "audio-mp4/Pokémon.mp3";
    }

    if (Board._on_or_off === "OFF") {
      const img = document.createElement("img");
      const src = document.getElementById("audio");
      img.src = "images/on.png"
      src.appendChild(img);
      audio.play();
      Board._on_or_off = "ON"

    }

    else {
      const img = document.createElement("img");
      const src = document.getElementById("audio");
      img.src = "images/off.png"
      src.appendChild(img);
      audio.pause();
      Board._on_or_off = "OFF"
    }
  }
}

// יצירת זוגות לפי גודל הלוח
function createPairs() {
  Board._pairs = [];
  let a = -1
  for (let i = 0; i < Board._maxarr; i++) {
    a += 2
    if (i === 0) {
      Board._pairs.push([0, a]);
    }
    if (i !== 0) {
      Board._pairs.push([a - 1, a]);
    }
  }

  return Board._pairs;

}

function getRandomNumber() {

  //    יוצר מספר אקראי בין 2 ל- 548 
  const Number = Math.floor(Math.random() * 548) + 2;

  // מחזיר את המספר
  return Number;
}

// יצירת מערך של מספרים לפי גודל הלוח
function random_number_arr() {
  Board._arr = []

  if (Board._style === 4) {
    let min = getRandomNumber()
    for (let i = 0; i < Board._maxarr; i++) {
      Board._arr.push(min, min);
      min += 1

    }
  }
  if (Board._style !== 4) {
    for (let i = 0; i < Board._maxarr; i++) {
      Board._arr.push(i, i);

    }
  }
  for (let j = 0; j < Board._maxarr * 2; j++) {
    Board._Creating_a_div.push(j);

  }
}


function board_size(rows) {
  if (rows === 4) {
    return 1;
  }
  if (rows === 6) {
    return 2
  }
  if (rows === 8) {
    return 3
  }
  if (rows === 10) {
    return 4;
  }
}

function addCellClick(divId, number) {
  // מצא את הדיב
  const div = document.getElementById(divId);

  // הוסף את הפונקציה `cell_click()` לאירוע `click` של כל תמונה
  div.addEventListener("click", function () {
    // קריאה לפונקציה `cell_click()` עם מספר התמונה
    cell_click(number);
  });

}

function random_number() {
  const index = Math.floor(Math.random() * Board._Creating_a_div.length);
  return index
}

function get_random_div() {
  while (true) {
    const index = random_number();

    const Doubled = Board._doubled.includes(index);

    if (!Doubled) {
      return Board._doubled.push(index), index;;
    }
    else {
      continue;
    }

  }
}

function Create_a_board() {
  Board._parentDiv = document.getElementById("board");
  Board._parentDiv.classList.add(`board${Board._size}`);
  const firstRowDiv = document.createElement("div");
  firstRowDiv.classList.add("from-row");
  Board._parentDiv.appendChild(firstRowDiv);
}



function style_cards() {
  if (Board._style === 1) {
    document.body.style.backgroundImage = "url('images/ari.gif')";
    Style_cards._card_back = Api._data1[Style_cards._imgN].image
    Style_cards._card_front = "images/ari_front.jpg"
    Style_cards._card_over = "images/ari_over.gif"

  }
  if (Board._style === 2) {
    document.body.style.backgroundImage = "url('images/dog-.jpg')";
    Style_cards._card_back = Api._data2.message[Style_cards._imgN]
    Style_cards._card_front = "images/dog.jpg"
    Style_cards._card_over = "images/dog-over.gif"
  }
  if (Board._style === 3) {
    document.body.style.backgroundImage = "url('images/digimon.png')";
    Style_cards._card_back = Api._data3[Style_cards._imgN].img
    Style_cards._card_front = "images/dig_front.jpg"
    Style_cards._card_over = "images/digimon.gif"

  }
  if (Board._style === 4) {
    document.body.style.backgroundImage = "url('images/poketheme.jpg')";
    Style_cards._card_back = Api._data4[Style_cards._imgN]
    Style_cards._card_front = "images/poke_front.png"
    Style_cards._card_over = "images/poke_over.gif"

  }
}
function card_front_and_over() {
  const myDiv = document.querySelector(`#front-${Board._random}`);
  myDiv.addEventListener("mouseover", function () { myDiv.style.backgroundImage = `url(${Style_cards._card_over})`; });
  myDiv.addEventListener("mouseout", function () { myDiv.style.backgroundImage = `url(${Style_cards._card_front})`; });
}

function Create_a_parent_div() {
  Board.frontDiv = document.createElement("div");
  Board.frontDiv.classList.add("front");
  Board.frontDiv.id = `front-${Board._random}`
  Board._rowDiv.appendChild(Board.frontDiv);
  addCellClick(`front-${Board._random}`, Board._random)
  document.getElementById(`front-${Board._random}`).style.backgroundImage = `url(${Style_cards._card_front})`;
}

function Creating_a_Child_div() {
  const cellDiv = document.createElement("div");
  cellDiv.classList.add("cell");
  cellDiv.id = `cell-${Board._random}`
  Board.frontDiv.appendChild(cellDiv);
  const img = document.createElement("img");
  const src = document.getElementById(`cell-${Board._random}`);
  img.src = Style_cards._card_back
  src.appendChild(img);
}

function cell_click(a) {


  if (Board._freeze === 0) {
    const div1 = document.querySelector(`#front-${a}`);
    const div2 = document.querySelector(`#Hide-${a}`);

    while (true) {
      if (div2 == null && div1 !== null) {
        hide_div_father_show_son(a)
        break;
      }
      if (div1 == null && div2 !== null) {
        Hide_div_son_show_father(a)
        break;
      }
    }
    Board._Two_numbers_use.push(a);
    checkEqual()
  }

}

function hide_div_father_show_son(a) {
  const div = document.querySelector(`#front-${a}`);
  div.id = `Hide-${a}`
  const div1 = document.querySelector(`#cell-${a}`);
  div1.id = `card-${a}`


}

function Hide_div_son_show_father(a) {
  const div = document.querySelector(`#Hide-${a}`);
  div.id = `front-${a}`
  const div1 = document.querySelector(`#card-${a}`);
  div1.id = `cell-${a}`;

}
 
function checkEqual() {

  Board._Two_numbers_use.sort();
  let first_card = Board._Two_numbers_use[0]
  let Second_card = Board._Two_numbers_use[1]
  let for_ended = -1
  let memory = null
  let memory_arr = null
  if(first_card === Second_card){
     first_card = -1 ,Second_card = -1
     Board._Two_numbers_use=[]

  }

  if (first_card >= 0 && Second_card >= 0) {
    for (let i = 0; i < Board._pairs.length; i++) {
      for_ended++
      let Index = Board._pairs[i]

      if (Index[0] === first_card && Index[1] === Second_card) {
        freeze()
        Board._Two_numbers_use = []
        blinkDiv(first_card, Second_card)
        setTimeout(function () {
          RemoveClass_blink(first_card, Second_card)
        }, 1600);
        setTimeout(function () { HideDiv(first_card, Second_card); }, 1500);
      
          memory = Board._pairs[i]
          memory_arr = [first_card, Second_card]
         
        if (memory[0] === memory_arr[0] && memory[1] === memory_arr[1] && Board._game_type === 2) {
            Board._pairs.splice(i, 1);
            if(Board._pairs.length === 0){
              alert("a")
              break;
            }
            freeze()
            break;

          }
        

        if (memory[0] === memory_arr[0] && memory[1] === memory_arr[1] && Board._game_type === 0) {
          Board._pairs.splice(i, 1);
          if(Board._pairs.length === 0){
            alert("a")
            break;
          }
          setTimeout(function () { freeze(),player_or_bot(); }, 2500);
          break;
        }
      }
    
      
      
      // שאין התמאה
      if (for_ended === Board._pairs.length - 1) {
        if(Index[0] !== first_card && Index[1] !== Second_card ){

        freeze()
        ShakeDiv(first_card, Second_card)
        Board._Two_numbers_use = []
        if (Board._game_type === 2) {
          setTimeout(function () {
            RemoveClass(first_card, Second_card),
              Hide_div_son_show_father(first_card)
              , Hide_div_son_show_father(Second_card), freeze();
          }, 1100);

        }
      }
      
        if (Board._game_type === 0) {
          setTimeout(function () {
            RemoveClass(first_card, Second_card),
              Hide_div_son_show_father(first_card)
              , Hide_div_son_show_father(Second_card), freeze();
          }, 1100);
          setTimeout(function () { player_or_bot(); }, 2500);
          break;
        }

      }

    }
  }

}

function player_or_bot() {
  switch (Board._game_type) {
    case 0:
      bot_random_number(), Board._game_type = 1
      break;
    case 1:
      Board._game_type = 0;
      break;

  }
}
function bot_random_number() {
  const index = Math.floor(Math.random() * Board._pairs.length);
  const i = Board._pairs[index]

  return cell_click(i[1]), cell_click(i[0]), Board.bot_or_player = 0
}


function freeze() {
  if (Board._freeze === 0) {
    return Board._freeze = 1;
  }
  else {
    return Board._freeze = 0;
  }
}

function HideDiv(a, b) {
  const div1 = document.querySelector(`#card-${a}`)
  div1.classList.add("Hide");
  const div2 = document.querySelector(`#card-${b}`)
  div2.classList.add("Hide");
}


function blinkDiv(a, b) {
  const div3 = document.querySelector(`#card-${a}`)
  div3.classList.add("out");
  const div4 = document.querySelector(`#card-${b}`)
  div4.classList.add("out");
}
function RemoveClass_blink(a, b) {
  const div1 = document.querySelector(`#card-${a}`)
  div1.classList.remove("out");
  const div2 = document.querySelector(`#card-${b}`)
  div2.classList.remove("out");
}


function ShakeDiv(a, b) {
  const div3 = document.querySelector(`#Hide-${a}`)
  div3.classList.add("shake");
  const div4 = document.querySelector(`#Hide-${b}`)
  div4.classList.add("shake");
}


function RemoveClass(a, b) {
  const div1 = document.querySelector(`#Hide-${a}`)
  div1.classList.remove("shake");
  const div2 = document.querySelector(`#Hide-${b}`)
  div2.classList.remove("shake");
}


function end() { // exit פונקציה שמופעלת בעת לחיצה על הכפתור 

  window.setTimeout(function () { window.location.reload(); }, 0.1);
}
