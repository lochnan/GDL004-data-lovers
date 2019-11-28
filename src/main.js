/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import { pokemon } from './data/pokemon/pokemon.js'; //poner el typemodule//
import { pokemonsByType, orderABCByType, uniqueClasify } from './data.js';

/*const allClasify = uniqueClasify;
uniqueClasify.map();
console.log(mapAllClasify);
*/

//Botones para abrir las  categorías
/*-------------------------- MOSTRAR FILTRADO --------------------------
----------------------------------------------------------------------*/
/* Funciona que  cree un array con los nombres de los pekemones debido a que es una propiedad del navegador pero...
revisar https://stackoverflow.com/questions/25931810/why-is-document-getelementbyid-not-needed 
const listCategories = [ Grass, Poison, Fire, Flying, Water, Bug, Normal, Electric, Ground, Fighting, Psychic, Rock, Ice, Ghost, Dragon ];
listCategories.forEach(category => { category.addEventListener("click", screenGrass);
   console.log(listCategories)
});
*/
document.getElementById("Bgrass").addEventListener("click", screenGrass);
document.getElementById("Bpoison").addEventListener("click", screenGrass);
document.getElementById("Bfire").addEventListener("click", screenGrass);
document.getElementById("Bflying").addEventListener("click", screenGrass);
document.getElementById("Bwater").addEventListener("click", screenGrass);
document.getElementById("Bbug").addEventListener("click", screenGrass);
document.getElementById("Bnormal").addEventListener("click", screenGrass);
document.getElementById("Belectric").addEventListener("click", screenGrass);
document.getElementById("Bground").addEventListener("click", screenGrass);
document.getElementById("Bfighting").addEventListener("click", screenGrass);
document.getElementById("Bpsychic").addEventListener("click", screenGrass);
document.getElementById("Brock").addEventListener("click", screenGrass);
document.getElementById("Bice").addEventListener("click", screenGrass);
document.getElementById("Bghost").addEventListener("click", screenGrass);
document.getElementById("Bdragon").addEventListener("click", screenGrass);

/* Función screenGrass que nos ayuda a pasar de botón y además tiene dentro el e.target, además del template y la creación
de los divs de forma dinámica */

let resultByType = [];

function screenGrass(e) { /* Necesito colocar la e porque es el parámetro  quye necesita la función para poder
    ejecutar el addEventListener */
    //Haciendo que pase la página otra
    document.getElementById("main").style.display = "none";
    document.getElementById("grass").style.display = "block";

    const x = e.target.id;
    console.log(x); // Me ayuda a ver cual es el id en donde se  está dando el evento  de click

    // Obteniendo la data al poner la función pokemonsByType del data.js, la que se obtiene al ponerle sus parámetros
    const pokemonByTypeResult = pokemonsByType(pokemon, x);
    // console.log(pokemonByTypeResult);

    /* console.log(pokemonByTypeResult); Aquí muestra que se está obteniendo el valor de lo que hace s
    la función al ponerle los () y se guarda en una constante */

    /*CreateElment con un for para crear de forma dinámica los links 
    de los pokemones según la categoría */
    console.log(pokemonByTypeResult)
    for (let i = 0; i < pokemonByTypeResult.length; i++) {

        const template = `<div> 
            <img src= "${ pokemonByTypeResult[i].img}" </img> 
            <span> ${ pokemonByTypeResult[i].num} </span>
            <span> ${ pokemonByTypeResult[i].name} </span>
        </div>`

        let cardDiv = document.createElement('div');
        document.getElementById("categoryGrass").appendChild(cardDiv);
        cardDiv.innerHTML = template;
    };

    resultByType = pokemonByTypeResult; /* Para sacar el valor del scope local al scope global.  
    Revisar que afuera de la función se delcara resultByType vacía */
};

/*-------------------------- ORDENAR POKEMONES --------------------------
----------------------------------------------------------------------*/
// Función para obtener el sort para ordenar de la A a la Z

document.getElementById("order").addEventListener("click", orderAz);

function orderAz() {

    document.getElementById("grassOrder").innerHTML= "";
    document.getElementById("categoryGrass").style.display = "none";
    document.getElementById("reverseOrder").style.display = "none";
    document.getElementById("grassOrder").style.display = "block";

    let pokemonsTypeByOrder = orderABCByType(resultByType);

    for (let i = 0; i < pokemonsTypeByOrder.length; i++) {

        const templateOrder = `<div>
        <img src = "${ pokemonsTypeByOrder[i].img}"</img>
        <span> ${ pokemonsTypeByOrder[i].num} </span>
        <span> ${ pokemonsTypeByOrder[i].name} </span>
        </div>`

        let cardDivOrder = document.createElement('div')
        document.getElementById("grassOrder").appendChild(cardDivOrder);
        cardDivOrder.innerHTML = templateOrder;
    };

    resultByType = pokemonsTypeByOrder;
    //return pokemonsTypeByOrder;
};
//screenGrass(e);
//var y = orderAz();
//console.log(y);

/*-------------------------- ORDENAR POKEMONES AL REVÉS --------------------------
----------------------------------------------------------------------*/
document.getElementById("reverseOrderButton").addEventListener("click", orderZa);


function orderZa() {

    document.getElementById("reverseOrder").innerHTML= "";

    document.getElementById("categoryGrass").style.display = "none";
    document.getElementById("grassOrder").style.display = "none";
    document.getElementById("reverseOrder").style.display = "block";

    let reversed = resultByType.reverse();
    
    for (let i = 0; i < reversed.length; i++) {

        const templateReverseOrder = `<div>
        <img src= "${ reversed[i].img}" </img>
        <span> ${ reversed[i].num} </span>
        <span> ${ reversed[i].name} </span>
        </div>`

        let cardDivRevOrd = document.createElement('div')
        document.getElementById("reverseOrder").appendChild(cardDivRevOrd);
        cardDivRevOrd.innerHTML = templateReverseOrder;
    };
};


/*CreateElment con un for para crear de forma dinámica los links
de los pokemones según la categoría de Grass
for (let i = 0; i < pokemonByTypeResult.length; i++) {
    let cardDiv = document.createElement('div');
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
*/

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