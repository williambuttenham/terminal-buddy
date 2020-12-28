import {join as joinPath} from 'path'
import {readFile} from 'fs'

function say(string: string, color = 'default-parrot') {
  const filename = color + '.txt';
  return new Promise((resolve, reject) => {
    readFile(joinPath('./src/buddies', filename), 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      }

      resolve(data + '\n' + string)
    })
  })
}

export default say
