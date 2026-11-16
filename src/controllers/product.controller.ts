import type { IncomingMessage, ServerResponse } from "node:http";
import { ProductService } from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url === "/products" && method === "GET") {
        const products = [
            { id: 1, name: "Laptop", price: 65000 },
            { id: 2, name: "Smartphone", price: 25000 },
            { id: 3, name: "Headphone", price: 1500 },
            { id: 4, name: "Keyboard", price: 1200 },
            { id: 5, name: "Mouse", price: 800 },
            { id: 6, name: "Monitor", price: 18000 },
            { id: 7, name: "Smart Watch", price: 4500 },
            { id: 8, name: "Tablet", price: 22000 },
            { id: 9, name: "Power Bank", price: 1800 },
            { id: 10, name: "Speaker", price: 3000 }
        ];
        ProductService();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Produts retrived successfully!", data: products }));

    }
}
export default productController;