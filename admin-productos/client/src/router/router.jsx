import {
	createBrowserRouter,
	Route,
	Link
} from 'react-router-dom'
import App from '../App'
import ProductDetail from '../components/ProductDetail'
import ProductEdit from '../components/ProductEdit'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/:id',
        element: <ProductDetail />,
    },
    {
        path: '/:id/edit',
        element: <ProductEdit />
    }
])
