import React from 'react';
import { Link } from "react-router-dom";

export const PokemonIndexItem = (props) =>{
    return(
    <li key={`${props.pokemon.id}0`}>
        <Link to={`/pokemon/${props.pokemon.id}`}><img src={props.pokemon.image_url} width="20" height="20"></img>
        {props.pokemon.name}</Link> 
    </li>
    )
}