### 项目初始化

1. **安装依赖：**

   执行以下命令安装项目依赖：

   ```bash
   npm install
   ```

### 运行应用

2. **运行应用：**

   使用以下命令启动应用：

   ```bash
   node ./index.js
   ```

   这将执行你的 `index.js` 文件。

### 修改生成钱包地址显示的字符串

3. **修改函数：**

   打开 `index.js` 文件，在相应的位置修改 `generateWalletWithEnding` 函数，使其生成的钱包地址后面显示你想要的字符串。例如：

   ```javascript
   // 修改函数，生成钱包地址后面显示的字符串
   generateWalletWithEnding('88888888');
   ```

   将 `'88888888'` 替换为你希望显示的字符串。

### 运行应用以查看更改

4. **再次运行应用：**

   使用以下命令再次启动应用：

   ```bash
   node ./index.js
   ```

   这将应用你对 `generateWalletWithEnding` 函数的修改。
