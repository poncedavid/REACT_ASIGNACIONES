import { NotFound } from "./NotFound"

export const StarshipItem = ({
	name,
	model,
	manufacturer,
	passengers,
    crew,
    detail = ''
}) => {
	return (
		<div className='py-8 px-4 md:px-12 bg-gray-800 border-spacing-2 border-2 rounded-md border-gray-400'>
			{detail ? (
				<NotFound />
			) : (
				<>
					<h2 className='text-2xl'>{name}</h2>
					<p>Model: {model}</p>
					<p>Manufacturer: {manufacturer}</p>
					<p>Passengers: {passengers}</p>
					<p>Crew: {crew}</p>
				</>
			)}
		</div>
	)
}
