const buffer = Buffer.from("i am bobby");

console.log("【log】:", buffer);

console.log("【log】:", buffer.toJSON());

console.log("【log】:", buffer.toString());

buffer[0] = 72;

console.log("【log】:", buffer.toString("utf-8"));

const buffer2 = Buffer.alloc(5);

buffer2.write("booooby");

console.log("【log】:", buffer2.toString());
