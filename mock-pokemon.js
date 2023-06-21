const pokemons = [
  {
    "id": 1,
    "name": "Bulbizzare",
    "hp": 28,
    "cp": 6,
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    "types": [
      "Plante"
    ],
    "created": "2023-06-16T17:02:11.274Z"
  },
  {
    "id": 2,
    "name": "Salamèche",
    "hp": 28,
    "cp": 6,
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    "types": [
      "Feu"
    ],
    "created": "2023-06-16T17:02:11.274Z"
  },
  {
    "id": 3,
    "name": "Carapuce",
    "hp": 21,
    "cp": 4,
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    "types": [
      "Eau"
    ],
    "created": "2023-06-16T17:02:11.274Z"
  },
  {
    "id": 4,
    "name": "Aspicot",
    "hp": 16,
    "cp": 2,
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
    "types": [
      "Insecte",
      "Poison"
    ],
    "created": "2023-06-16T17:02:11.274Z"
  },
  {
    "id": 8,
    "name": "Abo",
    "hp": 16,
    "cp": 4,
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
    "types": [
      "Poison"
    ],
    "created": "2023-06-16T17:02:11.274Z"
  },
  {
    "id": 9,
    "name": "Pikachu",
    "hp": 21,
    "cp": 7,
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    "types": [
      "Electrik"
    ],
    "created": "2023-06-16T17:02:11.274Z"
  },
  {
    "id": 10,
    "name": "Sabelette",
    "hp": 19,
    "cp": 3,
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
    "types": [
      "Normal"
    ],
    "created": "2023-06-16T17:02:11.274Z"
  },
  {
    "id": 11,
    "name": "Mélofée",
    "hp": 25,
    "cp": 5,
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
    "types": [
      "Fée"
    ],
    "created": "2023-06-16T17:02:11.274Z"
  },
  {
    "id": 12,
    "name": "Goupix",
    "hp": 17,
    "cp": 8,
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
    "types": [
      "Feu"
    ],
    "created": "2023-06-16T17:02:11.274Z"
  },
  {
    "name": "poisson",
    "types": [
      "eau"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "hp": 55,
    "cp": 5555,
    "id": 20,
    "created": "2023-06-16T17:51:21.642Z"
  },
  {
    "name": "egregergerger",
    "types": [
      "aefefzegzegzeg"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    "hp": 5,
    "cp": 555,
    "id": 21,
    "created": "2023-06-19T07:25:32.961Z"
  },
  {
    "name": "olivia",
    "types": [
      "antillais"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/521.png",
    "hp": 100,
    "cp": 100,
    "id": 23,
    "created": "2023-06-19T08:36:37.684Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/521.png",
    "hp": "5",
    "cp": "8",
    "id": 24,
    "created": "2023-06-19T12:40:29.061Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    "hp": "5",
    "cp": "5",
    "id": 25,
    "created": "2023-06-19T12:40:41.620Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
    "hp": "5",
    "cp": "2",
    "id": 26,
    "created": "2023-06-19T12:43:23.135Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "hp": "5",
    "cp": "8",
    "id": 27,
    "created": "2023-06-19T12:48:36.630Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    "hp": "5",
    "cp": "2",
    "id": 29,
    "created": "2023-06-19T12:52:08.819Z"
  },
  {
    "name": "zfefezf",
    "types": [
      "zefezfezfze"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    "hp": 5,
    "cp": 5,
    "id": 32,
    "created": "2023-06-19T13:58:46.927Z"
  },
  {
    "name": "tgterg",
    "types": [
      "ergre"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    "hp": "ergre",
    "cp": "ergerge",
    "id": 33,
    "created": "2023-06-19T13:59:17.571Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    "hp": "8",
    "cp": "8",
    "id": 34,
    "created": "2023-06-19T14:35:12.913Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    "hp": "7",
    "cp": "2",
    "id": 35,
    "created": "2023-06-19T14:35:28.692Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "hp": "5",
    "cp": "9",
    "id": 36,
    "created": "2023-06-19T14:44:12.014Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png",
    "hp": "r",
    "cp": "e",
    "id": 37,
    "created": "2023-06-19T14:46:15.997Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "eau"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "hp": "8",
    "cp": "5",
    "id": 38,
    "created": "2023-06-20T06:46:12.619Z"
  },
  {
    "name": "zefezfez",
    "types": [
      "zefezf"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png",
    "hp": "ff",
    "cp": "fff",
    "id": 41,
    "created": "2023-06-20T06:56:11.989Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "aze"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "hp": "5",
    "cp": "5",
    "id": 42,
    "created": "2023-06-20T06:57:09.861Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "eau"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    "hp": "5",
    "cp": "5",
    "id": 50,
    "created": "2023-06-21T07:41:10.146Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "EAU"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    "hp": 5,
    "cp": 5,
    "id": 51,
    "created": "2023-06-21T07:54:36.431Z"
  },
  {
    "name": "dazda",
    "types": [
      "feu"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png",
    "hp": "5",
    "cp": "5",
    "id": 52,
    "created": "2023-06-21T08:13:11.050Z"
  },
  {
    "name": "Tortosa",
    "types": [
      "psy"
    ],
    "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "hp": "5",
    "cp": "2",
    "id": 53,
    "created": "2023-06-21T11:14:15.651Z"
  }
];

module.exports = pokemons;