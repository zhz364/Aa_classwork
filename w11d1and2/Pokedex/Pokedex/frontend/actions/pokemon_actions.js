import * as APIUtil from "../util/api_util"
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';


export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const receiveSinglePokemon = payload => ({
    type: RECEIVE_SINGLE_POKEMON,
    payload
    // pokemon: payload.pokemon,
    // items: payload.items
})

export const requestSinglePokemon = (pokeId) => (dispatch) => (
    APIUtil.fetchSinglePokemon(pokeId)
        .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
)