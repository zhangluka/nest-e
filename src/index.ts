import {
  createReadStream,
  createWriteStream,
  existsSync,
  readFile,
  readFileSync,
  writeFile,
  writeFileSync,
} from "node:fs";
import { createServer } from "node:http";
import path, { dirname } from "node:path";
import "./http";

console.log("【log】:", __dirname);

// 创建可读流，将数据以块的形式读取，每次读取一点放进缓存区
const readStream = createReadStream(path.join(__dirname, "test.txt"), {
  encoding: "utf-8",
});

const writeStream = createWriteStream("copyTest.txt");

readStream.on("data", (chunk) => {
  console.log("【log】:", chunk);

  writeStream.write(chunk);
});

for (let i = 0; i < 10; i++) {
  writeStream.write(`这是第${i}次写入\n`);
}

// 同步读文件
const content = readFileSync(path.join(__dirname, "test.txt"), "utf-8");

console.log("【log】:", content);

// 同步写文件
writeFileSync("writeSync.txt", "这是同步写入的内容");

// 异步读写

readFile(path.join(__dirname, "test.txt"), "utf-8", (err, data) => {
  if (err) {
    console.log("【log】:", err);
  } else {
    console.log("【log】:", data);
    writeFile("writeAsync.txt", `${data} testing writeFile`, (err) => {
      if (err) {
        console.log("【log】:", err);
      } else {
        console.log("【log】:", "写入成功");
      }
    });
  }
});

console.log("【log】:", existsSync("./src/test.txt"));
