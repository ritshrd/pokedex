let pokemon_name_input = document.getElementById("pokemon_name_input");


const show_pokemon_details = () => {
  console.log(pokemon_name_input.value);
  get_pokemon_details(pokemon_name_input.value)
    .then(pokemon => {
      container.innerHTML = `
      <p class="nombre">${pokemon.name}</p>
      <img class="imagen" src="${pokemon.sprites.other["official-artwork"].front_default}" />
      <div class="peso">
      <div>Weight</div>
      <div>${pokemon.weight}</div>
      </div>
      <div class="peso">
      <div>Type</div>
      <div>${pokemon.types["0"].type.name}</div>
      </div>
      <div class="peso">
      <div>Ability</div>
      <div>${pokemon.abilities["0"].ability.name}</div>
      </div>


 
 `
    })
    .catch((error) => {
      console.log(error);
    });
};

const get_pokemon_details = (pokemon_name) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`,
    headers: {},
  };

  return axios.request(config).then((response) => {
    console.log(JSON.stringify(response.data));
    return response.data
  });
};
