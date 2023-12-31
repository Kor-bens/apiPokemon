const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const {Sequelize} = require('sequelize');
const cors = require("cors");
const bodyParser = require("body-parser");
const { success, getUniqueId } = require("./helper.js");
let pokemons = require("./mock-pokemon");
const fs = require("fs");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;


app
.use(morgan("dev")) // Use "dev" format for logging
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(express.static("public")) // Assuming you have a public folder for static files
.use(favicon(__dirname + "/favicon.ico"))
.use(cors())
app.use(express.static(__dirname));


// app.get("/", (req, res) => res.send("hello, express 38!"));
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });



app.get("/api/pokemons", (req, res) => {
  const message = "La liste des pokémons a bien été récupérée !";
  res.json(success(message, pokemons));
});

app.get("/api/pokemons/:name", (req, res) => {
  const namePokemon = req.params.name;
  const pokemon = pokemons.find((pokemon) => pokemon.name === namePokemon)
  const message = "un pokémon a été attrapé";
  res.send(success(message, pokemon));
})

app.get("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  const message = "Un pokémon a bien été trouvé !";
  res.json(success(message, pokemon));
});

app.post("/api/pokemons", (req, res) => {
  const id = getUniqueId(pokemons);
  const pokemonCreated = { ...req.body, ...{ id: id, created: new Date() } };
  pokemons.push(pokemonCreated);
  const message = `Le pokémon ${pokemonCreated.name} a bien été créé.`;
  res.json({ message: message, pokemonCreated: pokemonCreated });
  // Écrire les données mises à jour dans le fichier mock-pokemon.js
  const fileContent = `const pokemons = ${JSON.stringify(pokemons, null, 2)};\n\nmodule.exports = pokemons;`;
  fs.writeFileSync("mock-pokemon.js", fileContent);
});

app.put("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemonUpdated = { ...req.body, id: id };
  pokemons = pokemons.map((pokemon) => {
    return pokemon.id === id ? pokemonUpdated : pokemon;
  });
  const message = `Le pokémon ${pokemonUpdated.name} a bien été modifié.`;
  res.json(success(message, pokemonUpdated));

  const fileContent = `const pokemons = ${JSON.stringify(pokemons, null, 2)};\n\nmodule.exports = pokemons;`;
  fs.writeFileSync("mock-pokemon.js", fileContent);
});

app.delete("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemonDeleted = pokemons.find((pokemon) => pokemon.id === id);
  pokemons = pokemons.filter((pokemon) => pokemon.id !== id);
  const message = `Le pokémon ${pokemonDeleted.name} a bien été supprimé.`;
  res.json(success(message, pokemonDeleted));

  const fileContent = `const pokemons = ${JSON.stringify(pokemons, null, 2)};\n\nmodule.exports = pokemons;`;
  fs.writeFileSync("mock-pokemon.js", fileContent);
});

app.listen(port, () =>
  console.log(
    `Notre application Node est démarrée sur : http://localhost:${port}`
  )
);