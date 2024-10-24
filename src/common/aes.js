const CryptoJS = require('crypto-js');  //引入AESjs
    
const key = CryptoJS.enc.Utf8.parse("Sixteen byte key");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('1234abcd4567efgh');   //十六位十六进制数作为密钥偏移量


//解密方法
function Decrypt(word) {
    let decrypt = CryptoJS.AES.decrypt(word, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr;
}

//加密方法
function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
}

export default {
    Decrypt ,
    Encrypt
}