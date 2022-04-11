import Archetype from './Archetype';
import Energy from './Energy';
import Fighter from './Fighter';
import Race from './Races';

export default class Character implements Fighter {
  private readonly race: Race = { 
    name: 'Elf',
    dexterity: 10,
    maxLifePoints: 49 };

  private readonly archetype: Archetype = {
    name: 'Mage',
    special: 0,
    cost: 0,
  };
  
  private readonly maxLifePoints: number;
  private readonly lifePoints: number;
  private readonly strength: number;
  private readonly defense: number;
  private readonly dexterity: number;
  private readonly energy: Energy;
  constructor(name: string) {
    this.maxLifePoints = this.maxLifePointsPerRace();
    this.lifePoints = this.maxLifePoints;
    this.strength = Math.floor(Math.random() * 10);
    this.defense = Math.floor(Math.random() * 10);
    this.dexterity = this.race.dexterity;
    this.energy = this.archetypeEnergy();
  }

  private maxLifePointsPerRace(): number {
    switch (this.race.name) {
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
    const generateEnergy = Math.floor(Math.random() * 10);
    switch (this.archetype.name) {
      case 'Mage':
        return { type_: 'mana', amount: generateEnergy };
      case 'Necromanter':
        return { type_: 'mana', amount: generateEnergy };
      case 'Warrior':
        return { type_: 'stamina', amount: generateEnergy };
      case 'Ranger':
        return { type_: 'stamina', amount: generateEnergy };
      default:
        return { type_: 'mana', amount: generateEnergy };
    }
  }
}