# basic of node

## 关于模块

不同于`javascript`中的`ES Module`
`node.js` 使用 `common.js` 模块管理

- 每个文件都是一个模块
- 使用 `module.exports` 导出模块

  - `common.js` 中使用 `module.exports` 和 `exports` 都可以导出模块
    但是由于 `exports` 是 `module.exports` 的引用，所以如果使用 `exports` 直接赋值，有可能会被覆盖

- 使用 `require` 导入模块，导入时可以通过解构获取具体 api
