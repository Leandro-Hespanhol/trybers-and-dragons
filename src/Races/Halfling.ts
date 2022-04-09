import Race from './Race';

export default class Halfling extends Race {
  protected _maxlifePoints: number;
  static instances = 0;
  constructor(name: string, dexterity: number, maxLifePoints = 60) {
    super(name, dexterity);
    this._maxlifePoints = maxLifePoints;
    Halfling.instances += 1;
  }

  static createdRacesInstances = () => Halfling.instances;

  get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}