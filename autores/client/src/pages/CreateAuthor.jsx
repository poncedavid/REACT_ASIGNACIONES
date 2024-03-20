import React from 'react'
import { Link } from 'react-router-dom'
import FormComponent from '../components/FormComponent'
import Layout from '../components/Layout'

const CreateAuthor = () => {
	return (
		<Layout>
			<Link
				to='/'
				className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm'>
				Go to Home
			</Link>
			<p>Add a new author:</p>
			<FormComponent />
		</Layout>
	)
}

export default CreateAuthor
