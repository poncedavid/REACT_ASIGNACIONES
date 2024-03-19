import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'// 
import { capitalizeTransform } from '../helpers/helpers'

export const Form = ({ resource, id, handleChange, handleFormSubmit, swapiAttributes }) => { // Componente de formulario para buscar recursos en la API

	return (
		<form
			className='flex flex-col md:flex-row items-center justify-between my-8 gap-12'
			onSubmit={handleFormSubmit}
			>

			<div className='flex items-center'>

				<label 
				htmlFor='resource' 
				className='flex items-center mr-2'>
				Search for <BiFilterAlt />:{' '}
				</label>

				<select
					name='resource'
					className='py-2 px-4 rounded'
					value={resource}
					onChange={handleChange}>

					<option 
					value=''
					>Select a resource
					</option>

					{swapiAttributes.map((attribute, idx) => {

						const label = capitalizeTransform(attribute)

						return (
							<option value={attribute} key={idx}>

								{label}

							</option>
						)
					})}
				</select>
			</div>

			<div className='flex items-center'>

				<label 
				htmlFor='id'
				>Id: 
				</label>
				
				<input
					type='number'
					name='id'
					className='py-2 px-4 rounded w-40 ml-2'
					value={id}
					onChange={handleChange}
					min={0}
					placeholder='Enter a number'
				/>
				<button
					type='submit'
					className='py-2 px-4 bg-emerald-300 text-gray-900 font-bold rounded ml-4 hover:bg-emerald-400 flex items-center'>
					<BiSearchAlt /> Search
				</button>
			</div>
		</form>
	)
}
