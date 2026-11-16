import { createServer, IncomingMessage, Server, ServerResponse } from "node:http";

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    // console.log("Request", req)
    // console.log("Res", res)
    // console.log(req.url);
    // console.log(req.method)
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "Application/json" });
        res.end("Welcome tho the Home Page")
    } else {
        res.writeHead(404, { "Content-Type": "Application/json" });
        res.end("Not Found url from server")
    }
})
server.listen(5000, () => {
    console.log("Server is running successfully! ")
})