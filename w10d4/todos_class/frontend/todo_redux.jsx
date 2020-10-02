import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
    
    const root = document.getElementById("content");
    ReactDOM.render(<h1> test!! </h1>, root);
    const store = configureStore();
    window.store = store;
});

// window.store.getState() in the console