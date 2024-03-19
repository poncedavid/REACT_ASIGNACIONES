import { NotFound } from './NotFound'

export const PlanetItem = ({
	name,
	rotation_period,
	orbital_period,
	diameter,
	gravity,
	detail = ''
}) => {
	return (
		<div className='py-8 px-4 md:px-12 bg-gray-800 border-spacing-2 border-2 rounded-md border-gray-400'>
			{detail ? (
				<NotFound />
			) : (
				<>
					<h2 className='text-2xl'>{name}</h2>
					<p>Rotation Period: {rotation_period}</p>
					<p>Orbital Period: {orbital_period}</p>
					<p>Diameter: {diameter}</p>
					<p>Gravity: {gravity}</p>
				</>
			)}
		</div>
	)
}
