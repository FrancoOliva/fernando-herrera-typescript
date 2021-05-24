/** CLASES 
 * 
 * Alance o visibilidad de los mismos
 * PUBLIC  = Van a poder ver esta propiedad fuera de esta clase
 * PRIVATE = Solo es visible dentro de la clase
 * STATIC  = Que se puede acceder al valor de la propiedad sin crear una instancia de la clase
*/

/** EXTENDER UNA CLASE */
class PersonaNormal {
    // nombre: string;
    // direccion: string; -> es muy raro ver que se definan las propiedades de esta forma
    constructor(public nombre:string, public direccion:string){
        
    }
}

/** UNA DIFERENCIA entre clases e interfaces es que, las interfaces, no existen en javascript */
/** En una interfaz no podemos definir set y get o como queremos que funcione un método */
class Heroe extends PersonaNormal{

    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor(public alterEgo:string, public edad:number, public nombreReal: string){ // solamente se va a llamar cuando creamos una instancia de la clase
        super(nombreReal, 'New York, USA');
    }
}

const ironman: Heroe = new Heroe('IronMan', 45, 'Tony');

console.log(ironman);