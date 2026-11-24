import path from "node:path"
import fs from "fs"
import type { Iporduct } from "../types/product";
import { json } from "node:stream/consumers";

const filePath = path.join(process.cwd(), "/src/database/db.json")
export const ProductService = () => {
    // console.log(process.cwd());
    // console.log(filePath)
    const result = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(result);
}

export const createProdut = (payLoad: Iporduct) => {
    fs.writeFileSync(filePath, JSON.stringify(payLoad));
}