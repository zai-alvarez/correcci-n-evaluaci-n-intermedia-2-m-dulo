'use strict';
//Elementos que necesito del HTML
const selectElement = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');

//Generar número random

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }

//Escuchar el evento
function handleClickBtn(event){
    event.preventDefault()
    //Evita el reinicio de la web

    const selectValue = parseInt(selectElement.value);
    //Recoge el valor del 1 al 6
    //parseInt para pasar los string a num
    
    const randomNumber = getRandomNumber(6);
    //Recoge el valor aleatorio

    if (selectValue === randomNumber){
        result.innerHTML = "Has ganado el doble de lo apostado :)"
    }
    else {
        result.innerHTML = "Has perdido todo lo apostado :("
    }
}
//El evento
btn.addEventListener('click', handleClickBtn)





