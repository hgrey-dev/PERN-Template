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
        res.json(allPlayers.rows)
    } catch (err) {
        console.error(err.message)
    }
    
})
//get a player//
app.get("/player/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const player = await pool.query ("SELECT * FROM leader_board WHERE id = $1",[id])
        res.json(player.rows)
    } catch (error) {
        console.error(err.message)
    }
})
//update a player//

app.put("/player/:id", async (req,res) => {
    try {
        const {  id } = req.params;
        const { gamesPlayed } = req.body;
        const updatePlayer = await pool.query("UPDATE leader_board SET games_played = $1 WHERE id = $2",[gamesPlayed, id])
        res.json("Player updated!")
    } catch (error) {
        
    }
})
//delete a player//

app.delete("/player/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const deletePlayer = await pool.query("DELETE FROM leader_board WHERE id = $1",[id])
        res.json("player deleted")
    } catch (err) {
        console.error(err.message) 
    }
})