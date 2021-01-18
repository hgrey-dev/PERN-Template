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
        // console.log(req.body);
        const { firstName, lastName} = req.body
        const newPlayer = await pool.query("INSERT INTO leader_board (first_name,last_name) VALUES ($1, $2) RETURNING *",[firstName,lastName]);
        res.json(newPlayer.rows[0])
    } catch (err) {
        console.error(err.message);///not owrking at the moment..test with insomnia
    }  
    
})

//get all players//
app.get("/players", async (req,res) =>{
    try {
        const allPlayers = await pool.query("SELECT * FROM leader_board")
    } catch (err) {
        console.error(err.message)
    }
    
})
//get a player//

//update a player//

//delete a player//