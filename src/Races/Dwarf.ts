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

// const dwarf1 = new Dwarf('jon', 80);
// const dwarf2 = new Dwarf('jon', 80);
// const dwarf3 = new Dwarf('jon', 80);
// console.log(dwarf1);
// console.log(dwarf2);
// console.log(dwarf3);
// console.log(Dwarf.createdRacesInstances());