const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config();
const userRoutes = require("./routes/user");
const exerciseRoutes = require("./routes/exercise")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

//routes
app.use("/users", userRoutes)
app.use("/exercises", exerciseRoutes)


//Database
const uri = process.env.DB_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>console.log("Connected to Database"))

app.listen(port, ()=>console.log("Connected to Port:", port));