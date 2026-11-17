import type { IncomingMessage, ServerResponse } from "node:http";
import { ProductService } from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    console.log(url);

    if (url === "/products" && method === "GET") {

        const products = ProductService();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Produts retrived successfully!", data: products }));

    }
}
export default productController;