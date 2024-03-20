import React, { useEffect } from 'react'
import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Box,
	Button,
	Flex
} from '@chakra-ui/react'
import { toast } from 'react-toastify'
import useForm from '../hooks/useForm'
import { createProduct, updateProduct } from '../services/products.services'
import { useNavigate } from 'react-router-dom'

let initial = {
	title: '',
	price: '',
	description: ''
}

const Form = ({ product = '' }) => {
	const { title, price, description, values, handleChange, resetForm, setValues } = useForm(initial)
	const navigate = useNavigate()
    const handleSubmit = async (e) => {
		e.preventDefault()
		let result
		if (product._id) {
			result = await updateProduct(product._id, values)
			toast.success(result)
			navigate('/')
		} else {
			result = await createProduct(values)
			toast.success(result)
		}
		resetForm()
	}

	const handleGoBack = () => {
		navigate(-1)
	}

	useEffect(() => {
		product ? setValues({
			title: product?.title || '',
			price: product?.price || '',
			description: product?.description || ''
		}) : setValues(initial)
	}, [product, setValues])

	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<FormControl my={4}>
					<FormLabel>Title</FormLabel>
					<Input
						value={title}
						onChange={handleChange}
						type='text'
						placeholder='Enter product title'
						name='title'
					/>
				</FormControl>
				<FormControl my={4}>
					<FormLabel>Price</FormLabel>
					<Input
						value={price}
						onChange={handleChange}
						type='number'
						placeholder='Enter product price'
						name='price'
					/>
				</FormControl>
				<FormControl my={4}>
					<FormLabel>Description</FormLabel>
					<Textarea
						placeholder='Enter product description'
						name='description'
						value={description}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl my={4}>
					<Flex gap={4}>
						<Button type='submit' colorScheme='teal' variant='solid'>
							{product._id ? 'Update Product' : 'Create Product'}
						</Button>
						{product._id && <Button onClick={handleGoBack} colorScheme='gray' variant='solid'>Cancel</Button>}
					</Flex>
				</FormControl>
			</form>
		</Box>
	)
}

export default Form
