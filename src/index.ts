import os from "os";
import { pbkdf2, pbkdf2Sync } from "crypto";
import path, { basename, extname, parse } from "path";
import { EventEmitter } from "events";
const { CustomEvent } = require("./customEvent");

const cEvent = new CustomEvent();

cEvent.on("success", (arg: string) => {
  console.log("【log】:", arg);
});

cEvent.customFunc("yes.jpg");

const event = new EventEmitter();

event.on("bb", (content) => {
  console.log("【log】:", `emit first time: ${content}`);
});

event.on("bb", (c) => {
  console.log("【log】:", `emit second tim: ${c}`);
});

const eventRes = event.emit("bb", "i am bobby");
console.log("【log】:", `eventRes: ${eventRes}`);

console.log("【log】:", "sync execute");
