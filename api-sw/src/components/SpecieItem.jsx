import { NotFound } from "./NotFound"

export const SpecieItem = ({
	name,
	classification,
	designation,
	average_height,
    skin_colors,
    detail = ''
}) => {
	return (
		<div className='py-8 px-4 md:px-12 bg-gray-800 border-spacing-2 border-2 rounded-md border-gray-400'>
			{detail ? (
				<NotFound />
			) : (
				<>
					<h2 className='text-2xl'>{name}</h2>
					<p>Classification: {classification}</p>
					<p>Designation: {designation}</p>
					<p>Average Height: {average_height}</p>
					<p>Skin Colors: {skin_colors}</p>
				</>
			)}
		</div>
	)
}
