import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

// test import
import * as SessionUtil from "./util/session_api_util";
import { login, logout, signUp } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);

    // Test Section

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signUp = signUp;
    window.login = login;
    window.logout = logout;
});
