import { join as joinPath } from 'path';
import { readFile } from 'fs';

enum Buddy {
  Banana = "banana.ans",
  Default = "default.txt",
  Parrot = "green-parrot.txt",
  Fish = "fish.ans",
  Skull = "skull.ans",
}

async function say(string: string, color: Buddy = Buddy.Default) {
	const filename = color;
	return new Promise((resolve, reject) => {
		readFile(joinPath('./src/buddies', filename), 'utf-8', (err, data) => {
			if (err) {
				reject(err);
			}

      resolve(`${data}\n${string}`);
    });
  });
}

export {Buddy, say};
