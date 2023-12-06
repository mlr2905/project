function cell_click(a) { // The function works when the card is clicked
    if (Board.freeze === 0) {
        const div1 = document.querySelector(`#front-${a}`);
        const div2 = document.querySelector(`#Hide-${a}`);
        while (true) {
            if (div2 == null && div1 !== null) {
                hide_div_father_show_son(a)
                Board.Two_numbers_use.push(a);
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
//A function that checks: 
//1. Whether there is a cell or not
//2. If the game the games
function checkEqual() {
    Board.Two_numbers_use.sort();
    Board.first_card = Board.Two_numbers_use[0]
    Board.Second_card = Board.Two_numbers_use[1]
    let memory = null
    let memory_arr = null
    Board.for_ended = -1
    if (Board.first_card === Board.Second_card) {
        Board.first_card = -1, Board.Second_card = -1
        Board.Two_numbers_use = []
    }
    if (Board.first_card >= 0 && Board.Second_card >= 0) {
        for (let i = 0; i < Board.pairs.length; i++) {
            Board.for_ended++
            Board.check = Board.pairs[i]
            if (Board.check[0] === Board.first_card && Board.check[1] === Board.Second_card) {
                freeze()
                outDiv(Board.first_card, Board.Second_card)
                setTimeout(function () {
                    RemoveClass_out(Board.first_card, Board.Second_card)
                }, 1600);
                setTimeout(function () { HideDiv(Board.first_card, Board.Second_card), Board.Two_numbers_use = [], freeze(); }, 1500);
                memory = Board.pairs[i]
                memory_arr = [Board.first_card, Board.Second_card]
                if (memory[0] === memory_arr[0] && memory[1] === memory_arr[1]) {
                    Board.check[0] = -1
                    Board.check[1] = -1
                    Board.pairs.splice(i, 1);
                    card_matches()
                    TwoPlayer()
                    bar_update()
                    if (Board.pairs.length === 0) { // A condition that is activated at the exit of a round and deletes the current board and creates a new one
                        Check_who_win_rounds()
                        Board.rounds++
                        if (Board.max_rounds === Board.rounds) {//A condition that checks if the desired number of rounds has been reached
                            Check_who_win()
                            setTimeout(function () { exit(); }, 2000);
                            break;
                        }
                        Removal_of_children()
                        Definition_of_properties()
                        if (Board.game_type === "player_one" || Board.game_type === "player_two") {
                            Board.game_type = "player_one"
                        }
                        if (Board.game_type === "player_vs_bot" || Board.game_type === "bot") {
                            Board.game_type = "player_vs_bot"
                        }
                        style_type_random()
                        Board.maxarr = Board.board_size
                        main_function(Board.rows, Board.cols)
                        bar_update()
                        show_eye()
                        Board.show_all_cards = 0
                        break;
                    }
                    if (Board.game_type === "player" || Board.game_type === "bot") {
                        setTimeout(function () { player_or_bot(), freeze() }, 2500);
                    }
                    break;
                }
            }
            // שאין התמאה
            if (Board.for_ended === Board.pairs.length - 1) {
                if (Board.check[0] !== Board.check[1]) {
                    freeze()
                    ShakeDiv(Board.first_card, Board.Second_card)
                    if (Board.game_type === "one_player_only") {
                        Board.player_one_moves++
                        bar_update()
                    }
                    TwoPlayer()
                    setTimeout(function () {
                        RemoveClass_Shake(Board.first_card, Board.Second_card),
                            Hide_div_son_show_father(Board.first_card),
                            Hide_div_son_show_father(Board.Second_card), Board.Two_numbers_use = [], freeze()
                    }, 1100)
                    if (Board.game_type === "player" || Board.game_type === "bot") {
                        setTimeout(function () { player_or_bot(), Board.Two_numbers_use = [], freeze() }, 2500);
                    }
                }
            }
        }
    }
}

function style_type_random() {
    Board.style = random_style()
    if (Board.board_size === 32 || Board.board_size === 50) {
        if (Board.style === "HarryPotter") {
            Board.style = "Pokémon"
        }
    }
}

function Check_who_win_rounds() {
    if (Board.game_type === "one_player_only") {
        swal({ title: "Well done, you have completed a round!!", text: "", timer: 2000 })
        Board.win_player_one++
    }
    if (Board.game_type !== "one_player_only") {
        if (Board.player_one_Guess === Board.player_two_Guess || Board.player_one_Guess === Board.player_bot_Guess) {
            swal({ title: "Dead heat!!", text: "", timer: 3000 })
        }
        if (Board.player_one_Guess < Board.player_two_Guess) {
            swal({ title: "Player 2 Win!! (Won the current round)", text: "", timer: 3000 })
            Board.win_player_two++
        }
        if (Board.player_one_Guess < Board.player_bot_Guess) {
            swal({ title: "Bot Win!! (Won the current round)", text: "", timer: 3000 })
            Board.win_player_bot++
        }
        if (Board.player_one_Guess > Board.player_bot_Guess && Board.game_type === "player" || Board.game_type === "bot") {
            swal({ title: "Player 1 Win!!(Won the current round)", text: "", timer: 3000 })
            Board.win_player_one++
        }
        if (Board.player_one_Guess > Board.player_two_Guess && Board.game_type === "player_one" || Board.game_type === "player_two") {
            swal({ title: "Player 1 Win!!(Won the current round)", text: "", timer: 3000 })
            Board.win_player_one++
        }
    }
}

function Check_who_win() {
    if (Board.game_type === "one_player_only") {
        swal({ title: "Well done, game over!!", text: "", timer: 3000 })
    }
    if (Board.game_type !== "one_player_only") {
        if (Board.win_player_one === Board.win_player_two || Board.win_player_one === Board.win_player_bot) {
            swal({ title: "Dead heat!! - The game is over!!", text: "", timer: 3000 })
        }
        if (Board.win_player_one < Board.win_player_two) {
            swal({ title: 'Player 2 Win!! - The game is over!!', text: "", timer: 3000 })
        }
        if (Board.win_player_one < Board.win_player_bot) {
            swal({ title: 'Bot Win!! - The game is over!!', text: "", timer: 3000 })
        }
        if (Board.win_player_one > Board.win_player_two && Board.game_type === "player_one" || Board.game_type === "player_two") {
            swal({ title: 'Player 1 Win!! -The game is over!!', text: "", timer: 3000 })
        }
        if (Board.win_player_one > Board.win_player_bot && Board.game_type === "player" || Board.game_type === "bot") {
            swal({ title: 'Player One Win!! - The game is over!!', text: "", timer: 3000 })
        }
    }
}

function card_matches() {
    if (Board.game_type === "player" || Board.game_type === "player_one") {
        Board.player_one_Guess++
    }
    if (Board.game_type === "bot") {
        Board.player_bot_Guess++
    }
    if (Board.game_type === "player_two") {
        Board.player_two_Guess++
    }
    if (Board.game_type === "one_player_only") {
        Board.player_one_Guess++
    }
}

function bar_update() {
    const gameTypes = {
        "one_player_only": {
            round: `ROUND: ${Board.rounds}`,
            player1: `WIN: ${Board.win_player_one} --- Guess: ${Board.player_one_Guess} --- Moves:${Board.player_one_moves}`
        },
        "player_one": {
            round: `Player-1 -- ROUND: ${Board.rounds} -- Player-2`,
            player1: `Guess: ${Board.player_one_Guess} --- VS --- Guess: ${Board.player_two_Guess}`,
            win: `WIN: ${Board.win_player_one} --- VS --- WIN: ${Board.win_player_two}`
        },
        "player": {
            round: `Player-1 - ROUND: ${Board.rounds} - Player-BOT`,
            player1: `Guess: ${Board.player_one_Guess} --- VS --- Guess: ${Board.player_bot_Guess}`,
            win: `WIN: ${Board.win_player_one} --- VS --- WIN: ${Board.win_player_bot}`
        }
    };
    document.getElementById("round").textContent = gameTypes[Board.game_type].round;
    document.getElementById("player1").textContent = gameTypes[Board.game_type].player1;
}

function TwoPlayer() {
    switch (Board.game_type) {
        case "player_two":
            Board.game_type = "player_one";
            break;
        case "player_one":
            Board.game_type = "player_two";
            break;
    }
}

function player_or_bot() {
    switch (Board.game_type) {
        case "player":
            Board.game_type = "bot", bot_random_number()
            break;
        case "bot":
            Board.game_type = "player";
            break;
    }
}

function bot_random_number() { // Chooses moves for the bot 
    const index = Math.floor(Math.random() * Board.pairs.length);
    const i = Board.pairs[index]
    return cell_click(i[1]), cell_click(i[0])
}

function freeze() { // Locks and unlocks the board
    if (Board.freeze === 0) {
        return Board.freeze = 1; //Locks
    }
    else {
        return Board.freeze = 0; //unlocks
    }
}

function HideDiv(a, b) {
    const div1 = document.querySelector(`#card-${a}`)
    div1.classList.add("Hide");
    const div2 = document.querySelector(`#card-${b}`)
    div2.classList.add("Hide");
}

function outDiv(a, b) {
    const div3 = document.querySelector(`#card-${a}`)
    div3.classList.add("out");
    const div4 = document.querySelector(`#card-${b}`)
    div4.classList.add("out");
}

function RemoveClass_out(a, b) {
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

function RemoveClass_Shake(a, b) {
    const div1 = document.querySelector(`#Hide-${a}`)
    div1.classList.remove("shake");
    const div2 = document.querySelector(`#Hide-${b}`)
    div2.classList.remove("shake");
}

function Removal_of_children() {
    let parent = document.getElementById("board");
    // Delete all children
    parent.innerHTML = "";
    Board.parentDiv.classList.remove(`board${Board.size}`);
    let audio = document.getElementById("audio");
    audio.innerHTML = "";
}