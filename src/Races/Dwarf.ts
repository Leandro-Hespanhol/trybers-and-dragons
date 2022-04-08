import Race from './Race';

export default class Dwarf extends Race {
  protected _maxlifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxlifePoints = 80;
  }

  get maxLifePoints(): number {
    this._maxlifePoints = 80;
    return this._maxlifePoints;
  }
}