// const searchBlock = document.createElement("div");
//         const searchBar = document.createElement("input");
//         const searchButton = document.createElement('button');
        
//         searchBlock.id="search-block";
//         searchBar.id ="search-bar";
//         searchBar.type ="search";
//         searchBar.name = "searchBar";
//         searchButton.id="search-button";
//         searchButton.textContent = "Rechercher"; 
        
    function displayPokemon() {
  // history.pushState(null, "", "/pokemons");
  pokedexContainer.innerHTML = "";
  fetch("http://localhost:3000/api/pokemons")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur HTTP " + response.status);
      }
      return response.json();
    })
    .then((dataPokemons) => {
      pokemons = dataPokemons.data;
     pokemons.forEach((pokemon) => {
        const pokedexContainer = document.querySelector("#pokedex-container");

        const pokemonContainer = document.createElement('div');
        const pokemonBlock = document.createElement("div");
        const namePokemon = document.createElement("h2");
        const picturePokemon = document.createElement("img");
        const typePokemon = document.createElement("p");
        const hpPokemon = document.createElement("p");
        const cpPokemon = document.createElement("p");
        const buttonBlock = document.createElement("div");
        const removeButton = document.createElement('input');
        const putButton = document.createElement('input');

        pokemonContainer.id="pokemon-container";
        pokemonBlock.classList.add("pokemon-block");
        namePokemon.classList.add("name-pokemon");
        picturePokemon.classList.add("picture-pokemon");
        typePokemon.classList.add("type-pokemon");
        hpPokemon.id = "hp-pokemon";
        cpPokemon.id = "cp-pokemon";
        buttonBlock.classList.add("button-block");
        removeButton.classList.add("remove-button");
        removeButton.type ="button";
        removeButton.value = "Supprimer";
        putButton.classList.add("put-button");
        putButton.type = "button";
        putButton.value ="modifier";


        namePokemon.textContent = pokemon.name;
        picturePokemon.src = pokemon.picture;
        typePokemon.innerHTML = `types: ${pokemon.types}`;
        hpPokemon.textContent = `hp: ${pokemon.hp}`;
        cpPokemon.textContent = `cp: ${pokemon.cp}`;
        

        // picturePokemon.setAttribute("/", `pokemon.html?id=${pokemon.id}`); 

      //  pokedexContainer.appendChild(searchBlock);
      //   searchBlock.appendChild(searchBar);
      //    searchBlock.appendChild(searchButton)
        pokedexContainer.appendChild(pokemonBlock);
        pokemonBlock.appendChild(namePokemon);
        pokemonBlock.appendChild(picturePokemon);
        pokemonBlock.appendChild(typePokemon);
        pokemonBlock.appendChild(hpPokemon);
        pokemonBlock.appendChild(cpPokemon);
        pokemonBlock.appendChild(buttonBlock);
        buttonBlock.appendChild(putButton);
        buttonBlock.appendChild(removeButton);

       
          
          // Effectuer une requête DELETE à l'API pour supprimer le pokemon
          removeButton.addEventListener("click", () => {
            const pokemonId = pokemon.id;
            
            // Effectuer une requête DELETE à l'API pour supprimer le pokemon
            fetch(`http://localhost:3000/api/pokemons/${pokemonId}`, {
              method: 'DELETE'
            })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Erreur HTTP " + response.status);
              }
              // Supprimer le pokemon de la liste côté serveur
              return response.json();
            })
            .then((data) => {
              // Traiter la réponse JSON après la suppression du pokemon
              pokemonBlock.remove(); // Supprimer l'élément de la page côté client
              alert(`Le pokémon ${pokemon.name} a bien été supprimé.`);
              // Autres actions à effectuer après la suppression du pokemon
            })
            .catch((error) => {
              console.error("Une erreur s'est produite :", error);
            });
          });
         
        });




        putButton.addEventListener('click', () => {

        })
    })
    .catch((error) => {
      console.error("Une erreur s'est produite :", error);
    });
    
}


const pokedexContainer = document.querySelector("#pokedex-container");
const pokedex = document.querySelector("#pokedex");

pokedex.addEventListener("click", () => {
  event.preventDefault();
  pokedexContainer.innerHTML = "";
  
  displayPokemon();
  addPokemonContainer.innerHTML="";
});


