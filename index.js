  const descriptionPage = document.querySelector
  
  
  
  
  
  
  const searchBlock = document.querySelector("#search-block");

// Fonction pour afficher les Pokémon

function displayPokemon() {
  // history.pushState(null, "", "/pokemons");

  // Réinitialiser le contenu du conteneur de la pokédex
  pokedexContainer.innerHTML = "";

      const labelSearch = document.createElement("p");
      labelSearch.for = "label-search-pokemon";
      labelSearch.id="label-search-pokemon";
      labelSearch.textContent = "attrape un pokémon :";

      const inputSearchBar = document.createElement("input");
      inputSearchBar.type ="search";
      inputSearchBar.id="search-bar";
      inputSearchBar.name="search-bar";
      inputSearchBar.placeholder = "Nom du pokemon";

      const buttonSearchButton = document.createElement("button");
      buttonSearchButton.id="search-button";
      buttonSearchButton.textContent ="Rechercher";

      searchBlock.appendChild(labelSearch);
      searchBlock.appendChild(inputSearchBar);
      searchBlock.appendChild(buttonSearchButton);

      
  //CHERCHER UN POKEMON
   //CHERCHER UN POKEMON
   buttonSearchButton.addEventListener("click", () => {
    const pokemonName = inputSearchBar.value; // Utiliser value au lieu de name

    pokedexContainer.innerHTML = "";

    fetch(`http://localhost:3000/api/pokemons/${pokemonName}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur HTTP " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        const pokemon = data.data;
        if (pokemon) {
          const pokemonDetailsContainer = document.createElement("div");
          pokemonDetailsContainer.innerHTML = `
            <h2 class="name">${pokemon.name}</h2>
            <img src="${pokemon.picture}" alt="${pokemon.name}">
            <p class="type">types: ${pokemon.types}</p>
            <p class="hp">hp: ${pokemon.hp}</p>
            <p class="cp">cp: ${pokemon.cp}</p>`;
          pokedexContainer.appendChild(pokemonDetailsContainer);
        } else {
          const error = document.createElement("p");
          error.id="error";
          error.textContent = "Aucun Pokémon trouvé avec ce nom.";
          console.log("Aucun Pokémon trouvé avec ce nom.");
          document.body.appendChild(error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  inputSearchBar.addEventListener("input", () => {
    const pokemonName = inputSearchBar.value;
    searchPokemons(pokemonName);
  });

//   function searchPokemons(pokemonName) {
//   // Réinitialiser le contenu du conteneur de la pokédex
//   pokedexContainer.innerHTML = "";

//   // Effectuer une requête GET pour obtenir la liste des Pokémon correspondant au nom
//   fetch(`http://localhost:3000/api/pokemons?name=${pokemonName}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Erreur HTTP " + response.status);
//       }
//       return response.json();
//     })
//     .then((dataPokemons) => {
//       const filteredPokemons = dataPokemons.data;
//       if (filteredPokemons.length > 0) {
//         filteredPokemons.forEach((pokemon) => {
//           // Créer les éléments HTML pour afficher chaque Pokémon

//           // Créer un élément <div> pour le Pokémon
//           const pokemonDiv = document.createElement("div");
//           pokemonDiv.classList.add("pokemon");

//           // Créer un élément <img> pour l'image du Pokémon
//           const imageElement = document.createElement("img");
//           imageElement.src = pokemon.imageUrl;
//           imageElement.alt = pokemon.name;

//           // Créer un élément <h2> pour le nom du Pokémon
//           const nameElement = document.createElement("h2");
//           nameElement.textContent = pokemon.name;

//           // Ajouter l'image et le nom du Pokémon à l'élément <div> du Pokémon
//           pokemonDiv.appendChild(imageElement);
//           pokemonDiv.appendChild(nameElement);

//           // Ajouter l'élément <div> du Pokémon au conteneur de la Pokédex
//           pokedexContainer.appendChild(pokemonDiv);
//         });
//       } else {
//         console.log("Aucun Pokémon trouvé avec ce nom.");
//       }
//     })
//     .catch((error) => {
//       console.error("Une erreur s'est produite :", error);
//     });
// }
  
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
          searchBlock.innerHTML ="";

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

          const visualizeButton  =document.createElement("button");
          visualizeButton.textContent = "Visualiser";
          editForm.appendChild(visualizeButton);

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
          editContainer.appendChild(selectedPokemonContainer);

          function displayVisualizedPokemon(pokemon) {

           
            const existingVisualizedBlock = editContainer.querySelector("#visualized-pokemon-block");
  if (existingVisualizedBlock) {
    existingVisualizedBlock.remove(); 
  }
            const visualizedPokemonBlock = document.createElement("div");
            visualizedPokemonBlock.id = "visualized-pokemon-block";
        
            const visualizedNamePokemon = document.createElement("h2");
            const visualizedPicturePokemon = document.createElement("img");
            const visualizedTypePokemon = document.createElement("p");
            const visualizedHpPokemon = document.createElement("p");
            const visualizedCpPokemon = document.createElement("p");
        
            visualizedNamePokemon.classList.add("name-pokemon");
            visualizedPicturePokemon.classList.add("picture-pokemon");
            visualizedTypePokemon.classList.add("type-pokemon");
            visualizedHpPokemon.id = "hp-pokemon";
            visualizedCpPokemon.id = "cp-pokemon";
        
            visualizedNamePokemon.textContent = pokemon.name;
            visualizedPicturePokemon.src = pokemon.picture;
            visualizedTypePokemon.innerHTML = `Types: ${pokemon.types.join(", ")}`;
            visualizedHpPokemon.textContent = `HP: ${pokemon.hp}`;
            visualizedCpPokemon.textContent = `CP: ${pokemon.cp}`;
        
            visualizedPokemonBlock.appendChild(visualizedNamePokemon);
            visualizedPokemonBlock.appendChild(visualizedPicturePokemon);
            visualizedPokemonBlock.appendChild(visualizedTypePokemon);
            visualizedPokemonBlock.appendChild(visualizedHpPokemon);
            visualizedPokemonBlock.appendChild(visualizedCpPokemon);
        
            editContainer.insertBefore(visualizedPokemonBlock, editForm);
          }
            const visualizedPokemonBlock = document.createElement("div");

          visualizeButton.addEventListener('click', () => {
            const updatedPokemon = {
              ...pokemon,
              picture: pictureInput.value,
              name: nameInput.value,
              types: typesInput.value.split(","),
              hp: parseInt(hpInput.value),
              cp: parseInt(cpInput.value),
            };
            visualizedPokemonBlock.innerHTML="";
            displayVisualizedPokemon(updatedPokemon);
          })


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
               
                // alert(`Le Pokémon ${pokemon.name} a été modifié avec succès.`);
              })
              .catch((error) => {
                console.error("Une erreur s'est produite :", error);
              });
          });

          // Gérer l'événement de clic sur le bouton Annuler
          cancelButton.addEventListener("click", () => {
            pokedexContainer.innerHTML = "";
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
  pokedexContainer.innerHTML = "";
  searchBlock.innerHTML ="";
  displayPokemon();
  addPokemonContainer.innerHTML = "";
});

