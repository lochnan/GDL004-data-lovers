/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import { pokemon } from './data/pokemon/pokemon.js'; //poner el typemodule//
import { pokemonsByType } from './data.js';
import { typeStringPokemons } from './data.js';
let resultByType = [];
//Boton es para abrir las  categorías
document.getElementById("Bgrass").addEventListener("click", screenGrass);

function screenGrass() {
    //Haciendo que pase la página otra
    document.getElementById("main").style.display = "none";
    document.getElementById("grass").style.display = "block";

    /*CreateElment con un for para crear de forma dinámica los links 
    de los pokemones según la categoría de Grass  */
    for (let i = 0; i < pokemonsByType.length; i++) {
        let cardDiv = document.createElement('div') 
            let imgDiv = document.createElement('img');
        let txtDiv = document.createElement('span');
        cardDiv.appendChild(imgDiv);

        cardDiv.appendChild(txtDiv);

        imgDiv.setAttribute('class', 'democlass');
        imgDiv.setAttribute('src', pokemonsByType[i].img);
        cardDiv.setAttribute('class', 'cardClass');
        txtDiv.innerHTML = `<p>${pokemonsByType[i].name}</p>`;
        //txtDiv.setAttribute('value', pokemonsByType[i].name);

        document.getElementById('categoryGrass').appendChild(cardDiv);

        // Creando un nodo hijo para el texto y asignando como padre a imgDiV

    };

    resultByType = pokemonsByType;
    console.log(resultByType);
    //return resultByType;
};


document.getElementById("order").addEventListener("click", orderAz);

function orderAz() {

    resultByType.sort(function(a,b) {
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





