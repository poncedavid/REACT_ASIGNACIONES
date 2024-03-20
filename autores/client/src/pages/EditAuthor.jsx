import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FormComponent from '../components/FormComponent'
import Layout from '../components/Layout'
import { getAuthorByIdService } from '../services/author.service'

const EditAuthor = () => {
    const { id } = useParams()
    const [author, setAuthor] = useState({})
    const loadAuthor = async (id) => {
        const authorData = await getAuthorByIdService(id)
        setAuthor(authorData)
    }
    useEffect(() => {
        loadAuthor(id)
    }, [id])
	return (
		<Layout>
			<Link
				to='/'
				className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm'>
				Go to Home
			</Link>
			<p>Edit this author:</p>
			<FormComponent author={author} />
		</Layout>
	)
}

export default EditAuthor
