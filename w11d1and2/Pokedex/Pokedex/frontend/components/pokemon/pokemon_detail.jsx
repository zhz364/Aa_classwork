import React from 'react'
import {requestSinglePokemon} from "../../action/pokemon_actions"

class PokemonDetail extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }
    render(){
        return <div>details</div>
    }
}

export default PokemonDetail