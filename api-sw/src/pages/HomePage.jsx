import React, { useEffect, useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css'
import {
	FilmItem,
	PeopleItem,
	PlanetItem,
	SpecieItem,
	VehicleItem,
	NotFound,
	Form
} from '../components'
import { StarshipItem } from '../components/StarshipItem'
import { apiURL } from '../helpers/helpers'
import { useForm } from '../hooks/useForm'

export const HomePage = () => {
	const [swapiAttributes, setSwapiAttributes] = useState([])
	const [swapiResults, setSwapiResults] = useState(0)
	const { resource, id, handleChange, resetForm } = useForm({
		resource: '',
		id: ''
	})
	const { key, data } = swapiResults
	const handleFormSubmit = async (e) => {
		e.preventDefault()
		if (resource.length > 0 && id.length > 0) {
			const resp = await fetch(`${apiURL}/${resource}/${id}`)
			const data = await resp.json()
			setSwapiResults({
				key: resource,
				data
			})
			resetForm()
		} else {
			toast.error("Fields are required")
		}
	}
	const getSwapiAttributes = async () => {
		const resp = await fetch(apiURL)
		const data = await resp.json()
		setSwapiAttributes(Object.keys(data))
	}
	useEffect(() => {
		getSwapiAttributes()
	}, [])
	return (
		<div className='grid place-items-center w-full min-h-full py-12'>
			<h1 className='text-5xl'>BID Luke API Walker</h1>
			<Form
				id={id}
				resource={resource}
				handleChange={handleChange}
				handleFormSubmit={handleFormSubmit}
				swapiAttributes={swapiAttributes}
			/>
			<div className='grid grid-cols-1 grid-flow-row-dense px-12 my-8'>
				{swapiResults !== 0 ? (
					key === 'people' ? (
						<PeopleItem {...data} />
					) : key === 'planets' ? (
						<PlanetItem {...data} />
					) : key === 'films' ? (
						<FilmItem {...data} />
					) : key === 'species' ? (
						<SpecieItem {...data} />
					) : key === 'vehicles' ? (
						<VehicleItem {...data} />
					) : key === 'starships' ? (
						<StarshipItem {...data} />
					) : (
						<NotFound />
					)
				) : (
					<p>Realice una busqueda para obtener resultados...</p>
				)}
			</div>
			<p>Development by: Coding Dojo</p>
			<p className='read-the-docs'>
				Worked with{' '}
				<a href='https://swapi.dev/' className='underline' target='_blank'>
					SWAPI
				</a>
			</p>
			<ToastContainer />
		</div>
	)
}
