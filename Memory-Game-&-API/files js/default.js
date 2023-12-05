const Board = new Game_board(" ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ")

const Style_cards = new Playing_card_style(" ", " ", " ", " ")

Definition_of_properties()
default_value()

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

// Setting default properties
function Definition_of_properties() {
  Board.arr = [];
  Board.Creating_a_div = [];
  Board.Two_numbers_use = [];
  Board.doubled = [];
  Board.freeze = 0
  Board.on_or_off = "OFF"
  Board.show_all_cards = 0
}

function default_value() {
  Board.win_player_one = 0
  Board.win_player_two = 0
  Board.win_player_bot = 0
  Board.board_size = 0
  Board.rows = 0
  Board.cols = 0
  Board.rounds = 1
}