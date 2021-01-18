BEGIN TRANSACTION;

CREATE DATABASE DevChessPlayers;

CREATE TABLE leader_board (
id SERIAL PRIMARY KEY,
first_name varchar(40), 
last_name varchar (40), 
games_played int,
ranking int
);


COMMIT;
