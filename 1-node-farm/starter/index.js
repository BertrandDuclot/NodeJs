// Files
const fs = require("fs");
const http = require("http");

//* Synchronous way */

/*const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

// Write a file
const textOut = `This is what we know about the advocadoe : ${textIn}.\n Created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written");*/

//** Non-blocking, asynchronous */

/*fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR");

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("written");
      });
    });
  });
});
console.log("will read");*/

// Server
const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening");
});
