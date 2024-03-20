import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { router } from './router/router'
import App from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider>
			<ToastContainer />
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</ChakraProvider>
)
