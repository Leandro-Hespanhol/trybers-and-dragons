export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  // get name():string { return this._name; }
  // get dexterity():number { return this._dexterity; }
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}