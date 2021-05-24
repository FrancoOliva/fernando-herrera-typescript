/**ENCADENAMIENTO OPCIONAL */

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Franco'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}



function imprimeHijos( pasajero:Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0; // el ? intenta seguir con lo que sigue siempre que sea seguro y, en el caso de no tener valores, es undefine
    console.log(cuantosHijos);
}

imprimeHijos( pasajero2 );