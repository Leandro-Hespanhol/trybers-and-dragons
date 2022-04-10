import { Ranger } from '../../src/Archetype';

const result = () => {
  const r = [];
  const r1 = new Ranger('');
  r.push(Ranger.createdArchetypeInstances());
  const r2 = new Ranger('');
  r.push(Ranger.createdArchetypeInstances());
  const r3 = new Ranger('');
  r.push(Ranger.createdArchetypeInstances());
  return r;
};
