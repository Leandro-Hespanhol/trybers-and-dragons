import Race from './Race';

export default class Orc extends Race {
  protected _maxlifePoints: number;
  static instances = 0;
  constructor(name: string, dexterity: number, maxLifePoints = 74) {
    super(name, dexterity);
    this._maxlifePoints = maxLifePoints;
    Orc.instances += 1;
  }

  static createdRacesInstances = () => Orc.instances;

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}