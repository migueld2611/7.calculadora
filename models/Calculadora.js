/** 
 * nombre de la clase calculadora
 * propiedades: numero1, numero2
 * metodos: calcular las operaciones +, -, *, */
export default class Calculadora {

    constructor(numero1, numero2) {
        this.numero1 = numero1; 
        this.numero2 = numero2;
        this. operacion = "+, -, *, * ";
    }
    set numero1(numero1) {
        this._numero1 = numero1;
    }
    get numero1() {
        return this._numero1;
    }
    set numero2(numero2) {
        this._numero2 = numero2;
    }
    get numero2() {
        return this._numero2;
        
    }
    set operacion(operacion) {
        this._operacion = operacion;
    }
    get operacion() {
        return this._operacion;
    }

    //metodos calculaer el total
    //sumar, restar, multiplicar, dividir
    sumar() {   
        return this._numero1 + this._numero2;
    }
    restar() {   
        return this._numero1 - this._numero2;
    }   
    multiplicar() {   
        return this._numero1 * this._numero2;
    }           
    dividir() {   
        return this._numero1 / this._numero2;
    }   
 


}