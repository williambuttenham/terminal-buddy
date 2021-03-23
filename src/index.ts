/* eslint-disable no-unused-vars */
import { join } from 'path';
import { readFile } from 'fs';

enum Pal {
  Banana = 'banana.ans',
  Default = 'default.txt',
  Parrot = 'green-parrot.txt',
  Fish = 'fish.ans',
  Skull = 'skull.ans',
}

async function say(string: string, pal: Pal | string = Pal.Default) {
  let filename = join('./src/pals', Pal.Default);

  if ((<any>Object).values(Pal).includes(pal.toString())) {
    filename = join('./src/pals', pal);
  } else {
    filename = pal;
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

export { Pal, say };
