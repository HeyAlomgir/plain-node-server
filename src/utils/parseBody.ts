import type { IncomingMessage } from "node:http";

export const bodyParser = (req: IncomingMessage): Promise<any> => {
    let body = "";
    return new Promise((resolved, reject) => {
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            try {
                resolved(body);
            } catch (error) {
                reject(error);
            }
        })
    })
}