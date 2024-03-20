import React from 'react'

export const InfoBlock = ({label, data}) => {
	return (
		<div className='bg-gray-500 p-4 text-center rounded flex flex-col items-center'>
			<span className='font-bold'>label</span>
			<span>{data}</span>
		</div>
	)
}
