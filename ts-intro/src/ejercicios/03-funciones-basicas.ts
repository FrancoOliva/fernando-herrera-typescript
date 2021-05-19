// javascript
// recibe 2 parámetros (a,b) que pueden ser de cualquier tipo ya que no estan especificados

// function sumar (a, b){
//     return a+b;
// }
// const resultado = sumar('Franco',' Oliva');
// console.log(resultado);

// typescript
function sumar (a:number, b:number):number{
    return a + b;
}
// const resultado = sumar('Franco',' Oliva'); -> error: el tipo string no es asignable al tipo number
const resultado = sumar(10,20);
// console.log(resultado);

// arrow function
const sumarFlecha = (a:number, b:number):number => { return a + b; } // esto hace exactamente lo mismo que la función de arriba
const resultado2 = sumarFlecha(100,150);
//console.log(resultado2);

// parametros opcionales
// parametros obligatorios, opcionales, por defecto

function multiplicar(numero:number, otroNumero?:number, base:number = 2):number{
    return numero * base;
}

// const resultado3 = multiplicar( 5, 0, 10 );
// console.log(resultado3);


/** FUNCIONES CON OBJETOS COMO PARÁMETROS */
interface PersonajeEj {
    nombre: string;
    pv: number;

    mostrarHp: () => void;
}

function curar(personaje:PersonajeEj, curarX:number):void {
    personaje.pv += curarX;
    
    console.log(personaje);
}

const nuevoPersonaje: PersonajeEj = {
    nombre: 'Franco',
    pv: 50,

    mostrarHp(){ console.log('Puntos de vida', this.pv) }
}

curar(nuevoPersonaje, 30);
nuevoPersonaje.mostrarHp();