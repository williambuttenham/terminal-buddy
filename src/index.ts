/* eslint-disable no-unused-vars */
import { join as joinPath } from 'path';
import { readFile } from 'fs';

// eslint-disable-next-line no-shadow
enum Buddy {
  Banana = 'banana.ans',
  Default = 'default.txt',
  Parrot = 'green-parrot.txt',
  Fish = 'fish.ans',
  Skull = 'skull.ans',
}

async function say(string: string, buddy: Buddy | string = Buddy.Default) {
  let filename = joinPath('./src/buddies', Buddy.Default);

  if ((<any>Object).values(Buddy).includes(buddy.toString())) {
    filename = joinPath('./src/buddies', buddy);
  } else {
    filename = buddy;
  }

  return new Promise((resolve, reject) => {
    readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(`${data}\n${string}`);
    });
  });
}

export { Buddy, say };
