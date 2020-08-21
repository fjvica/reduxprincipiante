import React, { Fragment, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

import Producto from '../components/Producto';


const Productos = () => {

    const useStyles = makeStyles((theme) => ({
        general: {
            marginTop: '10px',
        },
        titulo: {
            marginTop: '10px',
            marginBottom: '10px',
        }
      }));
      const classes = useStyles();
//----------------------------------------------------------------------------------------------------

    const dispatch = useDispatch();
    
      useEffect( () => {
        //Consultar la api
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
      }, []);

      //Obtener state
      const productos = useSelector(state => state.productos.productos );
    
    return ( 
        <Fragment>
            <Container maxWidth="md" className={classes.general}>
                <Typography className={classes.titulo} variant="h6" align={'center'}>Listado de productos</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell width="30%" align="center">Nombre</TableCell>
                        <TableCell width="30%" align="center">Precio</TableCell>
                        <TableCell width="30%" align="center">Acciones</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto =>(
                            <Producto
                            key={producto.id}
                            producto={producto}
                            />
                        ))
                    ) }
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </Fragment>
     );
}
 
export default Productos;