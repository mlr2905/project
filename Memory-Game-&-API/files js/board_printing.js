
// The main function that builds the board with all the divs and images, 
// background music and more with the help of activating additional functions
function main_function(rows, cols) { //  receives two values
  if (Board.One_time === 0) {// One-time setting to save the board size
    Board.board_size = Board.maxarr
    Board.rows = rows
    Board.cols = cols
    Board.One_time++
  }
  clearInterval(intervalId); // Stops the changing moment (Memory-Game-&-API/files js/default.js)
  bar_default()
  create_pairs()
  hide_and_show_eye()
  sound()
  random_number_arr()
  on_or_off_sound()
  Create_a_board(rows)

  for (let i = 0; i < rows; i++) {  // The loop each time creates one div with class "row" child of div board
    Board.rowDiv = document.createElement("div");
    Board.rowDiv.classList.add("row");
    Board.parentDiv.appendChild(Board.rowDiv);
    for (let j = 0; j < cols; j++) { // A loop that adds children to the parent div "row"
      Board.random = get_random_div() //  causes the images and divs to scatter randomly
      Style_cards.imgN = Board.arr[Board.random]
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
  Board.player_one_Guess = 0;
  Board.player_two_Guess = 0;
  Board.player_bot_Guess = 0;
  Board.player_one_moves = 0;

  const gameTypes = {
    2: {
      player1: `Player-1: ${Board.player_one_Guess} - VS - Player-2: ${Board.player_two_Guess}`,
      round: `Round: ${Board.rounds}`,
    },
    0: {
      player1: `Player-1: ${Board.player_one_Guess} - VS - Player-Bot: ${Board.player_bot_Guess}`,
      round: `Round: ${Board.rounds}`,
    },
    5: {
      player1: `WIN: ${Board.win_player_one} - Guess: ${Board.player_one_Guess} - Moves: ${Board.player_one_moves}`,
      round: `Round: ${Board.rounds}`,
    },
  };

  const display = gameTypes[Board.game_type];

  document.getElementById("player1").textContent = display.player1;
  document.getElementById("round").textContent = display.round;

}

function hide_and_show_eye() {
  const div1 = document.getElementById("eye");
  div1.style.display = div1.style.display === "none" ? "block" : "none";
}

function show_eye() {
  const div1 = document.getElementById("eye");
  div1.style.display = "block"
}

function Show_all_the_cards() {
  if (Board.show_all_cards !== Board.max_show_all_cards) {
    if (Board.Two_numbers_use.length === 0) {
      const a = [];
      for (const pair of Board.pairs) {
        a.push(pair[0], pair[1]);
      }
      for (let i = 0; i < a.length; i++) {
        hide_div_father_show_son(a[i])
      }
      Board.show_all_cards++
    }
    else {
      swal({ title: "Cards cannot be shown as one card shown !!", text: "", timer: 2500 })
    }
  }
  else {
    swal({ title: "It is not possible to show the cards !!", text: "", timer: 2000 })
    hide_and_show_eye()
  }
  setTimeout(function () { Hide_all_the_cards() }, 3000);
}

function Hide_all_the_cards() {
  const a = [];
  for (const pair of Board.pairs) {
    a.push(pair[0], pair[1]);
  }
  for (let i = 0; i < a.length; i++) {
    Hide_div_son_show_father(a[i])
  }
}

function sound() { //A function that configures the icon of the music with the option to click
  Board.audio = document.querySelector("audio");
  const cellDiv = document.createElement("div");
  Board.audio.appendChild(cellDiv);
  Board.img = document.createElement("img");
  Board.src = document.getElementById("audio");
  Board.img.src = "images/on.png"
  Board.src.appendChild(Board.img);
  Board.src.addEventListener("click", on_or_off_sound);
}

// Defines the type of music according to the style of play and 
// turns the music on if it is off or turns it off when it is on
function on_or_off_sound() {
  Board.audio = document.querySelector("audio");
  const audioFiles = {
    "HarryPotter": "audio/HarryPotter.mp3",
    "Dogs": "audio/default.mp3",
    "Digimon": "audio/Digimon.mp3",
    "Pokémon": "audio/Pokémon.mp3",
  };
  Board.audio.src = audioFiles[Board.style];

  if (Board.on_or_off === "OFF") {
    Board.src.removeChild(Board.img);
    Board.img = document.createElement("img");
    Board.src = document.getElementById("audio");
    Board.img.src = "images/on.png"
    Board.src.appendChild(Board.img);
    Board.audio.play();
    Board.on_or_off = "ON"
  }
  else {
    Board.src.removeChild(Board.img);
    Board.img = document.createElement("img");
    Board.src = document.getElementById("audio");
    Board.img.src = "images/off.png"
    Board.src.appendChild(Board.img);
    Board.audio.pause();
    Board.on_or_off = "OFF"
  }
}

function create_pairs() { // Create pairs according to board size
  Board.pairs = [];
  let a = -1
  for (let i = 0; i < Board.maxarr; i++) {
    a += 2
    if (i === 0) {
      Board.pairs.push([0, a]);
    }
    if (i !== 0) {
      Board.pairs.push([a - 1, a]);
    }
  }

  return Board.pairs;

}

function get_random_number() {// Generates a random number between 2 and 548
  // Generates a random number between 2 and 598
  const number = Math.floor(Math.random() * 598) + 2;
  return number;
}

// Creating an array of numbers according to the size of the board
function random_number_arr() {
  Board.arr = []
  if (Board.style === "Pokémon") { // Chooses images randomly
    let min = get_random_number()
    for (let i = 0; i < Board.maxarr; i++) {
      Board.arr.push(min, min);
      min += 1
    }
  }
  else {
    for (let i = 0; i < Board.maxarr; i++) {
      Board.arr.push(i, i);
    }
  }
  for (let j = 0; j < Board.maxarr * 2; j++) {
    Board.Creating_a_div.push(j);
  }
}

function Create_a_board(rows) { // Adds calss to the size of the selected board. The calss causes the board to change size with css
  const sizes = {
    4: 1,
    6: 2,
    8: 3,
    10: 4,
  };
  Board.size = sizes[rows];
  Board.parentDiv = document.getElementById("board");
  Board.parentDiv.classList.add(`board${Board.size}`);
}

function addCellClick(divId, number) { //Adds onClick to this div
  const div = document.getElementById(divId);
  div.addEventListener("click", function () {
    // קריאה לפונקציה `cell_click()` עם מספר התמונה
    cell_click(number);
  });
}

function random_number() { // Gets a random number from an array of id's of the div
  const index = Math.floor(Math.random() * Board.Creating_a_div.length);
  return index
}

function get_random_div() {
  while (true) {
    const index = random_number();
    const Doubled = Board.doubled.includes(index); //Checking that the number does not repeat itself
    if (!Doubled) {
      Board.doubled.push(index)
      return index;;
    }
    else {
      continue;
    }
  }
}

function style_cards() {//Defines the images on the board according to the selected game style
  const backgroundImages = {
    "HarryPotter": "images/ari.gif",
    "Dogs": "images/dog-.jpg",
    "Digimon": "images/digimon.png",
    "Pokémon": "images/poketheme.jpg",
  };
  const cardBacks = {
    "HarryPotter": Api.data1[Style_cards.imgN].image,
    "Dogs": Api.data2.message[Style_cards.imgN],
    "Digimon": Api.data3[Style_cards.imgN].img,
    "Pokémon": Api.data4[Style_cards.imgN].url,
  };
  const cardFronts = {
    "HarryPotter": "images/ari_front.jpg",
    "Dogs": "images/dog.jpg",
    "Digimon": "images/dig_front.jpg",
    "Pokémon": "images/poke_front.png",
  };
  const cardOvers = {
    "HarryPotter": "images/ari_over.gif",
    "Dogs": "images/dog-over.gif",
    "Digimon": "images/digimon.gif",
    "Pokémon": "images/poke_over.gif",
  };
  document.body.style.backgroundImage = `url(${backgroundImages[Board.style]})`;
  Style_cards.card_back = cardBacks[Board.style];
  Style_cards.card_front = cardFronts[Board.style];
  Style_cards.card_over = cardOvers[Board.style];
}

function card_front_and_over() {//Defines an image on the front of the card and also the transfer on top of the card
  let myDiv = document.querySelector(`#front-${Board.random}`);
  myDiv.addEventListener("mouseover", function () { myDiv.style.backgroundImage = `url(${Style_cards.card_over})`; });
  myDiv.addEventListener("mouseout", function () { myDiv.style.backgroundImage = `url(${Style_cards.card_front})`; });
}

function Create_a_parent_div() {
  Board.frontDiv = document.createElement("div");
  Board.frontDiv.classList.add("front");
  Board.frontDiv.id = `front-${Board.random}`
  Board.rowDiv.appendChild(Board.frontDiv);
  addCellClick(`front-${Board.random}`, Board.random)
  document.getElementById(`front-${Board.random}`).style.backgroundImage = `url(${Style_cards.card_front})`;
}

function Creating_a_Child_div() {
  const cellDiv = document.createElement("div");
  cellDiv.classList.add("cell");
  cellDiv.id = `cell-${Board.random}`
  Board.frontDiv.appendChild(cellDiv);
  const img = document.createElement("img");
  const src = document.getElementById(`cell-${Board.random}`);
  img.src = Style_cards.card_back
  src.appendChild(img);
}
