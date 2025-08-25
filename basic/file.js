const fs = require("fs");

//to create file
// fs.writeFileSync("./text.txt", "hello this is Ankit Kumar Rath")
// fs.writeFile("./text.txt", "hello ankit", (err) => {})

//to read file   

// const result = fs.readFileSync("./text.txt", "utf-8")
// console.log(result);

// fs.readFile("./text.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error" (err));

//     } else {
//         console.log(result);

//     }
// })

// fs.appendFileSync("./text.txt", `hey buddy\n`)
//copy
// fs.cpSync("./text.txt", "./abc.js")
//delete
// 
fs.unlinkSync("./abc.js")

//check state

//    console.log( fs.statSync("./text.txt"));