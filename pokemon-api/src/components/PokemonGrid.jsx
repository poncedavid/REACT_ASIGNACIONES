import React from 'react'
import PokemonItem from './PokemonItem'
import '../styles/Pokemon.css'

const PokemonGrid = ({ pokemons }) => {
	return (
		<div className='pokemon-grid'>
			{pokemons?.map((pokemon, idx) => (
				<PokemonItem pokemon={pokemon} idx={idx} key={idx} />
			))}
		</div>
	)
}

export default PokemonGrid