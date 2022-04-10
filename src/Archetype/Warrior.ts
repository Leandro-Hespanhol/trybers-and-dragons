import Energy from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype implements Energy {
  static instances = 0;
  readonly type_ = 'stamina';
  readonly energyType = 'stamina';
  readonly amount = 50;
  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    Warrior.instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}