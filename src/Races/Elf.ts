import Race from './Race';

export default class Elf extends Race {
  protected _maxlifePoints: number;
  static instances = 0;
  constructor(name: string, dexterity: number, maxLifePoints = 99) {
    super(name, dexterity);
    this._maxlifePoints = maxLifePoints;
    Elf.instances += 1;
  }

  static createdRacesInstances = () => Elf.instances;

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}
