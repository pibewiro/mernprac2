const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/user");
const exerciseRoutes = require("./routes/exercise")
const herokuConfig = require("./herokuConfig")
const dbConnect = require("./dbConfig")
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

//routes
app.use("/users", userRoutes)
app.use("/exercises", exerciseRoutes)

dbConnect();
herokuConfig();

app.listen(port, ()=>console.log("Connected to Port:", port));