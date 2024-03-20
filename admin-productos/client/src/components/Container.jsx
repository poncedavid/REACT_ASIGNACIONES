import React from 'react'
import { Box } from '@chakra-ui/react'

const Container = ({ children }) => {
	return (
		<Box w={{ sm: '100%', md: '60%', lg: '50%' }} mx='auto' p={4} my={8}>
			{children}
		</Box>
	)
}

export default Container
