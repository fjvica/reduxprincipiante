import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Productos}></Route>
        <Route exact path="/productos/nuevo" component={NuevoProducto}></Route>
        <Route exact path="/productos/editar/:id" component={EditarProducto}></Route>
      </Switch>
      </Provider>
    </Router>
  );
}

export default App;
