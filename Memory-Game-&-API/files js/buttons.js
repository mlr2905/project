function one_player() {
    Board.game_type = "one_player_only", Hide_or_show_div("select_first"), hide_button()
}

// Player vs player. The function is activated as soon as the button is pressed
function player_vs_player() {
    Board.game_type = "player_one", Hide_or_show_div("select_first"), hide_button()
}

// Player vs bot . The function is activated as soon as the button is pressed
function player_vs_bot() {
    Board.game_type = "player", Hide_or_show_div("select_first"), hide_button()
}

function hide_button() {
    Hide_or_show_div("TwoPlayer")
    Hide_or_show_div("bot")
    Hide_or_show_div("Oneplayer")
}

function Hide_or_show_div(element) {
    const div1 = document.getElementById(element);
    div1.style.display = div1.style.display === "none" ? "block" : "none";
}

function random_style() {
    const array = ["HarryPotter", "Dogs", "Digimon", "Pokémon"];
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function select_first() {  //  Board.style =  Game style (image type)
    const option = document.getElementById('select_first').value;
    const arr = {
        1: "HarryPotter", 2: "Dogs", 3: "Digimon", 4: "Pokémon", 5: random_style()
    }
    Board.style = arr[option]
    Hide_Options()
    Hide_or_show_div("select_first")
    Hide_or_show_div("select_two")
}

function Hide_Options() { //In the Ari Potter game, the board is limited to 6x6
    if (Board.style === "HarryPotter" ) {
        const select = document.getElementById("select_Third");
        const options = select.querySelectorAll("option");
        options[3].style.display = "none";
        options[4].style.display = "none";
    }
}

function select_two() {
    const option = document.getElementById('select_two').value;
    const arr = { 1: 4, 2: 6, 3: Infinity }
    Board.max_rounds = arr[option]
    Hide_or_show_div("select_two")
    Hide_or_show_div("select_Third")
}

function select_Third() { //  Board.maxarr = With it the size of the board is determined (And it is relevant in other functions)
    Board.One_time = 0
    const option = document.getElementById('select_Third').value;
    const arr1 = { 1: 10, 2: 18, 3: 32, 4: 50 }
    const arr2 = { 1: 3, 2: 5, 3: 10, 4: 15 }
    const arr3 = { 1: [4, 5], 2: [6, 6], 3: [8, 8], 4: [10, 10] }
    const arr4 = arr3[option]
    Hide_or_show_div("select_Third")
    Board.maxarr = arr1[option]
    Board.max_show_all_cards = arr2[option]
    const function_activation = main_function(arr4[0], arr4[1])
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