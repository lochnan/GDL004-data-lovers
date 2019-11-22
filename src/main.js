/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import { pokemon } from './data/pokemon/pokemon.js'; //poner el typemodule//
import { pokemonsByType } from './data.js';


//Botones para abrir las  categorías
document.getElementById("Bgrass").addEventListener("click", screenGrass);
document.getElementById("Bpoison").addEventListener("click", screenGrass);


function screenGrass(e) {
    //Haciendo que pase la página otra
    document.getElementById("main").style.display = "none";
    document.getElementById("grass").style.display = "block";

   // Obteniendo la data al poner la función del data.js pero se obtiene al ponerle sus pará
    const pokemonByTypeResult = pokemonsByType(pokemon, e);
    console.log(pokemonByTypeResult);

    /*CreateElment con un for para crear de forma dinámica los links 
    de los pokemones según la categoría de Grass  */
    for (let i = 0; i < pokemonByTypeResult.length; i++) {
        let cardDiv = document.createElement('div') 
            let imgDiv = document.createElement('img');
        let txtDiv = document.createElement('span');
        let numDiv = document.createElement('span');
        cardDiv.appendChild(imgDiv);

        cardDiv.appendChild(txtDiv);
        cardDiv.appendChild(numDiv);

        imgDiv.setAttribute('class', 'democlass');
        imgDiv.setAttribute('src', pokemonByTypeResult[i].img);
        cardDiv.setAttribute('class', 'cardClass');
        txtDiv.innerHTML = `<p>${pokemonByTypeResult[i].name}</p>`;
        numDiv.innerHTML = `<p>${pokemonByTypeResult[i].num}<p>`;

        document.getElementById('categoryGrass').appendChild(cardDiv);

    };

    return pokemonByTypeResult; 
};


document.getElementById("order").addEventListener("click", orderAz);

 function orderAz(pokemonByTypeResult, e) {
   
    pokemonByTypeResult.sort(function(a,b) {
        if (a.name>b.name) {
        return 1;
        }else if(a.name < b.name){
            return -1;
        }else{
            return 0;
        }

    });

}




/*
document.getElementById("order").addEventListener("click", orderAB);

function orderAB() {
    resultByType.sort((a,b) => 
    a.nombre > b.nombre() ? 1:
    a.nombre < b.nombre() ? -1:
    0
    );
    console.log(resultByType);

};*/


//cardDiv.sort((a,b) => (a.nombre.localeCompare(b.nombre)));

/*

const orderPokemons = pokemonsByType;
    orderPokemons.sort((a,b) => a.nombre.localeCompare(b.nombre));
    //orderPokemons.sort((a,b) => a.localeCompare(b));
    console.log(orderPokemons);

*/
//document.getElementById("textDiv").innerHTML = cardDiv;

//cardDiv.sort(function(a,b));
  //  if (a.name> babel.name); {
    //    console.log(cardDiv);
    //}




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





