/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import { pokemon } from './data/pokemon/pokemon.js'; //poner el typemodule//
import { pokemonsByType } from './data.js';
import { orderABCByType } from './data.js';
import { pokemonsModal } from './data.js';

//Botones para abrir las  categorías


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
    /* console.log(pokemonByTypeResult); Aquí muestra que se está obteniendo el valor de lo que hace s
    la función al ponerle los () y se guarda en una constante */

    /*CreateElment con un for para crear de forma dinámica los links 
    de los pokemones según la categoría */
    for (let i = 0; i < pokemonByTypeResult.length; i++) {

        const template = `<div class="prueba"> 
            <a href="#windowModal" class="buttonModal"><img class="buttonModal" src= ${ pokemonByTypeResult[i].img}></img></a>
            <span> ${ pokemonByTypeResult[i].num} </span>
            <span> ${ pokemonByTypeResult[i].name} </span>
        </div>`
        
        
        let cardDiv = document.createElement('div');
        document.getElementById("categoryGrass").appendChild(cardDiv);
        cardDiv.innerHTML = template;
    };
    
    resultByType = pokemonByTypeResult; // Para sacar el valor del scope local al scope global
    document.querySelector('.prueba').addEventListener('click', (e) => console.log(e.currentTarget));
};



/*--------------------------- VENTANA MODAL --------------------------
----------------------------------------------------------------------*/
/*

const buttonModal = document.querySelectorAll(".buttonModal");
 buttonModal.forEach(function(showModal){
    showModal.onclick = function(){
        console.log('asdasdas')
    };
        document.querySelector('.prueba').style.display="block";
        
});*/




/*-------------------------- ORDENAR POKEMONES --------------------------
----------------------------------------------------------------------*/


// Función para obtener el sort para ordenar de la A a la Z

document.getElementById("order").addEventListener("click", orderAz);

function orderAz() {

    document.getElementById("categoryGrass").style.display = "none";
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

};

/*
document.getElementById("buttonModal").addEventListener("click", modalWindow);
document.getElementById("closeModal").addEventListener("click", closeModal);

function modalWindow() {
        modal.style.display="block";

};

function closeModal() {
    modal.style.display="none";

};*/

