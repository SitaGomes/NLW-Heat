import "dotenv/config"
import express from "express";
import {router} from "./routes"
import http from "http";
import {Server} from "socket.io"
import cors from "cors";


const app = express();
app.use(cors())
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket => {console.log(`User connected ${socket.id}`)})

app.use(express.json())

app.use(router);

app.get("/github", (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get("/singin/callback", (req, res) => {
    const { code } = req.query;

    return res.json(code)
})

const PORT = process.env.PORT || 3333
httpServer.listen(PORT, () => console.log(`Server is online on port ${PORT}`));

export {io}