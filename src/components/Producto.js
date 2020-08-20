import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const Producto = ({producto}) => {
    return ( 
        <TableRow>
            <TableCell>{producto.nombre}</TableCell>
            <TableCell>{producto.precio}</TableCell>
            <TableCell>Borrar</TableCell>
        </TableRow>
     );
}
 
export default Producto;