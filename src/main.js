/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import POKEMON from './data/pokemon/pokemon.js'; //poner el typemodule//
console.log(POKEMON);


function nextScreen (){
    document.getElementById("main").style.display = "none";
      document.getElementById("grass").style.display = "block";
}


document.getElementById("Bgrass").addEventListener("click", nextScreen); //aqui va la funcion para que siga a la sig pantalla



/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
