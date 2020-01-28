

module.exports = function()
{
    const express = require("express")
const app = express();

    if(process.env.NODE_ENV === "production")
    {
        app.use(express.static("frontend/build"))

        app.get("*", (req,res)=>{
            res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
        })
    }
}