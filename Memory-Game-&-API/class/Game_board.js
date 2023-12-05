class Game_board {
    constructor(_pairs, _maxarr, _doubled, _freeze, _arr, _Creating_a_div,
       _Two_numbers_use,_game_type, _style,_on_or_off,_random,_frontDiv,
       _rowDiv,_size,_parentDiv,_player_one_Guess,_rounds,_player_two_Guess,_player_bot_Guess,
       _for_ended,_first_card,_Second_card,_check,_lector,_src,_img,_max_rounds,
       _win_player_one,_win_player_two, _win_player_bot,_max_round,_One_time,
       _board_size,_rows,_cols,_player_one_moves,_show_all_cards,_max_show_all_cards,_eye,_Out_of_cards) 
       {
      this.pairs = _pairs;
      this.maxarr = _maxarr;
      this.doubled = _doubled;
      this.freeze = _freeze
      this.arr = _arr;
      this.Creating_a_div = _Creating_a_div; // מערך זה משמש ליצרת כמות הקלפים שמופיעים בלוח
      this.Two_numbers_use = _Two_numbers_use;//יצרת מערך שמשמש לבדיקת התאמה של הקלפים הפתוחים
      this.game_type = _game_type
      this.style = _style
      this.on_or_off = _on_or_off
      this.random =_random
      this.frontDiv =_frontDiv
      this.rowDiv =_rowDiv
      this.size = _size
      this.parentDiv = _parentDiv
      this.player_one_Guess = _player_one_Guess
      this.rounds =_rounds
      this.player_two_Guess = _player_two_Guess
      this.player_bot_Guess = _player_bot_Guess
      this.Out_of_cards = _Out_of_cards
      this.for_ended = _for_ended
      this.first_card =_first_card
      this.Second_card =_Second_card
      this.check =_check
      this.lector =_lector
      this.src = _src
      this.img =_img
      this.win_player_one = _win_player_one
      this.win_player_two = _win_player_two
      this.win_player_bot = _win_player_bot
      this.max_rounds = _max_rounds
      this.One_time = _One_time 
      this.board_size =_board_size 
      this.rows = _rows
      this.cols= _cols
      this.player_onemoves = _player_one_moves
      this.show_all_cards = _show_all_cards
      this.max_show_all_cards = _max_show_all_cards
      this.eye = _eye

    }
  }