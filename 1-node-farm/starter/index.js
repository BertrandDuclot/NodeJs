// Files
const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

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

// Server - API call

// Top level code
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

// Callback
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the overview");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1> not found </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening");
});
