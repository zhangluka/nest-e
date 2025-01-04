import os from "os";
import { pbkdf2, pbkdf2Sync } from "crypto";

// console.log("【log】:", os.version());
// console.log("【log】:", module.paths);

const begin = Date.now();
const key1 = pbkdf2Sync("bobby", "salt", 100000, 64, "sha512");
const key2 = pbkdf2Sync("bobby", "salt", 100000, 64, "sha512");
const key3 = pbkdf2Sync("bobby", "salt", 100000, 64, "sha512");
const key4 = pbkdf2Sync("bobby", "salt", 100000, 64, "sha512");
console.log("【log】:", Date.now() - begin);

const begin2 = Date.now();
for (let i = 0; i < 3; i++) {
  pbkdf2("bobby", "salt", 100000, 64, "sha512", () => {
    console.log("【log】:", Date.now() - begin2);
  });
}

function writeFile(
  file: string,
  content: string,
  callback: (error: any) => void
) {
  setTimeout(() => {
    try {
      console.log("【log】:", "%s 文件写入成功，内容是 %s", file, content);
      callback(null);
    } catch (error: any) {
      callback(error);
    }
  }, 2000);
}

writeFile("1.txt", "hello world", (error) => {
  error ? console.log("【log】:", error) : console.log("【log】:", "写入成功");
});

console.log("【log】:", "bobby with node");
