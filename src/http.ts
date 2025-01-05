import { createReadStream, readFileSync } from "node:fs";
import { createServer } from "node:http";
import { pipeline } from "node:stream";
const service = createServer();

const testData = [
  {
    name: "bobby",
    age: 18,
  },
  {
    name: "bobby",
    age: 18,
  },
];

service.on("request", (req, res) => {
  console.log("【log】:", req.method);

  // res.writeHead(200, {
  //   "content-type": "text/plain; charset=utf-8",
  // });
  // res.write("<h1>hello this is bobby</h1>");

  // res.end(JSON.stringify({ name: "bobby", age: "18" }));

  // res.statusCode = 301;
  // res.setHeader("Location", "https://zhangluka.github.io/");

  // res.writeHead(200, {
  //   "content-type": "text/html; charset=utf-8",
  // });

  // pipeline(createReadStream("./index.html"), res, () => {});

  res.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
  });

  const vars = { name: "bobby" } as any;

  const template = readFileSync("./src/index.html", "utf-8");

  const content = template.replace(/\{\{(.*?)\}\}/gi, (match, ...args) => {
    return vars[args[0]];
  });
  res.end(content);
});

service.listen(3001, "localhost", () => {
  console.log("【log】:", "localhost:3001");
});
