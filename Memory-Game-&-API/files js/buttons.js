function one_player() {
    Board.game_type = 5, Hide_select_first(), hide_button()
}

// Player vs player. The function is activated as soon as the button is pressed
function player_vs_player() {
    Board.game_type = 2, Hide_select_first(), hide_button()
}

// Player vs bot . The function is activated as soon as the button is pressed
function player_vs_bot() {
    Board.game_type = 0, Hide_select_first(), hide_button()
}

function hide_button() {
    const div1 = document.getElementById("TwoPlayer");
    div1.style.display = div1.style.display === "none" ? "block" : "none";
    const div2 = document.getElementById("bot");
    div2.style.display = div2.style.display === "none" ? "block" : "none";
    const div3 = document.getElementById("Oneplayer");
    div3.style.display = div3.style.display === "none" ? "block" : "none";
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

function random_style() {
    const array = ["HarryPotter", "Dogs", "Digimon", "Pokémon"];

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


function select_first() {  //  Board.style =  Game style (image type)
    let option = document.getElementById('select_first').value;
    switch (option) {
        case "1": Board.style = "HarryPotter", Hide_select_first(), Hide_select_two(), HideOptions()
            break;
        case "2": Board.style = "Dogs", Hide_select_first(), Hide_select_two()
            break;
        case "3": Board.style = "Digimon", Hide_select_first(), Hide_select_two()
            break;
        case "4": Board.style = "Pokémon", Hide_select_first(), Hide_select_two()
            break;
        case "5": Board.style = random_style(), Hide_select_first(), Hide_select_two(), HideOptions()
            break;
    }
}
arr = ["HarryPotter", "Dogs", "Digimon", "Pokémon"]

function HideOptions() { //In the Ari Potter game, the board is limited to 6x6
    if (Board.style === "HarryPotter") {
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

function select_Third() { //  Board.maxarr = With it the size of the board is determined (And it is relevant in other functions)
    Board.One_time = 0
    let option = document.getElementById('select_Third').value;
    switch (option) {
        case "1": Hide_select_Third(), Board.maxarr = 10, Board.max_show_all_cards = 3, main_function(4, 5) //20 cards
            break;
        case "2": Hide_select_Third(), Board.maxarr = 18, Board.max_show_all_cards = 5, main_function(6, 6) //32 cards
            break;
        case "3": Hide_select_Third(), Board.maxarr = 32, Board.max_show_all_cards = 10, main_function(8, 8) //64 cards
            break;
        case "4": Hide_select_Third(), Board.maxarr = 50, Board.max_show_all_cards = 15, main_function(10, 10) //100 cards
            break;
    }
}


function Create_authorized_buttons() {
    const buttons = [
        { id: "exit", text: "Exit", classes: ["btn", "exit", "button"], onClick: exit },
        { id: "Oneplayer", text: "One player", classes: ["btn", "bot", "button"], onClick: one_player },
        { id: "TwoPlayer", text: "Two Player", classes: ["btn", "TwoPlayer", "button"], onClick: player_vs_player },
        { id: "bot", text: "Player VS Bot", classes: ["btn", "bot", "button"], onClick: player_vs_bot },
    ];
    buttons.forEach((button) => {
        const buttonElement = document.createElement("button");
        buttonElement.id = button.id;
        buttonElement.textContent = button.text;
        buttonElement.classList.add(...button.classes);
        buttonElement.addEventListener("click", button.onClick);
        buttonElement.style.display = button.display;
        document.body.appendChild(buttonElement);
    });
}

function exit() { // exit function that is activated when the button is clicked
    window.setTimeout(function () { window.location.reload(); }, 0.1);
}