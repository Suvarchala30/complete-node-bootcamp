const fs= require('fs')

//Blocking or synchronous way
const fileIn =fs.readFileSync("./txt/input.txt","utf-8")
console.log(fileIn)

const fileOut = `This is all I know about avocados: ${fileIn}. \nCreated on ${Date.now()}`
fs.writeFileSync("./txt/output.txt",fileOut)
console.log("File written")

//Non-blocking or asynchronous way
fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
    console.log(data)
})
console.log("will read file")


//execute by typing node "filename" in the terminal