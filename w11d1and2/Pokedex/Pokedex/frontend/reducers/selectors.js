export const selectAllPokemon = (state) =>{
    let res = Object.values(state.entities.pokemon)
    return res;
}