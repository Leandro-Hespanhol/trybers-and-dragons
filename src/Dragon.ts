import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePoints = 999;
  protected _strength = 65;

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
}