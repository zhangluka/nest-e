import { EventEmitter } from "events";

class CustomEvent extends EventEmitter {
  constructor() {
    super();
  }
  customFunc(file: string) {
    this.emit("success", `${file}-file upload success`);
  }
}

module.exports = {
  CustomEvent,
};
