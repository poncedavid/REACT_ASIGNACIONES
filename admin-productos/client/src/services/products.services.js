export const createProduct = async (data) => {
    const resp = await fetch('http://localhost:4000/api/products/new', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
    const {data: message} = await resp.json()
    return message
}

export const getProducts = async () => {
    const resp = await fetch('http://localhost:4000/api/products/')
    const {data} = await resp.json()
    return data
}

export const getProductById = async (id) => {
    const resp = await fetch(`http://localhost:4000/api/products/${id}`)
    const { data } = await resp.json()
    return data
}

export const updateProduct = async (id, data) => {
    const resp = await fetch(`http://localhost:4000/api/products/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
    const {data: message} = await resp.json()
    return message
}

export const deleteProduct = async (id) => {
    const resp = await fetch(`http://localhost:4000/api/products/delete/${id}`, {
        method: 'DELETE'
    })
    const { data } = await resp.json()
    return data
}