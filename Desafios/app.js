// Crear una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crear una lista de lenguajes de programación llamada "lenguagesDeProgramacion".
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agregar más elementos a la lista "lenguagesDeProgramacion".
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Función para mostrar todos los elementos de la lista "lenguagesDeProgramacion".
function mostrarLenguajes() {
    lenguagesDeProgramacion.forEach(lenguaje => console.log(lenguaje));
}

// Función para mostrar todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso.
function mostrarLenguajesInverso() {
    lenguagesDeProgramacion.slice().reverse().forEach(lenguaje => console.log(lenguaje));
}

// Función que calcula el promedio de los elementos en una lista de números.
function calcularPromedio(listaNumeros) {
    if (listaNumeros.length === 0) {
        return 0;
    }
    let suma = listaNumeros.reduce((a, b) => a + b, 0);
    return suma / listaNumeros.length;
}

// Función que muestra el número más grande y el número más pequeño en una lista.
function mostrarMayorYMenor(listaNumeros) {
    if (listaNumeros.length === 0) {
        console.log("La lista está vacía.");
    } else {
        console.log(`El número más grande es: ${Math.max(...listaNumeros)}`);
        console.log(`El número más pequeño es: ${Math.min(...listaNumeros)}`);
    }
}

// Función que devuelve la suma de todos los elementos en una lista.
function sumaLista(listaNumeros) {
    return listaNumeros.reduce((a, b) => a + b, 0);
}

// Función que devuelve la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

// Función que recibe dos listas de números del mismo tamaño y devuelve una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        return "Las listas no tienen el mismo tamaño.";
    }
    return lista1.map((num, index) => num + lista2[index]);
}

// Función que recibe una lista de números y devuelve una nueva lista con el cuadrado de cada número.
function cuadradosLista(listaNumeros) {
    return listaNumeros.map(num => num ** 2);
}

// Ejemplo de uso de las funciones:

// Mostrar los lenguajes de programación.
console.log("Lenguajes de programación:");
mostrarLenguajes();

// Mostrar los lenguajes de programación en orden inverso.
console.log("\nLenguajes de programación en orden inverso:");
mostrarLenguajesInverso();

// Calcular el promedio de una lista de números.
let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log(`\nPromedio de la lista ${numeros}: ${promedio}`);

// Mostrar el número más grande y el número más pequeño en una lista.
mostrarMayorYMenor(numeros);

// Devolver la suma de todos los elementos en una lista.
let suma = sumaLista(numeros);
console.log(`\nSuma de la lista ${numeros}: ${suma}`);

// Devolver la posición de un elemento en una lista.
let elemento = 30;
let posicion = buscarElemento(numeros, elemento);
console.log(`\nPosición del elemento ${elemento} en la lista ${numeros}: ${posicion}`);

// Sumar dos listas elemento a elemento.
let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
let sumaListas = sumarListas(lista1, lista2);
console.log(`\nSuma de las listas ${lista1} y ${lista2}: ${sumaListas}`);

// Devolver una lista con el cuadrado de cada número.
let cuadrados = cuadradosLista(numeros);
console.log(`\nCuadrado de los elementos en la lista ${numeros}: ${cuadrados}`);
