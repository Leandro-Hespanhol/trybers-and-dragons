import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  _player1: Fighter;
  _player2: Fighter;
  constructor(
    player1: Fighter,
    player2: Fighter,
  ) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    for (let i = 0; i < 50; i += 1) {
      this._player1.attack(this._player2);
      if (this._player2.lifePoints <= 0) {
        return 1;
      }
      this._player2.attack(this._player1);
      if (this._player1.lifePoints <= 0) {
        return -1;
      }
    }
    return -1;
  }
}