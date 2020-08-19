import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'


const Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        link: {
         
        },
      }));

      const classes = useStyles();

    return ( 
        <AppBar position="sticky">
        <Toolbar >
          <Typography className={classes.menuButton} variant="h6">
            <Link to={'/'} style={{ textDecoration: 'none', color:"white" }}>Redux</Link>
          </Typography>
          <Typography>
          <MenuItem component={Link} to={'/productos/nuevo'}>Crear un producto</MenuItem>
           </Typography>
        </Toolbar>
      </AppBar>
     );
}
 
export default Navbar;