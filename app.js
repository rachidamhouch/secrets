import express from "express"
import bodyParser from "body-parser"
import homeRouter from "./routes/home.js"
import errorRouter from "./routes/404.js"

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use("/", homeRouter)




app.use("/", errorRouter)
app.listen(port, () => {
    console.log(`Server runing in ${port}`)
})