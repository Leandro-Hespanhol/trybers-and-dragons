import { Necromancer, Ranger, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Dwarf, Elf, Halfling } from './Races';

const player1 = new Character(
  'Zeze',
  new Dwarf('Dwarf', 10),
  new Warrior('Zeze'),
);
const player2 = new Character(
  'Euge',
  new Halfling('Halfling', 10),
  new Ranger('Euge'),
);
const player3 = new Character(
  'Leo',
  new Elf('Elf', 10),
  new Necromancer('Leo'),
);

for (let i = 0; i < 10; i += 1) player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(batlles: Battle[]) {
  batlles.forEach((elem) => elem.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};