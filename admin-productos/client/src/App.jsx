import React from 'react'
import { Heading } from '@chakra-ui/react'
import Form from './components/Form'
import ListProducts from './components/ListProducts'
import Container from './components/Container'


const App = () => {
  return (
    <Container>
      <Heading as='h1' textAlign='center'>Product Manager</Heading>
      <Form />
      <ListProducts />
		</Container>
	)
}

export default App