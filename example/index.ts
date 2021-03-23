/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { resolve } from 'path';
// eslint-disable-next-line import/no-unresolved
import { Pal, say } from '../src';

say('yaaay')
  .then(console.log)
  .catch(console.error);

say('yaaay', Pal.Banana)
  .then(console.log)
  .catch(console.error);

say('yaaay', Pal.Fish)
  .then(console.log)
  .catch(console.error);

say('yaaay', Pal.Skull)
  .then(console.log)
  .catch(console.error);

say('yaaay', Pal.Parrot)
  .then(console.log)
  .catch(console.error);

say('yaaay', resolve('example/red-parrot.txt'))
  .then(console.log)
  .catch(console.error);
