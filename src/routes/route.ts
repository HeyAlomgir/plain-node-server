import type { IncomingMessage, ServerResponse } from "node:http";
import productController from "../controllers/product.controller";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Welcome to the Home Page" }))
    } else if (url?.startsWith("/products") && method === "GET") {
        productController(req, res);
    } else {
        res.writeHead(404, { "Content-Type": "Application/json" });
        res.end(JSON.stringify({ message: "Not Found url from server" }))
    }
}

export default routeHandler;