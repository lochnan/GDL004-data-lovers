/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import { pokemon } from './data/pokemon/pokemon.js'; //poner el typemodule//
import { pokemonsByType } from './data.js';
// import { typeStringPokemons } from './data.js';

let resultByType = pokemonsByType;
console.log(resultByType);

//Botones para abrir las  categorías
document.getElementById("Bgrass").addEventListener("click", screenGrass);
document.getElementById("Bpoison").addEventListener("click", screenGrass);


function screenGrass(e) {
    //Haciendo que pase la página otra
    document.getElementById("main").style.display = "none";
    document.getElementById("grass").style.display = "block";
    console.log(pokemonsByType(pokemon, e));

    const pokemonByType = pokemonsByType(pokemon, e);

    /*CreateElment con un for para crear de forma dinámica los links 
    de los pokemones según la categoría de Grass  */

    for (let i = 0; i < pokemonByType.length; i++) {
        let cardDiv = document.createElement('div');
        let imgDiv = document.createElement('img');
        let txtDiv = document.createElement('span');
        let numDiv = document.createElement('span');
        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(txtDiv);
        cardDiv.appendChild(numDiv);

        imgDiv.setAttribute('class', 'democlass');
        imgDiv.setAttribute('src', pokemonByType[i].img);
        cardDiv.setAttribute('class', 'cardClass');
        txtDiv.innerHTML = `<p>${pokemonByType[i].name}</p>`;
        numDiv.innerHTML = `<p>${pokemonByType[i].num}<p>`;

        document.getElementById('categoryGrass').appendChild(cardDiv);
    };

 

};



        // Creando un elemento en el DOM para las imágenes.
/*
let imgTestDiv = document.createElement('img');
imgTestDiv.src = 'http://www.serebii.net/pokemongo/pokemon/060.png';
document.getElementById('categoryGrass').appendChild(imgTestDiv);

let contentNameDiv = document.createElement("div");
let contentName = document.createTextNode("Aquí va el nombre del pokemon");
contentNameDiv.appendChild(contentName);
// añadiendo al elmento creado y su contenido al DOM Revisar https://developer.mozilla.org/es/docs/Web/API/Document/createElement
let currentDivName = document.getElementById('imgTestDiv');
document.body.insertBefore(contentNameDiv, currentDivName);
*/

 // Creando un elemento en el DOM para las imágenes.




