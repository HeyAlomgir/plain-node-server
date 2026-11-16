import { createServer, IncomingMessage, Server, ServerResponse } from "node:http";
import { json } from "node:stream/consumers";

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    // console.log("Request", req)
    // console.log("Res", res)
    // console.log(req.url);
    // console.log(req.method)
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "Application/json" });
        res.end(JSON.stringify({ message: "Welcome to the Home Page" }))
    } else if (req.url === "/products" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "Application/json" });
        res.end(JSON.stringify({ message: "Welcome tho the Products Page" }))
    } else {
        res.writeHead(404, { "Content-Type": "Application/json" });
        res.end(JSON.stringify({ message: "Not Found url from server" }))
    }
})
server.listen(5000, () => {
    console.log("Server is running successfully! ")
})