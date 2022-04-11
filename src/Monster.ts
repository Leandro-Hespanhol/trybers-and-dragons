import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints = 85;
  protected _strength = 63;
  constructor() {
    this._lifePoints = this.lifePoints;
    this._strength = this.strength;
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      this._lifePoints -= (attackPoints - this._lifePoints);
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }
}