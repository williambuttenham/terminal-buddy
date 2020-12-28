import say from '../src';

say('yaaay')
	.then(console.log)
	.catch(console.error);

say('yaaay', 'head')
	.then(console.log)
	.catch(console.error);

say('yaaay', 'green-parrot')
	.then(console.log)
	.catch(console.error);
