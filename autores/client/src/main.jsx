import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import { router } from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
)
