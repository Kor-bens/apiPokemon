function addPokemon() {
  const addPokemonContainer = document.querySelector("#add-pokemon-container");
  const pokedexContainer = document.querySelector("#pokedex-container");

  pokedex.style.backgroundColor = 
   titleAddContainer = document.createElement("h2");
  const formAddContainer = document.createElement("form");
  const labelAddContainerName = document.createElement("label");
  const inputAddContainerNameText = document.createElement("input");
  const labelAddContainerType = document.createElement("label");
  const inputAddContainerTypeText = document.createElement("input");
  const labelAddContainerImg = document.createElement("label");
  const inputAddContainerImg = document.createElement("input");
  const labelAddContainerHp = document.createElement("label");
  const inputAddContainerHp = document.createElement("input");
  const labelAddContainerCp = document.createElement("label");
  const inputAddContainerCp = document.createElement("input");
  const buttonAdd = document.createElement("button");
  const buttonVisualised = document.createElement("button");
  const errorMessage = document.createElement("p");

  titleAddContainer.classList.add("name-pokemon");
  formAddContainer.classList.add("pokemon-block");
  labelAddContainerName.classList.add("label-pokemon");
  inputAddContainerNameText.classList.add("input-pokemon");
  labelAddContainerType.classList.add("label-pokemon");
  inputAddContainerTypeText.classList.add("input-pokemon");
  labelAddContainerImg.classList.add("label-pokemon");
  inputAddContainerImg.classList.add("input-pokemon");
  labelAddContainerHp.classList.add("label-pokemon");
  inputAddContainerHp.classList.add("input-pokemon");
  labelAddContainerCp.classList.add("label-pokemon");
  inputAddContainerCp.classList.add("input-pokemon");
  buttonAdd.classList.add("put-button");
  buttonVisualised.classList.add("visualised-button");
  errorMessage.id='error-message';

  titleAddContainer.id = "title-add-pokemon";
  formAddContainer.action = "/api/pokemons";
  formAddContainer.id = "form-add-container";
  formAddContainer.name = "add-pokemon";
  formAddContainer.method = "POST";
  labelAddContainerName.for = "nom";
  inputAddContainerNameText.type = "text";
  inputAddContainerNameText.id = "nom";
  inputAddContainerNameText.name = "nom";
  inputAddContainerNameText.required = true;
  labelAddContainerType.for = "type";
  inputAddContainerTypeText.type = "text";
  inputAddContainerTypeText.id = "type";
  inputAddContainerTypeText.name = "type";
  inputAddContainerTypeText.required = true;
  labelAddContainerImg.for = "imageSrc";
  inputAddContainerImg.type = "text";
  inputAddContainerImg.id = "imageSrc";
  inputAddContainerImg.name = "imageSrc";
  inputAddContainerImg.required = true;
  labelAddContainerHp.for = "hp";
  inputAddContainerHp.type = "text";
  inputAddContainerHp.id = "hp";
  inputAddContainerHp.name = "hp";
  inputAddContainerHp.required = true;
  labelAddContainerCp.for = "cp";
  inputAddContainerCp.type = "text";
  inputAddContainerCp.id = "cp";
  inputAddContainerCp.name = "cp";
  inputAddContainerCp.required = true;
  buttonAdd.type = "submit";
  buttonVisualised.type ="submit";

  titleAddContainer.textContent = "Crée ou ajoute un pokémon";
  labelAddContainerName.textContent = "Nom";
  labelAddContainerImg.textContent = "URL de l'image";
  labelAddContainerType.textContent = "Type";
  labelAddContainerHp.textContent = "Hp";
  labelAddContainerCp.textContent = "Cp";
  buttonVisualised.textContent = "Visualiser";
  buttonAdd.textContent = "Ajouter";

  formAddContainer.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = inputAddContainerNameText.value;
  const types = inputAddContainerTypeText.value.split(",");
  const picture = inputAddContainerImg.value;
  const hp = parseInt(inputAddContainerHp.value);
  const cp = parseInt(inputAddContainerCp.value);

  if (!name || types.length === 0 || !picture || isNaN(hp) || isNaN(cp)) {
    errorMessage.textContent = "Veuillez remplir tous les champs avec des valeurs valides.";
    return;
  }
    
  const validTypes = ["feu", "insecte", "eau","acier", "dragon", "combat", "électrik", "fée", "glace", "insecte", "normal", "plante", "poison", "psy", "roche", "sol", "spectre", "ténèbre", "vol"];
  const isTypeValid = types.every((type) => validTypes.includes(type.trim().toLowerCase()));
  const isImageUrlValid = validateImageUrl(picture);
  

  if (!isTypeValid) {
    errorMessage.textContent = "Le type du pokémon doit étre: feu, eau, insecte...";
    return;
  }

  if (!isImageUrlValid) {
    errorMessage.textContent = "L'image doit étre une url.";
    return;
  }

  if (!Number.isInteger(hp)) {
    errorMessage.textContent = "Les points de vie du pokémon doit etre un nombre.";
  }
  if (!Number.isInteger(cp)) {
    errorMessage.textContent = "Les points de combat du pokémon doit étre un nombre.";
  }

    const newPokemon = {
      name: inputAddContainerNameText.value,
      types: inputAddContainerTypeText.value.split(","),
      picture: inputAddContainerImg.value,
      hp: inputAddContainerHp.value,
      cp: inputAddContainerCp.value,
    };

    
    

    fetch(`http://localhost:5000/api/pokemons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur HTTP " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        // Traitez la réponse du serveur ici si nécessaire
        console.log(data);



        // Affichez les détails du nouveau pokémon
        const newPokemonDetails = document.createElement("div");
        const newPokemonName = document.createElement("h2");
        const newPokemonType = document.createElement("p");
        const newPokemonImg = document.createElement("img");
        const newPokemonHp = document.createElement("p");
        const newPokemonCp = document.createElement("p");

        newPokemonName.textContent = `nom: ${data.pokemonCreated.nom}`;
        newPokemonImg.src = data.pokemonCreated.imageSrc;
        newPokemonType.textContent = `Type: ${data.pokemonCreated.types.join(", ")}`;
        newPokemonHp.textContent = `hp: ${data.pokemonCreated.hp}`;
        newPokemonCp.textContent = `cp: ${data.pokemonCreated.cp}`;

        newPokemonDetails.appendChild(newPokemonName);
        newPokemonDetails.appendChild(newPokemonType);
        newPokemonDetails.appendChild(newPokemonImg);
        newPokemonDetails.appendChild(newPokemonHp);
        newPokemonDetails.appendChild(newPokemonCp);
        pokedexContainer.appendChild(newPokemonDetails);

        // Effacez les champs du formulaire après la création réussie du pokémon
        inputAddContainerNameText.value = "";
        inputAddContainerTypeText.value = "";
        inputAddContainerImg.value = "";
        inputAddContainerHp.value = "";
        inputAddContainerCp.value = "";
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
        errorMessage.textContent = "An error occurred while adding the Pokemon.";
      });
  });

  addPokemonContainer.appendChild(titleAddContainer);
  addPokemonContainer.appendChild(formAddContainer);
  formAddContainer.appendChild(labelAddContainerName);
  formAddContainer.appendChild(inputAddContainerNameText);
  formAddContainer.appendChild(labelAddContainerType);
  formAddContainer.appendChild(inputAddContainerTypeText);
  formAddContainer.appendChild(labelAddContainerImg);
  formAddContainer.appendChild(inputAddContainerImg);
  formAddContainer.appendChild(labelAddContainerHp);
  formAddContainer.appendChild(inputAddContainerHp);
  formAddContainer.appendChild(labelAddContainerCp);
  formAddContainer.appendChild(inputAddContainerCp);
  formAddContainer.appendChild(buttonAdd);
  addPokemonContainer.appendChild(errorMessage);


  }

  function validateImageUrl(url) {
    // Simple URL validation logic
    
   
  // You can enhance it as per your requirements
    
   
  const urlRegex = /^(http|https):\/\/.*\.(jpeg|jpg|gif|png)$/i;
    
   
  return urlRegex.test(url);
  }


const addPokemonContainer = document.querySelector("#add-pokemon-container");
const addPokemeon = document.querySelector("#add-pokemon");

addPokemeon.addEventListener("click", () => {
  addPokemonContainer.innerHTML = "";
  descriptionPage.innerHTML ="";
  addPokemon();
  searchBlock.innerHTML ="";
  pokedexContainer.innerHTML = "";
});
