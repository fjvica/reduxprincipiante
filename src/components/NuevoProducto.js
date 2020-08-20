import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';


const NuevoProducto = ({history}) => {

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
//-------------------------------------------------------------------------------------------------------------------------------------

      //State del componente
      const [nombre, guardarNombre] = useState('');
      const [precio, guardarPrecio] = useState(0);

        //utilizar use dispatch y te crea una funcion
        const dispatch = useDispatch();

        //Acceder al state del storage
        const cargando = useSelector( state => state.productos.loading );
        const error = useSelector( state => state.productos.error );
        

        //Mandar llamar el action del productoAction
        const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

        //Cuando el usuario haga submit
        const submitNuevoProducto = e => {
            e.preventDefault();
            //validar form

            if(nombre.trim() === '' || precio < 0){
                return;
            }

            //Si no hay errores

            //crear nuevo producto
            agregarProducto({
                nombre,
                precio
            });
            //Redireccionar
            history.push('/');
        }

        
        

    return ( 
        <Fragment>
            <Container maxWidth="sm">
                <Paper className={classes.general} elevation={3}>
                <Typography className={classes.typografy} variant="h6"> Formulario del producto</Typography>
                    <form className={classes.root} onSubmit={submitNuevoProducto}>
                        <TextField fullWidth className={classes.imputs}  id="nombre" label="Nombre del producto" helperText="Nombre del producto" name="nombre" value={nombre} onChange={e=> guardarNombre(e.target.value)} />
                        <TextField fullWidth className={classes.imputs}  id="precio" label="Precio del producto" helperText="Precio del producto" name="precio" type="number" value={precio}  onChange={e=> guardarPrecio(Number(e.target.value))}/>
                        <Button className={classes.boton} variant="contained" type="submit">Crear Producto</Button>
                    </form>

                    { cargando ?  <Typography variant="body1">Cargando...</Typography> : null }
                    { error ? <Typography color="error" align="center" variant="body1">Ha ocurrido un error</Typography> : null}
                </Paper>
            </Container>
        </Fragment>
        
     );
}
 
export default NuevoProducto;