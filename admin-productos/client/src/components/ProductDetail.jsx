import React, { useEffect, useState } from 'react'
import { Heading, Text, Button } from '@chakra-ui/react'
import Container from './Container'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../services/products.services'
import { EditIcon } from '@chakra-ui/icons'

const ProductDetail = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()
	const loadProduct = async () => {
		const productData = await getProductById(id)
		setProduct(productData)
	}

	const handleGoBack = () => navigate(-1)

	useEffect(() => {
		loadProduct()
	}, [])

	return (
		<Container>
			<Heading as='h1' mb={4}>
				{product.title}
			</Heading>
			<Button
				size='sm'
				onClick={handleGoBack}
				variant='outline'
				colorScheme='teal'
				mb={4}>
				Go Back
			</Button>
			<Text fontSize='2xl'>Price: $ {product.price}</Text>
			<Text fontSize='1xl'>Description: {product.description}</Text>
			<Heading as='h4' my={4} size='md'>
				Actions
			</Heading>
			<Button colorScheme='cyan' size='sm'>
				<Link to={`/${product._id}/edit`}>
					<EditIcon /> Edit
				</Link>
			</Button>
		</Container>
	)
}

export default ProductDetail
