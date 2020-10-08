import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail'

const mapStateToProps = (state,ownProps) => {
    // const pokemon = selectAllPokemon(state)[ownProps.id]
    // const items = 
    // console.log(ownProps)
    debugger
    return ({
        
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestSinglePokemon: () => { //pokemonId?
            return dispatch(requestSinglePokemon())//pokemonId?
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);