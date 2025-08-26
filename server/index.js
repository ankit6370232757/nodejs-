const http = require("http")

const server = http.createServer((req, res) => {
    console.log("New request for server");
    res.end("Hello This is ankit");
});
server.listen(3300, () => console.log("server"));