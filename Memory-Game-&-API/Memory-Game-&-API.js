

Definition_of_properties()
// Setting default properties
function Definition_of_properties() {
  Board._arr = [];
  Board._Creating_a_div = [];
  Board._Two_numbers_use = [];
  Board._doubled = [];
  Board._freeze = 0
  Api._data4 = puse_PokeAPI_data4()
  Board._on_or_off = "OFF"


}
default_value()
function default_value() {
  Board._win_player_one = 0
  Board._win_player_two = 0
  Board._win_player_bot = 0
  Board._board_size = 0
  Board._rows = 0
  Board._cols = 0
  Board._rounds = 1
}





//  Sets a background and also that it changes every 5 seconds
function changeBackground() {
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.display = "flex";
  document.body.style.backgroundSize = "100% 100%";
  const images = ["images/poketheme.jpg", "images/digimon.png", "images/HarryPotter.gif", "images/dog-.jpg"];

  const index = Math.floor(Math.random() * images.length);
  document.querySelector("body").style.backgroundImage = `url(${images[index]})`;
}
intervalId = setInterval(changeBackground, 5000);


function one_player() {
  Board._game_type = 5, Hide_select_first(), hide_button()

}

// Player vs player. The function is activated as soon as the button is pressed
function player_vs_player() {

  Board._game_type = 2, Hide_select_first(), hide_button()
}
// Player vs bot . The function is activated as soon as the button is pressed
function player_vs_bot() {

  Board._game_type = 0, Hide_select_first(), hide_button()
}

function hide_button() {
  const div2 = document.getElementById("TwoPlayer");
  div2.style.display = div2.style.display === "none" ? "block" : "none";
  const div3 = document.getElementById("bot");
  div3.style.display = div3.style.display === "none" ? "block" : "none";
  const div4 = document.getElementById("Oneplayer");
  div4.style.display = div4.style.display === "none" ? "block" : "none";

}

function Hide_select_first() {
  const div1 = document.getElementById("select_first");
  div1.style.display = div1.style.display === "none" ? "block" : "none";
}


function Hide_select_two() {
  const div1 = document.getElementById("select_two");
  div1.style.display = div1.style.display === "none" ? "block" : "none";
}
function Hide_select_Third() {
  const div1 = document.getElementById("select_Third");
  div1.style.display = div1.style.display === "none" ? "block" : "none";
}


