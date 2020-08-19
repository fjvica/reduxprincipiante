import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';


const Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
         
        },
      }));

      const classes = useStyles();

    return ( 
        <AppBar position="sticky">
        <Toolbar >
          <Typography className={classes.menuButton} variant="h6">
            Redux
          </Typography>
          <Typography>
            <MenuItem>Crear un producto</MenuItem>
           </Typography>
        </Toolbar>
      </AppBar>
     );
}
 
export default Navbar;