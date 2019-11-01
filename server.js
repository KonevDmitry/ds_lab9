var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")


var app = express()
app.use(express.static(__dirname))


var conString = "mongodb://admin:admin@localhost/?replicaSet=rs0"
app.listen(3020,()=>{
 console.log("Well done, now I am listening...")
})

var Chats = mongoose.model("Chats", {
    name: String,
    chat: String
})
mongoose.connect(conString, (err) => {
    console.log("Database connection", err)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/chats", async (req, res) => {
    try {
        var chat = new Chats(req.body)
        await chat.save()
        res.sendStatus(200)
    } catch (error) {
        console.error("Error occured during execution",error)
	res.sendStatus(500)
    }
})

app.get("/chats", (req, res) => {
    Chats.find({}, (error, chats) => {
        res.send(chats)
    })
})
