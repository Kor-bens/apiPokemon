// const searchBlock = document.createElement("div");
//         const searchBar = document.createElement("input");
//         const searchButton = document.createElement('button');

//         searchBlock.id="search-block";
//         searchBar.id ="search-bar";
//         searchBar.type ="search";
//         searchBar.name = "searchBar";
//         searchButton.id="search-button";
//         searchButton.textContent = "Rechercher";
// import { putButton, pokedexContainer, pokemonBlock, picturePokemon, typePokemon, hpPokemon, cpPokemon, buttonBlock, removeButton} from './const.js';

// Fonction pour afficher les Pokémon
function displayPokemon() {
  // history.pushState(null, "", "/pokemons");

  // Réinitialiser le contenu du conteneur de la pokédex
  pokedexContainer.innerHTML = "";

  // Effectuer une requête GET pour obtenir la liste des Pokémon
  fetch("http://localhost:3000/api/pokemons")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur HTTP " + response.status);
      }
      return response.json();
    })
    .then((dataPokemons) => {
      // Récupérer les Pokémon depuis la réponse
      pokemons = dataPokemons.data;

      // Parcourir chaque Pokémon

      pokemons.forEach((pokemon) => {
        const pokedexContainer = document.querySelector("#pokedex-container");

        // Création des éléments HTML pour afficher les informations du Pokémon
        const pokemonContainer = document.createElement("div");
        const pokemonBlock = document.createElement("div");
        const namePokemon = document.createElement("h2");
        const picturePokemon = document.createElement("img");
        const typePokemon = document.createElement("p");
        const hpPokemon = document.createElement("p");
        const cpPokemon = document.createElement("p");
        const buttonBlock = document.createElement("div");
        const removeButton = document.createElement("input");
        const putButton = document.createElement("input");

        pokemonContainer.id = "pokemon-container";
        pokemonBlock.classList.add("pokemon-block");
        namePokemon.classList.add("name-pokemon");
        picturePokemon.classList.add("picture-pokemon");
        typePokemon.classList.add("type-pokemon");
        hpPokemon.id = "hp-pokemon";
        cpPokemon.id = "cp-pokemon";
        buttonBlock.classList.add("button-block");
        removeButton.classList.add("remove-button");
        removeButton.type = "button";
        removeButton.value = "Supprimer";
        putButton.classList.add("put-button");
        putButton.type = "button";
        putButton.value = "modifier";

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
            method: "DELETE",
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

        // Fonction pour afficher le formulaire de modification
        function displayEditForm(pokemon) {
          pokedexContainer.innerHTML = "";

          const editContainer = document.createElement("div");
          editContainer.id = "edit-container";
          pokedexContainer.appendChild(editContainer)


          const editForm = document.createElement("form");
          editForm.id = "edit-form";
          editContainer.appendChild(editForm);

          const nameLabel = document.createElement("label");
          nameLabel.textContent = "Nom:";
          const nameInput = document.createElement("input");
          nameInput.type = "text";
          nameInput.value = pokemon.name;
          nameInput.required = true;
          editForm.appendChild(nameLabel);
          editForm.appendChild(nameInput);

          const pictureLabel = document.createElement("label");
          pictureLabel.textContent = "URL de l'image:";
          const pictureInput = document.createElement("input");
          pictureInput.type = "text";
          pictureInput.src = pokemon.picture;
          pictureInput.required = true;
          editForm.appendChild(pictureLabel);
          editForm.appendChild(pictureInput);

          const typesLabel = document.createElement("label");
          typesLabel.textContent = "Types:";
          const typesInput = document.createElement("input");
          typesInput.type = "text";
          typesInput.value = pokemon.types.join(", ");
          typesInput.required = true;
          editForm.appendChild(typesLabel);
          editForm.appendChild(typesInput);

          const hpLabel = document.createElement("label");
          hpLabel.textContent = "HP:";
          const hpInput = document.createElement("input");
          hpInput.type = "number";
          hpInput.value = pokemon.hp;
          hpInput.required = true;
          editForm.appendChild(hpLabel);
          editForm.appendChild(hpInput);

          const cpLabel = document.createElement("label");
          cpLabel.textContent = "CP:";
          const cpInput = document.createElement("input");
          cpInput.type = "number";
          cpInput.value = pokemon.cp;
          cpInput.required = true;
          editForm.appendChild(cpLabel);
          editForm.appendChild(cpInput);

          const saveButton = document.createElement("button");
          saveButton.textContent = "Enregistrer";
          editForm.appendChild(saveButton);

          const cancelButton = document.createElement("button");
          cancelButton.textContent = "Annuler";
          editForm.appendChild(cancelButton);

          const selectedPokemonContainer = document.createElement("div");
          selectedPokemonContainer.id = "selected-pokemon-container";
          selectedPokemonContainer.classList.add("pokemon-block");

          const selectedNamePokemon = document.createElement("h2");
          selectedNamePokemon.classList.add("name-pokemon");

          const selectedPicturePokemon = document.createElement("img");
          selectedPicturePokemon.classList.add("picture-pokemon");

          const selectedTypePokemon = document.createElement("p");
          selectedTypePokemon.classList.add("type-pokemon");

          const selectedHpPokemon = document.createElement("p");
          selectedHpPokemon.id = "hp-pokemon";

          const selectedCpPokemon = document.createElement("p");
          selectedCpPokemon.id = "cp-pokemon";

          selectedNamePokemon.textContent = pokemon.name;
          selectedPicturePokemon.src = pokemon.picture;
          selectedTypePokemon.innerHTML = `Types: ${pokemon.types.join(", ")}`;
          selectedHpPokemon.textContent = `HP: ${pokemon.hp}`;
          selectedCpPokemon.textContent = `CP: ${pokemon.cp}`;

          selectedPokemonContainer.appendChild(selectedNamePokemon);
          selectedPokemonContainer.appendChild(selectedPicturePokemon);
          selectedPokemonContainer.appendChild(selectedTypePokemon);
          selectedPokemonContainer.appendChild(selectedHpPokemon);
          selectedPokemonContainer.appendChild(selectedCpPokemon);

          editContainer.appendChild(editForm);
          editContainer.appendChild(selectedPokemonContainer);



          // Gérer l'événement de clic sur le bouton Enregistrer
          saveButton.addEventListener("click", () => {
            // Récupérer les valeurs modifiées du formulaire
            const updatedPokemon = {
              ...pokemon,
              picture: pictureInput.value,
              name: nameInput.value,
              types: typesInput.value.split(","),
              hp: parseInt(hpInput.value),
              cp: parseInt(cpInput.value),
            };

             // Mettre à jour les éléments HTML correspondants
           
            // Effectuer une requête PUT à l'API pour mettre à jour le Pokémon
            fetch(`http://localhost:3000/api/pokemons/${pokemon.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedPokemon),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Erreur HTTP " + response.status);
                }
                return response.json();
              })
              .then((data) => {
                // Afficher les modifications sur la page
                pokemon.name = updatedPokemon.name;
                pokemon.types = updatedPokemon.types;
                pokemon.hp = updatedPokemon.hp;
                pokemon.cp = updatedPokemon.cp;

                pokedexContainer.innerHTML = "";
                displayPokemon();
                alert(`Le Pokémon ${pokemon.name} a été modifié avec succès.`);
              })
              .catch((error) => {
                console.error("Une erreur s'est produite :", error);
              });
          });

          // Gérer l'événement de clic sur le bouton Annuler
          cancelButton.addEventListener("click", () => {
            pokedexContainer.innerHTML = "";
            displayPokemon();
          });
        }

        putButton.addEventListener("click", () => {
          displayEditForm(pokemon);
        });
      });
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
  addPokemonContainer.innerHTML = "";
});
