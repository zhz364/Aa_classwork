export const fetchAllPokemon = () => {
    return $.ajax({
        url: `/api/pokemon`,
        method: `get`,
    })
}

export const fetchSinglePokemon = (pokeId) => {
    return $.ajax({
        url: `/api/pokemon/${pokeId}`,
        method: `get`,
    })
}