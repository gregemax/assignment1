const crypto = require("crypto")
const keccak = require("keccak");
const { exit } = require("process");
 var prompt = require('prompt')
const hash = "123"
prompt.start();




const test = (cryptoo,keccakk)=>{
   if (cryptoo) {
      console.log(crypto.createHash("sha256").update(cryptoo).digest("hex"))
   }
   if(keccakk){
      const keccak25=keccak("keccak256").update(keccakk).digest("hex")
      console.log(keccak25) 
   }
   
}



prompt.get(['sha256', 'keccak256'], function (err, result) {
   console.log('Command-line input received:');
   console.log('  username: ' + result.sha256);
   console.log('  email: ' + result.keccak256);
   test(result.sha256,result.keccak256)
   exit()
  });
