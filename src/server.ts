import { createServer } from "node:http"
const server = createServer((req, res)=>{
    console.log(req)
})

server.listen(3000, ()=>{
    console.log("Server is running successfully! ")
})