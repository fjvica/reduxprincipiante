import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO
} from '../types/index';
import clienteAxios from '../config/axios';

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            //Insertar en la api
            await clienteAxios.post('/productos', producto);
            //si todo sale bien
            dispatch( agregarProductoExito(producto) );
        } catch (error) {
            console.log(error);
            //Si hay un error cambiar el state
            dispatch( agregarProductoError(true) );
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//Si el produto se guarda en la bbdd 
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
//Si hubo un error

const agregarProductoError = (estado) =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Funcion que descarga los productos de la bbdd
export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch( descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('/productos')
            dispatch( descargaProductosExitosa(respuesta.data) )
        } catch (error) {
            dispatch( descargaProductosErronea(true) )
        }
    }
}

const descargarProductos = () =>({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})
const descargaProductosErronea = error => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: error
})