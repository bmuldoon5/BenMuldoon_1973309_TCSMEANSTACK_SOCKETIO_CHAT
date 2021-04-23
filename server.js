let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html");

})

io.on("connection",(socket) => {

    socket.on("chat",(msg) => {
        console.log("its working");
        console.log(msg);

        console.log("Welcome "+ msg.sendName);
        console.log("Your Message: "+msg.sendMsg);
    })
})

http.listen(3000, ()=>console.log('server running on port number 3000'));