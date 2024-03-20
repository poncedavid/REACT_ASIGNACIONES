import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import alertify from 'alertifyjs'
import { deleteAuthorService } from '../services/author.service'

const ListAuthors = ({ authors }) => {
    const navigate = useNavigate()
    const handleAuthorDelete = (id) => {
		alertify.confirm(
			'Delete action',
			'Do you want delete to this author?',
			async function () {
				const result = await deleteAuthorService(id)
				alertify.success(result)
				navigate('/')
			},
			function () {
				alertify.error('Cancel')
			}
		)
    }
    return (
			<>
				<div className='flex flex-col'>
					<div className='-m-1.5 overflow-x-auto'>
						<div className='p-1.5 min-w-full inline-block align-middle'>
							<div className='overflow-hidden'>
								<table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
									<thead>
										<tr>
											<th
												scope='col'
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
												Name
											</th>
											<th
												scope='col'
												className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase'>
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{authors?.map((author) => (
											<tr
												key={author._id}
												className='odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700'>
												<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
													{author.name}
												</td>

												<td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
													<Link
														className='text-blue-500 hover:text-blue-700 mr-4'
														to={`/edit/${author._id}`}>
														Edit
													</Link>
													<button
														onClick={() => handleAuthorDelete(author._id)}
														className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-red-200 font-semibold text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
														Delete
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</>
		)
}

export default ListAuthors
