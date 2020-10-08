import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import configureStore from "./store/store"
import Root from "./components/root"
import {receiveAllPokemon,requestAllPokemon,receiveSinglePokemon,requestSinglePokemon} from './actions/pokemon_actions'
// import {fetchAllPokemon} from './util/api_util'
// import {selectAllPokemon} from "./reducers/selectors"

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, rootEl);
    window.receiveSinglePokemon = receiveSinglePokemon;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.requestSinglePokemon = requestSinglePokemon
});