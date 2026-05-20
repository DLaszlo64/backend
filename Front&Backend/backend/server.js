import dotenv from "dotenv"
dotenv.config()
import express from "express"

let app = express()

app.get("/", (req, res) =>{
    return res.send("Müködik a szerver.")
})

app.listen(8080, () =>{
    console.log("Listening on: \nhttp://localhost:8080/")
})