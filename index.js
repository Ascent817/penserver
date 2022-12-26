import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log(socket.id);
    
    socket.on("disconnect", (reason) => {
        console.log(`reason: ${reason}`);
    });
});

io.listen(3000);
