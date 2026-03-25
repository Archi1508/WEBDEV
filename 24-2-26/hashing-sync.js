const { pbkdf2Sync} = require("node:crypto")
const startTime =performance.now();
new hash= pbkdf2Sync("abcd124","my-secret-salt-124" ,1000*2000,26, "sha512" ,(err,hash)=>{
    
})