import React, { Fragment, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { editarProductoAction } from '../actions/productoActions';

const EditarProducto = () => {
    //--------------------------------------------------------------------------------------------------------------------
    //Estilos de los componentes materialUI

    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(1),
        },
        typografy: {
            paddingTop: '30px',
            
        },
        general: {
            marginTop: '10px',
            paddingLeft: '30px',
            paddingRight: '30px',
            paddingBottom: '30px',
        },
        boton: {
            marginTop: '30px',
        },
        imputs: {
            marginTop: '10px',
        }
      }));
      const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();

    // nuevo state de producto
    const [ producto, guardarProducto] = useState({
        nombre: '',
        precio: '' 
    })

    // producto a editar
    const productoeditar = useSelector(state => state.productos.productoeditar);
  
    // llenar el state automaticamente
    useEffect( () => {
        guardarProducto(productoeditar);
    }, [productoeditar]);

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }


    const { nombre, precio} = producto;

    const submitEditarProducto = e => {
        e.preventDefault();

        dispatch( editarProductoAction(producto) );
    
        history.push('/');
    }
    
    return ( 
        <Fragment>
            <Container maxWidth="sm">
                <Paper className={classes.general} elevation={3}>
                <Typography className={classes.typografy} variant="h6"> Editar producto</Typography>
                    <form className={classes.root} onSubmit={submitEditarProducto}>
                        <TextField fullWidth className={classes.imputs}  id="nombre" label="Nombre del producto" helperText="Nombre del producto" name="nombre" value={nombre} onChange={onChangeFormulario}/>
                        <TextField fullWidth className={classes.imputs}  id="precio" label="Precio del producto" helperText="Precio del producto" name="precio" type="number" value={precio} onChange={onChangeFormulario}/>
                        <Button className={classes.boton} variant="contained" type="submit">Editar Producto</Button>
                    </form>
                </Paper>
            </Container>
        </Fragment>
        
     );
}
 
export default EditarProducto;