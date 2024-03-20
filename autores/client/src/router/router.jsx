import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import CreateAuthor from '../pages/CreateAuthor'
import EditAuthor from '../pages/EditAuthor'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/new',
		element: <CreateAuthor />
	},
	{
		path: '/edit/:id',
		element: <EditAuthor />
	}
])
