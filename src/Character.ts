import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import SimpleFighter from './Fighter/SimpleFighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter, SimpleFighter {
  public name: string;
  private _race: Race;
  private _archetype: Archetype;
  protected _maxLifePoints: number;
  protected _lifePoints: number;
  protected _strength: number;
  protected _defense: number;
  protected _dexterity: number;
  protected _energy: Energy;
  constructor(
    name: string,
    race: Race = new Elf('Elf', 10),
    archetype: Archetype = new Mage('Jaina'),
  ) {
    this.name = name;
    this._race = race;
    //  { 
    //   name: 'Elf',
    //   dexterity: 10,
    //   maxLifePoints: 99 };

    this._archetype = archetype;
    // {
    //   name: 'Mage',
    //   special: 0,
    //   cost: 0,
    // };

    this._maxLifePoints = this.maxLifePointsPerRace() / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = this.archetypeEnergy();
  }

  get archetype(): Archetype { return this._archetype; }
  get race(): Race { return this._race; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { 
    return { ...this._energy };
  }

  private maxLifePointsPerRace(): number {
    switch (this._race.name) {
      case 'Dwarf':
        return 80;        
      case 'Elf':
        return 99;        
      case 'Hafling':
        return 60;        
      case 'Orc':
        return 74;        
      default:
        return 60;
    }
  }

  private archetypeEnergy(): Energy {
    switch (this._archetype.name) {
      case 'Mage':
        return { type_: 'mana', amount: getRandomInt(1, 10) };
      case 'Necromanter':
        return { type_: 'mana', amount: getRandomInt(1, 10) };
      case 'Warrior':
        return { type_: 'stamina', amount: getRandomInt(1, 10) };
      case 'Ranger':
        return { type_: 'stamina', amount: getRandomInt(1, 10) };
      default:
        return { type_: 'mana', amount: getRandomInt(1, 10) };
    }
  }
  
  receiveDamage(attackPoints: number): number {
    if (attackPoints > this._defense) {
      this._lifePoints -= (attackPoints - this._defense);
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: SimpleFighter): void {
    const inimigo = enemy;
    inimigo.lifePoints -= this._strength;
  }
}
