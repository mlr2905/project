class Game_board {
    constructor(_game_type, _xo, _rounds, _win_x,_win_o,_on_or_off_rotation,_arr,_who_winner,_freeze,_win_arr) {
      this.game_type =_game_type;
      this.xo = _xo;
      this.rounds = _rounds;
      this.win_x = _win_x
      this.win_o = _win_o
      this.on_or_off_rotation = _on_or_off_rotation
      this.arr = _arr
      this.who_winner = _who_winner
      this.freeze =_freeze
      this.win_arr = _win_arr
    }
  }