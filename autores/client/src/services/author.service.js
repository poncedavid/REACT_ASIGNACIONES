export const getAuthorsService = async () => {
    try {
        const resp = await fetch('http://localhost:4000/api/authors')
        const { data:authors } = await resp.json()
        return authors
    } catch (err) {
        console.error(err)
    }
}


export const createAuthorService = async (formValues) => {
    try {
        const resp = await fetch('http://localhost:4000/api/authors/new', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formValues)
        })
        const result = await resp.json()
        return result
    } catch (err) {
        console.error(err.message)
    }
}

export const getAuthorByIdService = async (id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/authors/${id}`)
        const { data } = await resp.json()
        return data
    } catch (err) {
        console.error(err)
    }
}

export const updateAuthorService = async (id, formValues) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/authors/update/${id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formValues)
        })
        const result = await resp.json()
        return result
    } catch (err) {
        console.error(err)
    }
}

export const deleteAuthorService = async (id) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/authors/delete/${id}`, {method: 'DELETE'})
        const { data } = await resp.json()
        return data
    } catch (err) {
        console.error(err)
    }
}