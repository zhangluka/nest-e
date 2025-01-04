# basic of node

## 关于模块

不同于`javascript`中的`ES Module`
`node.js` 使用 `common.js` 模块管理

- 每个文件都是一个模块
- 使用 `module.exports` 导出模块

  - `common.js` 中使用 `module.exports` 和 `exports` 都可以导出模块
    但是由于 `exports` 是 `module.exports` 的引用，所以如果使用 `exports` 直接赋值，有可能会被覆盖

- 使用 `require` 导入模块，导入时可以通过解构获取具体 api

## 关于事件循环

`Node.js` 本身是单线程，为了处理异步非阻塞问题，使用 `Libuv` 来解决

`Libuv` 通过线程池和事件循环来处理异步任务

`Node.js` 主线程维护一个事件队列，收到请求时，放入事件队列，
当主线程空闲时，开始循环事件队列，根据不同任务使用不同处理方式，

- 如果是 I/O 操作，交给 `Libuv` 的线程池处理，处理完成后，将回调函数放入事件队列
- 如果是非 I/O 操作，通过主线程执行，然后回调返回上层调用

## PATH 模块

> `path` 为内置模块 可通过 `import path from 'path'` 引入使用

### `__dirname`

> 获取当前所在目录

### `__filename`

> 获取当前路径

### `basename`

> 获取文件名

### `dirname`

> 获取文件所在目录

### `extname`

> 获取文件扩展名

### `parse`

> 获取文件详细信息

### `resolve`

> 获取绝对路径

### `join`

> 拼接路径

## Event 模块

> `Event` 为内置模块 可通过 `import { EventEmitter } from 'events'` 引入使用
> 通过 **发布订阅模式** 实现 Event 事件

> node 中的事件对象都是 `events.EventEmitter` 对象的实例，
> 且多数模块都继承了事件，例如 `http`、`fs`、`stream` 模块

### 常用方法

- `on` 订阅事件
- `once` 订阅一次事件
- `emit` 触发事件
- `removeListener` 移除事件监听
- `removeAllListeners` 移除所有事件监听

### 常用事件
