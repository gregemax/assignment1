const crypto = require("crypto")
const keccak = require("keccak")


const hash = "123"

const type = "sha256"

const test = ()=>{
 if (type=="sha256") {
    console.log(crypto.createHash(type).update(hash).digest("hex"))
 }
 else{
const keccak25=keccak("keccak256").update(hash).digest("hex")
console.log(keccak25) 
 }
}

test()