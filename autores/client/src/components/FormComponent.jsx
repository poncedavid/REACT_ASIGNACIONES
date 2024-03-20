import { useEffect } from 'react'
import alertify from 'alertifyjs'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createAuthorService, updateAuthorService } from '../services/author.service'

const FormComponent = ({ author = '' }) => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            name: ''
        }
    })

	const resultFeedback = result => {
		return result.success
			? alertify.success(result.data)
			: alertify.error(result.message)
	}

	const onSubmit = async (data) => {
		console.log(errors)
        if (author._id) {
			const result = await updateAuthorService(author._id, data)
			resultFeedback(result)
            navigate('/')
            return
        } else {
			const result = await createAuthorService(data)
            navigate('/')
			resultFeedback(result)
            return
        }
    }

    const defineValues = (prop) => {
        let defaultValues = {}
        if (prop) {
            defaultValues.name = prop.name
            reset({ ...defaultValues })
        }
    }

    const handleGoBack = () => navigate(-1)

    useEffect(() => {
        defineValues(author)
	}, [author])

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor='name' className='block text-sm font-medium mb-2'>
					Name
				</label>
				<input
					{...register('name', { required: true })}
                    className='py-3 px-4 block w-full lg:w-96 border-gray-500 outline-none border-2 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 mb-2'
                    placeholder='Enter author name'
				/>
				{errors.name && <span className='block mb-4 text-red-500'>This field is required</span>}
			</div>
			<button
				type='button'
				className='py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 mr-4'
				onClick={handleGoBack}>
				Cancel
			</button>
			<button
				type='submit'
				className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
				Submit
			</button>
		</form>
	)
}
export default FormComponent
