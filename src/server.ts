import { createServer, IncomingMessage } from "node:http";

const server = createServer((req: IncomingMessage, res) => {
    // console.log("Request", req)
    console.log("Res", res)
})
server.listen(5000, () => {
    console.log("Server is running successfully! ")
})