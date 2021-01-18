const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")

//midleware
app.use(cors())
app.use(express.json());

app.listen(5000,()=> {
    console.log("server is started on port 5000")
});

//ROUTES//

//create a new player

app.post("/player", async (req,res) => {
    try {
        console.log(req.body);
        // const { firstName, lastName }
        // const newPlayer = await pool.query("INSERT INTO leader_board VALUES ($1)($2)"[firstName,lastName]);
        // res.json(newPlayer)
    } catch (err) {
        console.error(err.message);///not owrking at the moment..test with insomnia
    }
    
})