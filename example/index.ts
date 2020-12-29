/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { resolve } from 'path';
// eslint-disable-next-line import/no-unresolved
import { Buddy, say } from '../src';

say('yaaay')
  .then(console.log)
  .catch(console.error);

say('yaaay', Buddy.Banana)
  .then(console.log)
  .catch(console.error);

say('yaaay', Buddy.Fish)
  .then(console.log)
  .catch(console.error);

say('yaaay', Buddy.Skull)
  .then(console.log)
  .catch(console.error);

say('yaaay', Buddy.Parrot)
  .then(console.log)
  .catch(console.error);

say('yaaay', resolve('example/red-parrot.txt'))
  .then(console.log)
  .catch(console.error);
