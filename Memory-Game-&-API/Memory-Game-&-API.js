
// window.localStorage.clear();




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
    case "2": Board._style = 2, Hide_select_first(), Hide_select_two(), HideOptions()
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
  if (Board._style === 1 || Board._style === 2) {

    const select = document.getElementById("select_two");
    const options = select.querySelectorAll("option");

    options[3].style.display = "none";
    options[4].style.display = "none";
  }
}

function select_two() {

  let option = document.getElementById('select_two').value;
  switch (option) {
    case "1": Hide_select_two(), Board._maxarr = 8, createCols(4, 4)
      break;
    case "2": Hide_select_two(), Board._maxarr = 18, createCols(6, 6)
      break;
    case "3": Hide_select_two(), Board._maxarr = 32, createCols(8, 8)
      break;
    case "4": Hide_select_two(), Board._maxarr = 50, createCols(10, 10)
      break;
  }
}



function createCols(rows, cols) {
  sound()
  createPairs()
  random_number_arr()
  const a = css(rows)
  const audio = document.getElementById('Audio');
  const parentDiv = document.getElementById("board");
  parentDiv.classList.add(`board${a}`);
  const firstRowDiv = document.createElement("div");
  firstRowDiv.classList.add("from-row");
  parentDiv.appendChild(firstRowDiv);
  on_or_off_sound()

  for (let i = 0; i < rows; i++) {

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    parentDiv.appendChild(rowDiv);

    for (let j = 0; j < cols; j++) {
      const fnun = get_random_div()
      Style_cards._imgN = Board._arr[fnun]
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.display = "flex";
      document.body.style.backgroundSize = "100% 100%";
      const audio = document.querySelector("audio");
      stopBackgroundChange()
      style_cards()
      const parentDiv = document.getElementById("board");
      const frontDiv = document.createElement("div");
      frontDiv.classList.add("front");
      frontDiv.id = `front-${fnun}`
      rowDiv.appendChild(frontDiv);
      addCellClick(`front-${fnun}`, fnun)
      document.getElementById(`front-${fnun}`).style.backgroundImage = `url(${Style_cards._card_front})`;
      const myDiv = document.querySelector(`#front-${fnun}`);
      myDiv.addEventListener("mouseover", function () { myDiv.style.backgroundImage = `url(${Style_cards._card_over})`; });
      myDiv.addEventListener("mouseout", function () { myDiv.style.backgroundImage = `url(${Style_cards._card_front})`; });
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.id = `cell-${fnun}`
      const childDivs = parentDiv.querySelectorAll("cell");
      frontDiv.appendChild(cellDiv);
      const img = document.createElement("img");
      const src = document.getElementById(`cell-${fnun}`);
      img.src = Style_cards._card_back
      src.appendChild(img);
    }
  }

  parentDiv.classList.add("flex");
  parentDiv.style.display = "flex";
  parentDiv.style.flexDirection = "row";

  for (let i = 0; i < rows; i++) {
    const rowDiv = document.querySelector(`.row:nth-child(${i + 1})`);
    rowDiv.classList.add("flex");
    rowDiv.style.flexDirection = "column";
  }

}
function sound() {
  const parentDiv = document.getElementById("audio")
  const cellDiv = document.createElement("div");
  cellDiv.classList.add("sound");
  cellDiv.id = "sound"
  parentDiv.appendChild(cellDiv);
  const img = document.createElement("img");
  const src = document.getElementById("sound");
  img.src = "images/on.png"
  src.appendChild(img);
  const div = document.getElementById("sound");
  div.addEventListener("click", function () {
    on_or_off_sound();
  });

}

function on_or_off_sound() {
  const audio = document.querySelector("audio");
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
    audio.play();
    Board._on_or_off = "ON"

  } else {
    audio.pause();
    Board._on_or_off = "OFF"
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
  //    יוצר מספר אקראי בין 2 ל- 480 
  const randomNumber = Math.floor(Math.random() * 548) + 2;

  // מחזיר את המספר
  return randomNumber;
}

// יצירת מערך של מספרים לפי גודל הלוח
function random_number_arr() {
  Board._arr = []
  let min = getRandomNumber()

  if (Board._style === 4) {
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


function css(rows) {
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






function addCellClick(divId, fnun) {
  // מצא את הדיב
  const div = document.getElementById(divId);

  // הוסף את הפונקציה `cell_click()` לאירוע `click` של כל תמונה
  div.addEventListener("click", function () {
    // קריאה לפונקציה `cell_click()` עם מספר התמונה
    cell_click(fnun);
  });

}

function random_number() {
  const index = Math.floor(Math.random() * Board._Creating_a_div.length);
  return index
}

function get_random_div() {
  while (true) {
    const index = random_number();

    const indexExistsInDoubled = Board._doubled.includes(index);

    if (!indexExistsInDoubled) {
      return Board._doubled.push(index), index;;


      break;
    }
    else {
      continue;
    }

  }
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
    checkWin()
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



function checkWin() {

  Board._Two_numbers_use.sort();
  const first_card = Board._Two_numbers_use[0]
  const Second_card = Board._Two_numbers_use[1]
  let for_ended = -1

  if (first_card >= 0 && Second_card >= 0) {
    for (let i = 0; i < Board._pairs.length; ++i) {
      for_ended++
      const index = Board._pairs[i]

      if (index[0] === first_card && index[1] === Second_card) {
        Board._Two_numbers_use = []
        blinkDiv(first_card, Second_card)
        setTimeout(function () {
          RemoveClass_blink(first_card, Second_card)
        }, 1600);
        setTimeout(function () { HideDiv(first_card, Second_card); }, 1500);

        for (let i = 0; i < Board._pairs.length; i++) {
          const b = Board._pairs[i]
          const arrv = [first_card, Second_card]
          if (b[0] === arrv[0] && b[1] === arrv[1] && Board._game_type === 2) {
            Board._pairs.splice(i, 1);
          }
        }

        if (b[0] === arrv[0] && b[1] === arrv[1] && Board._game_type === 0) {
          Board._pairs.splice(i, 1);
          setTimeout(function () { player_or_bot(); }, 2500);
          break;
        }
      }
      // שאין התמאה
      if (index[0] !== first_card && index[1] !== Second_card && for_ended === Board._pairs.length - 1) {

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
  const div3 = document.querySelector(`#Hide-${a}`)
  div3.classList.add("out");
  const div4 = document.querySelector(`#Hide-${b}`)
  div4.classList.add("out");
}
function RemoveClass_blink(a, b) {
  const div1 = document.querySelector(`#Hide-${a}`)
  div1.classList.remove("out");
  const div2 = document.querySelector(`#Hide-${b}`)
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
