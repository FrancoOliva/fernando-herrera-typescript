interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalle;
}

interface Detalle {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

/**La desestructuración no es más que extraer ciertas propiedades de un objeto y crear variables */
const {volumen, segundo, cancion, detalles} = reproductor;
const { autor } = detalles;

// console.log('El volumen actual es de: ' + volumen );
// console.log('El segundo actual es de: ' + segundo);
// console.log('La canción actual es: ' + cancion);
// console.log('El autor es: ' + autor);

/**                                            Desestructuración de Arreglos */

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

/**En la desestructuración de arreglos es importante el indice, hay que nombrarlos
 * en caso de solo necesitar el valor de 'Trunks' y no los anteriores sería así:
 *  const [ , , p3] = dbz;
 * 
 * Se nombra solamente el que se va a utilizar
 */
const [p1, p2,p3] = dbz;

console.log('Personaje 1: '+ p1);
console.log('Personaje 2: '+ p2);
console.log('Personaje 3: '+ p3);