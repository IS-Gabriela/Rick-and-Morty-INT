import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea sive para conectar nuestra App con la extension REDUX DEVTOOLS del navegador

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))// esta linea sirve ar q podamos hacer peticiones a una Api/servidor
);

export default store;