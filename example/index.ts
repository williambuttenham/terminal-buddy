/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import say from '../src/index';

say('yaaay')
  .then(console.log)
  .catch(console.error);

say('yaaay', 'head')
  .then(console.log)
  .catch(console.error);

say('yaaay', 'green-parrot')
  .then(console.log)
  .catch(console.error);
