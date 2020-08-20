import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO
} from '../types/index';

//Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: false,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTOS:
            return{
                ...state,
                loading: action.payload,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                error: false,
                productos: [...state.productos, action.payload]
            }
            case AGREGAR_PRODUCTO_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: action.payload,
                    productos: [...state.productos, action.payload]
            }
            case DESCARGA_PRODUCTOS_EXITO:
                return{
                    ...state,
                    loading: false,
                    error: false,
                    productos: action.payload
            }
            case DESCARGA_PRODUCTOS_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: action.payload,
            }
        default:
            return state;
    }
}