import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../services/products.services'
import Container from './Container'
import Form from './Form'

const ProductEdit = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    const loadProduct = async () => {
        const productData = await getProductById(id)
        setProduct( productData )
    }

    const handleGoBack = () => navigate(-1)

    useEffect(() => {
        loadProduct()
    }, [])

    return (
			<Container>
				<Heading as='h1' textAlign='center'>
					Product Edit
				</Heading>
				<Form product={product} />
			</Container>
		)
}

export default ProductEdit
