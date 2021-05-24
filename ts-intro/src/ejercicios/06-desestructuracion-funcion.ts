/** DESESTRUCTURACIÓN DE ARGUMENTOS */

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calcularISV( productos: Producto[] ):[number,number]{
    let total = 0;

    // Forma normal
    // productos.forEach( (producto) => {
    //     total += producto.precio;
    // })

    // return total * 0.15;

    /** DESESTRUCTURACIÓN */
    productos.forEach( ({precio}) => {
        total += precio;
    })


    // como devolvemos un arreglo, lo podemos desestructurar más abajo para obtener 2 valores diferentes con los consoles
    return [total,total * 0.15];
}

// const listadoProductos = [ telefono, tableta];

// const [total, isv] = calcularISV(listadoProductos);

// console.log('Total:', total);
// console.log('ISV:', isv);