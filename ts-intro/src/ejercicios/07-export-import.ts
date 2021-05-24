/** IMPORTACIONES Y EXPORTACIONES */

import { calcularISV, Producto } from "./06-desestructuracion-funcion";


const carritoCompra: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total, isv] = calcularISV(carritoCompra);

console.log('Total:', total);
console.log('ISV:', isv);
