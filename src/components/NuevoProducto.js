import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const NuevoProducto = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(1),
        },
        typografy: {
            paddingTop: '30px',
            
        },
        general: {
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

    return ( 
        <Fragment>
            <Container maxWidth="sm">
                <Paper className={classes.general} elevation={3}>
                <Typography className={classes.typografy} variant="h6"> Formulario del producto</Typography>
                    <form className={classes.root}>
                        <TextField fullWidth className={classes.imputs}  id="nombre" label="Nombre del producto" helperText="Nombre del producto" name="nombre" />
                        <TextField fullWidth className={classes.imputs}  id="precio" label="Precio del producto" helperText="Precio del producto" name="precio" type="number" />
                        <Button className={classes.boton} variant="contained" type="submit">Crear Producto</Button>
                    </form>
                </Paper>
            </Container>
        </Fragment>
        
     );
}
 
export default NuevoProducto;