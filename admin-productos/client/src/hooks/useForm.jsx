import {useState} from 'react'

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const resetForm = () => setValues(initialState)
    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return { ...values, values, handleChange, resetForm, setValues }
}

export default useForm