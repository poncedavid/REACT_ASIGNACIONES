import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { InfoBlock } from '../components'
import { apiURL } from '../helpers/helpers'

export const PersonPage = () => {
	const [people, setPeople] = useState({})
	const [homeworld, setHomeworld] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()
	const getPeopleById = async () => {
		const resp = await fetch(`${apiURL}/people/${id}`)
		const data = await resp.json()
		setPeople(data)
		getHomeworld(data.homeworld)
	}

	const getHomeworld = async (url) => {
		const resp = await fetch(url)
		const data = await resp.json()
		setHomeworld(data);
	}
	const goBack = () => {
		navigate(-1)
	}
	useEffect(() => {
		getPeopleById()
	}, [])
	return (
		<div className='min-h-full grid place-items-center my-8'>
			<div className='bg-gray-700 rounded p-8 w-4/5 md:w-2/4 shadow'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<h1 className='text-4xl'>{people.name}</h1>
					<button
						type='button'
						className='bg-gray-800 flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-900'
						onClick={goBack}>
						<BiArrowBack /> Volver atras
					</button>
				</div>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8'>
					<InfoBlock label='Height' data={people.height} />
					<InfoBlock label='Mass' data={people.mass} />
					<InfoBlock label='Hair Color' data={people.hair_color} />
					<InfoBlock label='Skin Color' data={people.skin_color} />
				</div>
				<h3 className='text-3xl'>Homeworld</h3>
				<h4 className='text-2xl my-4'>{homeworld.name}</h4>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8'>
					<InfoBlock label='Rotation Period' data={homeworld.rotation_period} />
					<InfoBlock label='Climate' data={homeworld.climate} />
					<InfoBlock label='Diameter' data={homeworld.diameter} />
					<InfoBlock label='Terrain' data={homeworld.terrain} />
				</div>
			</div>
		</div>
	)
}
