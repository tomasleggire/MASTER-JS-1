////////////////////////////////////////////////PROTOTIPOS/////////////////////////////////////////
//Cuando creamos una funcion, el prototipo lo creamos nosotros.
//Si queremos acceder a un prototipo heredado usamos (variable.__proto__).
//Si queremos acceder a un prototipo que creamos nosotros usamos (variable.prototype).

//Como modificar una funcion de un objeto:
                                                       /*
class Objeto {
    constructor(){};
    hablar(){
        console.log("hola");
    }
}

const objeto = new Objeto();

objeto.__proto__.hablar = ()=>{
    console.log("modificado afuera");
}

console.log(objeto); 

                                                        */

///////////////////////////////////////////////STRICT MODE//////////////////////////////////////////////////
//Es una buena practica usar el stric mode.
//Convierte los errores en exepciones, y las exepciones no ejecutan el programa.
//Solo funciona al principio del programa o al principio de una funcion
                                                         /*
"use strict";
                                                          */

//////////////////////////////////////////////FUNCIONES FLECHAS/////////////////////////////////////////////
//Si es una funcion de una sola expresion y no esta dentro de llaves, retorna el valor.
                                                          /*
const saludar = ()=> nombre = "pito";

resultado = saludar();

console.log(resultado); 
                                                           */

//No pueden ser usadas como constructores

/////////////////////////////////////////  this  /////////////////////////////////////////////////////////
//afuera de cualquier funcion, this hace referencia a windows.
                                                        /*
console.log(this);
                                                        */
                                                    
// this dentro de un objeto hace referencia al objeto que lo este llamando.
                                                         /*
function saludar() {
    console.log(`Hola ${this.nombre}`);
}

const objeto = {
    nombre : "lucas",
    saludar : saludar
}

objeto.saludar();
                                                           */

/////////////////////////////////////////FUNCIONES RECURSIVAS//////////////////////////////////////
//Cuando una funcion se llama si misma.
                                                             
//"strict mode";
                                                           /*
const validarEdad = (msg)=>{
    let edad;
    try {
        if (msg) edad = prompt(msg);
        else edad = prompt("Introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "Introduce un numero para la edad";
        if (edad > 18) console.log("Sos mayor de edad");
        else console.log("Sos menos de edad");
    } catch(e) {
        validarEdad(e);
    }
}

validarEdad();
                                                           */

//Clausulas o cierres: 
                                                              /*
const cambiarTamaño = (tamaño) =>{
    return ()=>{
        document.querySelector(".texto").style.fontSize = `${tamaño}px`;
    }
}

px12 = cambiarTamaño(12);
px14 = cambiarTamaño(14);
px16 = cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click",px12);
document.querySelector(".t14").addEventListener("click",px14);
document.querySelector(".t16").addEventListener("click",px16);
                                                            */


//Parametro rest (...)
                                                            /*
const suma = (frase,...num) => {
    let resultado = 0;
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];
    }
    console.log(`${frase} ${resultado}`);
}

suma("pedro",12,33,44,5,3);
                                                                 */

//Operador condicional (Ternario): 
                                                               /*
let edad = 25;

if (edad > 18) console.log("Es mayor de edad");
else console.log("Es menor de edad");

//Primero se comprueba si es true o false, si es true ejecuta el ? y si es falso, ejecuta los ":"

(edad > 18) ? console.log("es mayor de edad")
            : console.log("es menor de edad");
                                                               */

//Operador Spread (spread operator):

"use strict";
                                                       /*
let arr = ["valor1","valor2","valor3"];

console.log(...arr); //Desestructura el array.
                                                         */
//Usos : 
                                                  /*
let arr = ["manzana","pera","banana"];
let arr2 = ["naranja","wiki"];

arr.push(...arr2);

console.log(arr);
                                                  */
                                                           /*
let arr = ["manzana","pera","banana"];
let arr2 = ["naranja","wiki"];

let arr3 = [...arr,...arr2];

console.log(arr3); 
                                                               */

const sumar = (num1,num2) => {
    console.log(num1 + num2);
}

let arr = [3,6];

sumar(...arr);