function select_first() {  //  Board._style =  Game style (image type)

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

function HideOptions() { //In the Ari Potter game, the board is limited to 6x6
  if (Board._style === 1) {

    const select = document.getElementById("select_Third");
    const options = select.querySelectorAll("option");

    options[3].style.display = "none";
    options[4].style.display = "none";
  }
}


function select_two() { 

  let option = document.getElementById('select_two').value;
  switch (option) {
    case "1": Hide_select_two(), Board.max_rounds = 4, Hide_select_Third()
      break;
    case "2": Hide_select_two(), Board.max_rounds = 6, Hide_select_Third()
      break;
    case "3": Hide_select_two(), Hide_select_Third()
      break;

  }
}

function select_Third() { //  Board._maxarr = With it the size of the board is determined (And it is relevant in other functions)
  Board._One_time = 0
  let option = document.getElementById('select_Third').value;
  switch (option) {
    case "1": Hide_select_Third(), Board._maxarr = 10, main_function(4, 5) //20 cards
      break;
    case "2": Hide_select_Third(), Board._maxarr = 18, main_function(6, 6) //32 cards
      break;
    case "3": Hide_select_Third(), Board._maxarr = 32, main_function(8, 8) //64 cards
      break;
    case "4": Hide_select_Third(), Board._maxarr = 50, main_function(10, 10) //100 cards
      break;
  }
}

// The main function that builds the board with all the divs and images, 
// background music and more with the help of activating additional functions
function main_function(rows, cols) { //  receives two values
  if (Board._One_time === 0) {// One-time setting to save the board size
    Board._board_size = Board._maxarr
    Board._rows = rows
    Board._cols = cols

  }
  Board._One_time = 1
  clearInterval(intervalId); // Stops the changing moment (Line 28)
  bar_default() 
  createPairs()
  sound()
  random_number_arr()
  on_or_off_sound()
  Create_a_board(rows) 

  for (let i = 0; i < rows; i++) {  // The loop each time creates one div with class "row" child of div board

    Board._rowDiv = document.createElement("div");
    Board._rowDiv.classList.add("row");
    Board._parentDiv.appendChild(Board._rowDiv);

    for (let j = 0; j < cols; j++) { // A loop that adds children to the parent div "row"
      Board._random = get_random_div() //  causes the images and divs to scatter randomly
      Style_cards._imgN = Board._arr[Board._random]
      style_cards()
      Create_a_parent_div()
      card_front_and_over()
      Creating_a_Child_div()
    }
  }

}

function bar_default() { 
  const div1 = document.getElementById("bar");
  div1.style.display = "block"

  Board._player_one_Guess = 0, Board._player_two_Guess = 0, Board._player_bot_Guess = 0,Board._player_one_moves = 0
  if (Board._game_type === 2) {
    document.getElementById("player1").textContent = `Player-1: ${Board._player_one_Guess}------- VS ------- Player-2: ${Board._player_two_Guess}`,
      document.getElementById("round").textContent = `  Round: ${Board._rounds} `;
  }
  if (Board._game_type === 0) {
    document.getElementById("player1").textContent = `Player-1: ${Board._player_one_Guess} ------- VS -------Player-Bot: ${Board._player_bot_Guess}`,
      document.getElementById("round").textContent = `  Round: ${Board._rounds} `;
  }
  if (Board._game_type === 5) {
    document.getElementById("round").textContent = `ROUND: ${Board._rounds} `,
    document.getElementById("player1").textContent = `WIN: ${Board._win_player_one} --- Guess: ${Board._player_one_Guess} --- Moves: ${Board._player_one_moves}`
  }
}

function sound() { //A function that configures the icon of the music with the option to click
  Board._audio = document.querySelector("audio");
  const cellDiv = document.createElement("div");
  Board._audio.appendChild(cellDiv);
  Board._img = document.createElement("img");
  Board._src = document.getElementById("audio");
  Board._img.src = "images/on.png"
  Board._src.appendChild(Board._img);
  Board._src.addEventListener("click", on_or_off_sound);

}

// Defines the type of music according to the style of play and 
// turns the music on if it is off or turns it off when it is on
function on_or_off_sound() {  
  Board._audio = document.querySelector("audio");
  if (Board._style === 1) {

    Board._audio.src = "audio/HarryPotter.mp3";
  }
  
  if (Board._style === 2) {

    Board._audio.src = "audio/default.mp3";
  }

  if (Board._style === 3) {

    Board._audio.src = "audio/Digimon.mp3";
  }
  if (Board._style === 4) {

    Board._audio.src = "audio/Pokémon.mp3";
  }

  if (Board._on_or_off === "OFF") {

    Board._src.removeChild(Board._img);

    Board._img = document.createElement("img");
    Board.src = document.getElementById("audio");
    Board._img.src = "images/on.png"
    Board._src.appendChild(Board._img);
    Board._audio.play();
    Board._on_or_off = "ON"

  }

  else {
    Board.src.removeChild(Board._img);
    Board._img = document.createElement("img");
    Board._src = document.getElementById("audio");
    Board._img.src = "images/off.png"
    Board._src.appendChild(Board._img);
    Board._audio.pause();
    Board._on_or_off = "OFF"
  }
}


function createPairs() { // Create pairs according to board size
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

function getRandomNumber() {// Generates a random number between 2 and 548


// Generates a random number between 2 and 548
  const Number = Math.floor(Math.random() * 548) + 2;

  return Number;
}

// Creating an array of numbers according to the size of the board
function random_number_arr() {
  Board._arr = []

  if (Board._style === 4) { // Chooses images randomly
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

function Create_a_board(rows) { // Adds calss to the size of the selected board. The calss causes the board to change size with css
  if (rows === 4) {
    Board._size = 1;
  }
  if (rows === 6) {
    Board._size = 2
  }
  if (rows === 8) {
    Board._size =  3
  }
  if (rows === 10) {
    Board._size =  4;
  }
  Board._parentDiv = document.getElementById("board");
  Board._parentDiv.classList.add(`board${Board._size}`);

}

function addCellClick(divId, number) { //Adds onClick to this div
  const div = document.getElementById(divId);
  div.addEventListener("click", function () {
    // קריאה לפונקציה `cell_click()` עם מספר התמונה
    cell_click(number);
  });

}

function random_number() { // Gets a random number from an array of id's of the div
  const index = Math.floor(Math.random() * Board._Creating_a_div.length);
  return index
}

function get_random_div() {
  while (true) {
    const index = random_number();

    const Doubled = Board._doubled.includes(index); //Checking that the number does not repeat itself

    if (!Doubled) {
      Board._doubled.push(index)
      return  index;;
    }
    else {
      continue;
    }

  }
}

function style_cards() {//Defines the images on the board according to the selected game style
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

function card_front_and_over() {//Defines an image on the front of the card and also the transfer on top of the card
  let myDiv = document.querySelector(`#front-${Board._random}`);
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

function cell_click(a) { // The function works when the card is clicked

  if (Board._freeze === 0) {
    const div1 = document.querySelector(`#front-${a}`);
    const div2 = document.querySelector(`#Hide-${a}`);

    while (true) {
      if (div2 == null && div1 !== null) {
        hide_div_father_show_son(a)
        Board._Two_numbers_use.push(a);

        break;
      }
      if (div1 == null && div2 !== null) {
        swal({ title: "A card cannot be turned over, another card must be clicked !!", text: "", timer: 2000 })
        break;
      }
    }
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
  Board._first_card = Board._Two_numbers_use[0]
  Board._Second_card = Board._Two_numbers_use[1]
  let memory = null
  let memory_arr = null
  Board._for_ended = -1
  if (Board._first_card === Board._Second_card) {
    Board._first_card = -1, Board._Second_card = -1
    Board._Two_numbers_use = []
  }

  if (Board._first_card >= 0 && Board._Second_card >= 0) {
    for (let i = 0; i < Board._pairs.length; i++) {

      Board._for_ended++
      Board._check = Board._pairs[i]

      if (Board._check[0] === Board._first_card && Board._check[1] === Board._Second_card) {
        freeze()

        Board._Two_numbers_use = []
        blinkDiv(Board._first_card, Board._Second_card)
        setTimeout(function () {
          RemoveClass_blink(Board._first_card, Board._Second_card)
        }, 1600);
        setTimeout(function () { HideDiv(Board._first_card, Board._Second_card), freeze(); }, 1500);

        memory = Board._pairs[i]
        memory_arr = [Board._first_card, Board._Second_card]

        if (memory[0] === memory_arr[0] && memory[1] === memory_arr[1]) {
          Board._check[0] = -1
          Board._check[1] = -1
          if (Board._game_type === 2 || Board._game_type === 3 || Board._game_type === 5) {
            Board._pairs.splice(i, 1);
            card_matches()
            TwoPlayer()
            bar_update()

            if (Board._pairs.length === 0) {

              if(Board._game_type === 5){

                Board._win_player_one++
              }

              Check_who_win_rounds()
              Board._rounds++
              if (Board.max_rounds === Board._rounds) {
                Check_who_win()
                setTimeout(function () { end(); }, 2000);
                break;
              }
              Removal_of_children()
              Definition_of_properties()
              if (Board._game_type === 2 || Board._game_type === 3) {
                Board._game_type = 2
              }

              if (Board._game_type === 0 || Board._game_type === 1) {
                Board._game_type = 0
              }
              style_type()

              Board._maxarr = Board._board_size
              main_function(Board._rows,Board._cols)
              bar_update()
              break;
            }
            break;
          }

        }

        if (memory[0] === memory[1]) {

          if (Board._game_type !== 2 || Board._game_type !== 3) {
            Board._pairs.splice(i, 1);
            card_matches()
            bar_update()
            setTimeout(function () { freeze(),player_or_bot(), freeze() }, 2500);
            break;
          }
        }
      }

    }

    // שאין התמאה
    if (Board._for_ended === Board._pairs.length - 1) {

      if (Board._check[0] !== Board._check[1]) {

        freeze()
        ShakeDiv(Board._first_card, Board._Second_card)
        Board._Two_numbers_use = []

        if (Board._game_type !== 0 || Board._game_type !== 1) {
          if (Board._game_type === 5) {

            Board._player_one_moves++
            bar_update()

          }
        }
          TwoPlayer()
          setTimeout(function () {
            RemoveClass(Board._first_card, Board._Second_card),
              Hide_div_son_show_father(Board._first_card)
              , Hide_div_son_show_father(Board._Second_card), freeze();
          }, 1100)
          

        if (Board._game_type === 0) {
          setTimeout(function () {
            RemoveClass(Board._first_card, Board._Second_card),
              Hide_div_son_show_father(Board._first_card)
              , Hide_div_son_show_father(Board._Second_card)
          }, 1100);
          setTimeout(function () {  player_or_bot(), freeze() }, 2500);
        }
      }

    }

  }
}

function style_type() {

  Board._style = Math.floor(Math.random() * 4) + 1

  if (Board._board_size === 32 || Board._board_size === 50) {
    if (Board._style === 1) {
      Board._style = 4
    }
  }
}
function Check_who_win_rounds() {
  if (Board._game_type === 5) {
    swal({ title: "Well done, you have completed a round!!", text: "", timer: 2000 })
    Board._win_player_one++
  }
  if (Board._game_type !== 5) {

    if (Board._player_one_Guess === Board._player_two_Guess || Board._player_one_Guess === Board._player_bot_Guess) {
      swal({ title: "Dead heat!!", text: "", timer: 1500 })

    }
    if (Board._player_one_Guess < Board._player_two_Guess) {
      swal({ title: "Player 2 Win!! (Won the current round)", text: "", timer: 2000 })
      Board._win_player_two++

    }
    if (Board._player_one_Guess < Board._player_bot_Guess) {
      swal({ title: "Bot Win!! (Won the current round)", text: "", timer: 2000 })
      Board._win_player_bot++
    }
    if (Board._player_one_Guess > Board._player_bot_Guess && Board._player_one_Guess > Board._player_two_Guess) {
      swal({ title: "Player 1 Win!!(Won the current round)", text: "", timer: 2000 })
      Board._win_player_one++
    }
  }
}
function Check_who_win() {
  if (Board._game_type === 5) {
    swal({ title: "Well done, game over!!", text: "", timer: 2000 })

  }
  if (Board._game_type !== 5) {

    if (Board._win_player_one === Board._win_player_two || Board._win_player_one === Board._win_player_bot) {
      swal({ title: "Dead heat!! - The game is over!!", text: "", timer: 2000 })
    }
    if (Board._win_player_one < Board._win_player_two) {
      swal({ title: 'Player 2 Win!! - The game is over!!', text: "", timer: 2000 })
    }
    if (Board._win_player_one < Board._win_player_bot) {
      swal({ title: 'Bot Win!! - The game is over!!', text: "", timer: 2000 })
    }
    if (Board._win_player_one > Board._win_player_two) {
      swal({ title: 'Player 1 Win!! -The game is over!!', text: "", timer: 2000 })

    }
    if (Board._win_player_one > Board._win_player_bot) {
      swal({ title: 'Player One Win!! - The game is over!!', text: "", timer: 2000 })

    }
  }
}

function card_matches() {

  if (Board._game_type === 1 || Board._game_type === 2) {
    Board._player_one_Guess++
  }
  if (Board._game_type === 0) {
    Board._player_bot_Guess++
  }
  if (Board._game_type === 3) {
    Board._player_two_Guess++
  }
  if (Board._game_type === 5) {
    Board._player_one_Guess++
  }
}

function bar_update() {
  if (Board._game_type === 5) {
    document.getElementById("round").textContent = `ROUND: ${Board._rounds} `,
    document.getElementById("player1").textContent = `WIN: ${Board._win_player_one} --- Guess: ${Board._player_one_Guess} --- Moves:${Board._player_one_moves}`
  }

  if (Board._game_type === 2 || Board._game_type === 3) {
    document.getElementById("round").textContent = ` Player-1 -- ROUND: ${Board._rounds} -- Player-2 `,
      document.getElementById("player1").textContent = `Guess: ${Board._player_one_Guess} --- VS --- Guess: ${Board._player_two_Guess}`,
      document.getElementById("win").textContent = ` WIN: ${Board._win_player_one} --- VS ---  WIN: ${Board._win_player_two}`;

  }
  if (Board._game_type === 0 || Board._game_type === 1) {
    document.getElementById("round").textContent = `Player-1 - ROUND: ${Board._rounds} - Player-BOT`,
      document.getElementById("player1").textContent = `Guess: ${Board._player_one_Guess} --- VS --- Guess: ${Board._player_bot_Guess}`,
      document.getElementById("win").textContent = ` WIN: ${Board._win_player_one} --- VS --- WIN: ${Board._win_player_two}`;

  }
}

function TwoPlayer() {
  switch (Board._game_type) {
    case 3:
      Board._game_type = 2
      break;
    case 2:
      Board._game_type = 3;
      break;

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

  return cell_click(i[1]), cell_click(i[0]),Board._game_type = 1
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

function Removal_of_children() {
  let parent = document.getElementById("board");

  // מחיקת כל הילדים
  parent.innerHTML = "";
  Board._parentDiv.classList.remove(`board${Board._size}`);

  let audio = document.getElementById("audio");

  audio.innerHTML = "";

}

function end() { // exit פונקציה שמופעלת בעת לחיצה על הכפתור 

  window.setTimeout(function () { window.location.reload(); }, 0.1);
}
