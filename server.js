const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/user");
const exerciseRoutes = require("./routes/exercise")
const dbConnect = require("./dbConfig")
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
require("dotenv").config();


app.use(cors());
app.use(express.json())

//routes
app.use("/users", userRoutes)
app.use("/exercises", exerciseRoutes)

dbConnect();

if(process.env.NODE_ENV === "production")
{
    app.use(express.static("frontend/build"))

    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}

app.listen(port, ()=>console.log("Connected to Port:", port));