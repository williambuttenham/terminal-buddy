"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.say = exports.Pal = void 0;
/* eslint-disable no-unused-vars */
const path_1 = require("path");
const fs_1 = require("fs");
var Pal;
(function (Pal) {
    Pal["Banana"] = "banana.ans";
    Pal["Default"] = "default.txt";
    Pal["Parrot"] = "green-parrot.txt";
    Pal["Fish"] = "fish.ans";
    Pal["Skull"] = "skull.ans";
})(Pal || (Pal = {}));
exports.Pal = Pal;
function say(string, pal = Pal.Default) {
    return __awaiter(this, void 0, void 0, function* () {
        let filename = path_1.join('./src/pals', Pal.Default);
        if (Object.values(Pal).includes(pal.toString())) {
            filename = path_1.join('./src/pals', pal);
        }
        else {
            filename = pal;
        }
        return new Promise((resolve, reject) => {
            fs_1.readFile(filename, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(`${data}\n${string}`);
            });
        });
    });
}
exports.say = say;
//# sourceMappingURL=index.js.map