import Energy from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype implements Energy {
  static instances = 0;
  readonly type_ = 'mana';
  readonly energyType = 'mana';
  readonly amount = 50;
  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    Mage.instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}