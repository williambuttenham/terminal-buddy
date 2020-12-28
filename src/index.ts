import {join as joinPath} from 'path'
import {readFile} from 'fs'

import boxen = require('boxen');

function say(string: string, color = 'default-parrot') {
  const filename = color + '.txt';
  return new Promise((resolve, reject) => {
    readFile(joinPath('./src/buddies', filename), 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      }

      resolve(boxen(string, {borderStyle: boxen.BorderStyle.Classic}) + data)
    })
  })
}

export default say
