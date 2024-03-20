import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import {
	Heading,
	Box,
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Tfoot,
    Td,
    Button
} from '@chakra-ui/react'
import { ViewIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { deleteProduct, getProducts } from '../services/products.services'

const ListProducts = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const loadProducts = async () => {
        const products = await getProducts()
        setProducts(products)
    }

    const handleDeleteProduct = async id => {
        Swal.fire({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
				}).then(async(result) => {
					if (result.isConfirmed) {
                        const result = await deleteProduct(id)
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: result,
							showConfirmButton: false,
							timer: 1500
						})
                        navigate('/')
					}
				})
    }

    useEffect(() => {
        loadProducts()
    }, [products])
	return (
		<Box my={8}>
			<Heading as='h2' fontSize='3xl' textAlign='center'>
				Products List
			</Heading>
			<TableContainer my={8}>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>Title</Th>
							<Th isNumeric>Price</Th>
							<Th>Description</Th>
							<Th>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{products?.map((product) => (
							<Tr key={product._id}>
								<Td>{product.title}</Td>
								<Td isNumeric>{product.price}</Td>
								<Td>{product.description}</Td>
								<Td>
									<Button colorScheme='gray' size='sm'>
										<Link to={`/${product._id}`}>
											<ViewIcon />
										</Link>
									</Button>
									<Button colorScheme='cyan' ml={2} size='sm'>
										<Link to={`/${product._id}/edit`}>
											<EditIcon />
										</Link>
									</Button>
									<Button onClick={() => handleDeleteProduct(product._id)} colorScheme='red' ml={2} size='sm'>
										<DeleteIcon />
									</Button>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export default ListProducts
