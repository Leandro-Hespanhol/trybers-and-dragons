import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  _player: Character | Fighter;
  _monsters: Array<Fighter | SimpleFighter>;
  constructor(
    player: Character | Fighter,
    monsters: Array<Fighter | SimpleFighter>,
  ) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    let winner = 0;
    this._monsters.map((monster) => {
      for (let i = 0; i < 500; i += 1) {
        this._player.attack(monster);
        if (monster.lifePoints <= 0) {
          winner = 1;
        }
        monster.attack(this._player);
        if (this._player.lifePoints <= 0) {
          winner = -1;
          break;
        }
      }
      return winner;
    });
    return winner;
  }
}
