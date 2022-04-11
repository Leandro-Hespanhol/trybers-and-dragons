import Race from './Race';

export default class Dwarf extends Race {
  protected _maxlifePoints: number;
  static instances = 0;
  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 80,
  ) {
    super(name, dexterity);
    this._maxlifePoints = maxLifePoints;
    Dwarf.instances += 1;
  }

  static createdRacesInstances = () => Dwarf.instances;

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}
