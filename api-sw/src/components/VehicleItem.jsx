import { NotFound } from "./NotFound"

export const VehicleItem = ({
	name,
	model,
	vehicle_class,
	manufacturer,
    length,
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
					<p>Vehicle class: {vehicle_class}</p>
					<p>Manufacturer: {manufacturer}</p>
					<p>Length: {length}</p>
				</>
			)}
		</div>
	)
}
