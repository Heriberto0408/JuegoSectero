//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';
let numeroSecreto = 0;
let intentos = 0;
let listaNumSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        //Reiniciar el juego
        document.getElementById('reiniciar').removeAttribute('false');
    } else {
        //El usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    //return Math.floor(Math.random() * 10) + 1;
    //return numeroSecreto;
    console.log(numeroSecreto);
    console.log(listaNumSorteados);
    
    //Si ya sorteamos todos los numeros
    if (listaNumSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numero posibles');
    } else {
        //If sirve para evitar numeros repetidos
        //Si el numero generado ya existe en la lista, se vuelve a generar
        if (listaNumSorteados.includes(numeroSecreto)) {
            //Recursividad para evitar numeros repetidos
            return generarNumeroSecreto();
        } else {
            listaNumSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
        
    }
       
}

function condicionesIniciales(){
    signarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja(){
     document.querySelector('#valorUsuario').value = '';
  
}

function reiniciarJuego() {
    //limpiar la caja de texto
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Iniciar el contador de intentos
     condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();