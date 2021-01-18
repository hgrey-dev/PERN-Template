const express = require("express");
const app = express();
const cors = require("cors")

//midleware
app.use(cors())
app.use(express.json());

app.listen(5000,()=> {
    console.log("server is started on port 5000")
});