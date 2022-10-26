const cortar = (ingrediente) => { // Esta funcion tiene declarada la variable ingrediente la cual sera el parametro que estara escuchando
    console.log('Cortar ' + ingrediente); // Al recibir el parametro concatenara la palabra Cortar + el parametro para despues consolearlo en el navegador
}

function mezclarIngredientes(n) { // Dentro de esta funcion se estara escuchando el parametro n para
    if (n <= 0) return; // Esta validacion estara comprobando que n sea menor o igual a 0 para poder retornar n y terminar con esta funcion

    console.log('Mezclar #' + n); // Concatenara la palabra Mezclar con el parametro n
    mezclarIngredientes(n - 1); // Volver a ejecutar la misma funcion pero restara 1 al parametro n para que vaya disminuyendo
}

function comer() { // Dentro de esta funcion solo se encuentra un console.log de la palabra Comer
    console.log('Comer');
}

function hacerEnsaladaMixta() { // Dentro de esta funcion se ejecutaran de forma ascendente sus lineas
    cortar('tomate'); // Primer linea a ejecutar, mandara a llamar la funcion cortar enviando como parametro la palabra tomate
    cortar('lechuga'); // Primer linea a ejecutar, mandara a llamar la funcion cortar enviando como parametro la palabra lechuga
    cortar('cebolla'); // Primer linea a ejecutar, mandara a llamar la funcion cortar enviando como parametro la palabra cebolla
    mezclarIngredientes(5); // Al llegar esta linea ejecutaremos la funcion mezclarIngredientes enviando como parametro 5
    comer(); // Se ejecutara esta funcion al terminar el bucle de la funcion mezclarIngredientes
}

hacerEnsaladaMixta(); // Primero durante el call stack se ejecutara esta funcion