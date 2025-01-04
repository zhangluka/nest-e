import os from "os";
import { pbkdf2, pbkdf2Sync } from "crypto";
import path, { basename, extname, parse } from "path";

// console.log('【log】:',path);
console.log("【log】:", __filename);

console.log("【log】:", __dirname);

console.log("【log】:", basename(__filename));

console.log("【log】:", extname(__filename));

console.log("【log】:", parse(__filename));

console.log("【log】:", "bobby with node");
