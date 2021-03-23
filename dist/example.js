"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
/* eslint-disable no-console */
const path_1 = require("path");
// eslint-disable-next-line import/no-unresolved
const src_1 = require("./src");
src_1.say('yaaay')
    .then(console.log)
    .catch(console.error);
src_1.say('yaaay', src_1.Pal.Banana)
    .then(console.log)
    .catch(console.error);
src_1.say('yaaay', path_1.resolve('red-parrot.txt'))
    .then(console.log)
    .catch(console.error);
//# sourceMappingURL=example.js.map