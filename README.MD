# @p2k0/anti-debugger



提供了一种简单粗暴且有效的方法来防止调试器对你的 JavaScript 代码进行调试。如果你需要增强你的代码的安全性，那么可以考虑使用该类。



## 注意事项

- 只能作为一种基本的安全措施，并不能保证绝对的安全性。
- 在某些情况下，可能会发生某些防调试技术失效的情况。



## 安装

### npm

```bash
npm install @p2k0/anti-debugger -S
```



### yarn

```bash
yarn add @p2k0/anti-debugger -S
```



### pnpm

```bash
pnpm add @p2k0/anti-debugger -S
```



## 使用方法

在你的项目中导入 `@p2k0/anti-debugger`，然后创建一个实例，并将配置对象作为参数传递。配置对象包含三个可选属性，默认都为 `false`：

- `keyboard`（可选）：如果设置为 `true`，则禁用 `F12` 和 `Ctrl+Shift+I` 快捷键。
- `debugger`（可选）：如果设置为 `true`，则通过 `debugger;` 语句打开调试器。
- `console`（可选）：如果设置为 `true`，则禁用控制台输出。



## 示例

```javascript
import AntiDebugger from "@p2k0/anti-debugger";

const antiDebugger = new AntiDebugger({
  keyboard: true,
  debugger: true,
  console: true
});
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type="module">
      import AntiDebugger from "./anti-debugger/index.es.js";

      new AntiDebugger({
        keyboard: true,
        debugger: true,
        console: true
      });
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
<html lang="en">
  <meta charset="UTF-8">
  <title>Using @p2k0/anti-debugger with AMD</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
  <script>
    require.config({
      paths: {
        "@p2k0/anti-debugger": "path/to/@p2k0/anti-debugger"
      }
    });
  </script>
  <script>
    define(["@p2k0/anti-debugger"], function(AntiDebugger) {
       new AntiDebugger({
        keyboard: true,
        debugger: true,
        console: true
      });
    });
  </script>

</head>
<body></body>
</html>
```
