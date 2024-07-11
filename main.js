import calculadora from "./models/Calculadora.js";
import ICalculadora from "./models/ICalculadora.js";

let interfaz = new ICalculadora();
let numero1 = interfaz.numero1 = interfaz.leernumero1();
let numero2 = interfaz.leernumero2();

let calculadora = new calculadora(numero1, numero2, operacion);

let salida = document.querySelector('#salida')

salida.innerText = interfaz.salida(calculadora.numero1, calculadora.numero2, calculadora.operacion, calculadora.calculareltotal() )

