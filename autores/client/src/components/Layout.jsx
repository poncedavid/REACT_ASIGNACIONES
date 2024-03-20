import React from 'react'

const Layout = ({children}) => {
	return (
		<div className='container mx-auto my-6 md:12 lg:px-48 p-8 md:p-4 lg:p-0'>
            <h1 className='text-4xl font-semibold mb-4'>Favorite authors</h1>
            {children}
		</div>
	)
}

export default Layout
