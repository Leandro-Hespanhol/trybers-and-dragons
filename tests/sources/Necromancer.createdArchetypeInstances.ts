import { Necromancer } from '../../src/Archetype';

const result = () => {
  const r = [];
  const n1 = new Necromancer('');
  r.push(Necromancer.createdArchetypeInstances());
  const n2 = new Necromancer('');
  r.push(Necromancer.createdArchetypeInstances());
  const n3 = new Necromancer('');
  r.push(Necromancer.createdArchetypeInstances());
  return r;
};
