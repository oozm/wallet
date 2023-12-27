const crypto = require('crypto');
const Wallet = require('ethereumjs-wallet');
const fs = require('fs');

function generateWalletAddress() {
  // 生成随机的私钥
  const privateKey = crypto.randomBytes(32);

  // 使用私钥创建钱包实例
  const wallet = Wallet.default.fromPrivateKey(privateKey);

  // 获取钱包地址
  const address = wallet.getAddressString();
  // 获取私钥
  const privateKeyHex = wallet.getPrivateKey().toString('hex');

  return { address: address, privateKey: privateKeyHex };
}
console.log('执行中...');

function generateWalletWithEnding(ending) {
  let address = '';
  do {
    address = generateWalletAddress();
  } while (!address.address.endsWith(ending));
  console.log('钱包地址:', address);
  writeFile(address);
  return address;
}
function writeFile(content) {
  // 读取文件内容
  fs.readFile('./wallet.json', 'utf8', (err, data) => {
    if (err) {
      console.error('读取文件时发生错误:', err);
    } else {
      try {
        // 将文件内容解析为 JSON
        const existingObj = JSON.parse(data);
        existingObj[content.address] = content.privateKey;

        // 将更新后的数组写回文件
        fs.writeFile('./wallet.json', JSON.stringify(existingObj), (err) => {
          if (err) {
            console.error('写入文件时发生错误:', err);
          } else {
            console.log('文件更新成功！');
          }
        });
      } catch (parseError) {
        console.error('解析 JSON 时发生错误:', parseError);
      }
    }
  });
}
generateWalletWithEnding('88888888');
