import React from 'react'
import { NotFound } from './NotFound'

export const PeopleItem = ({ name, height, mass, hair_color, skin_color, detail = '' }) => {
	return (
		<div className='py-8 px-4 md:px-12 bg-gray-800 border-spacing-2 border-2 rounded-md border-gray-400'>
			{detail ? (
				<NotFound />
			) : (
				<>
					<h2 className='text-2xl'>{name}</h2>
					<p>Height: {height}</p>
					<p>Mass: {mass}</p>
					<p>Hair Color: {hair_color}</p>
					<p>Skin Color: {skin_color}</p>
				</>
			)}
		</div>
	)
}
