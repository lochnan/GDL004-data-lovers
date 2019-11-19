/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */


import { pokemon } from './data/pokemon/pokemon.js'; //poner el typemodule//
import { pokemonsByType } from './data.js';
import { typeStringPokemons } from './data.js';



//Botones para abrir las  categorías
document.getElementById("Bgrass").addEventListener("click", screenGrass);

function screenGrass() {
    //Haciendo que pase la página otra
    document.getElementById("main").style.display = "none";
    document.getElementById("grass").style.display = "block";

    let resultByType = pokemonsByType;
    console.log(resultByType);


    let totalPokemons = 0;
  
        // Creando un elemento en el DOM para las imágenes.
        let imgTestDiv = document.createElement('img');
        imgTestDiv.src = 'http://www.serebii.net/pokemongo/pokemon/060.png';
        document.getElementById('categoryGrass').appendChild(imgTestDiv);

        let contentNameDiv = document.createElement("div");
        let contentName = document.createTextNode("Aquí va el nombre del pokemon");
        contentNameDiv.appendChild(contentName);
        // añadiendo al elmento creado y su contenido al DOM Revisar https://developer.mozilla.org/es/docs/Web/API/Document/createElement
        let currentDivName = document.getElementById('imgTestDiv');
        document.body.insertBefore(contentNameDiv, currentDivName);
};
