import {Buddy, say} from '../src';

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
