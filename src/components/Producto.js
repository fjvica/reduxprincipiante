import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

//Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';


const Producto = ({producto}) => {
    const { nombre, precio, id } = producto;

    
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      
        const classes = useStyles();

//-----------------------------------------------------------------------------------------------------

    const dispatch = useDispatch();
    const history = useHistory(); // habilitar history para redirección

    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = id => {
        console.log("se activo la funcion eliminar")
        //pasarlo al action
        dispatch( borrarProductoAction(id) );
    }

   // función que redirige de forma programada
   const redireccionarEdicion = producto => {
   console.log(producto);
     dispatch( obtenerProductoEditar(producto) );
    history.push(`/productos/editar/${producto.id}`)
}

    return ( 
        <TableRow>
            <TableCell align="center">{producto.nombre}</TableCell>
            <TableCell align="center">€ {producto.precio}</TableCell>
            <TableCell align="center">
                <Button variant="contained" color="primary" className={classes.button}  onClick={ () => redireccionarEdicion(producto) }>
                    Modificar
                </Button>
                <Button variant="contained" className={classes.button}
                   onClick={() => confirmarEliminarProducto(id)}
                    color="secondary"
                    startIcon={<DeleteIcon />}>
                    Eliminar
                </Button>
        </TableCell>
        </TableRow>

        
     );
}
 
export default Producto;