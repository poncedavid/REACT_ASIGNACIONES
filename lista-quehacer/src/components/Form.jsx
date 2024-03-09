import React from 'react'

export const Form = ({handleAddTask, taskValue, setTaskValue}) => {
	return (
		<form onSubmit={handleAddTask} className='flex items-center gap-8'>
			<div className='text-left'>
				<input
					type='text'
					className='border-2 w-64 border-gray-400 rounded bg-slate-100 outline-none p-2 focus:border-teal-500'
					placeholder='Ingresa la tarea'
					name='taskValue'
					value={taskValue}
					onChange={(e) => setTaskValue(e.target.value)}
				/>
			</div>
			<button
				type='submit'
				className='py-2 border-2 border-teal-400 px-4 bg-teal-400 text-white rounded font-medium hover:bg-teal-500 hover:border-teal-500'>
				Agregar
			</button>
		</form>
	)
}
