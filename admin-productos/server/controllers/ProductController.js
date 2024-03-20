import { successResponse } from "../helpers/responses.js"
import Product from "../models/Product.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        return successResponse(req, res, products)
    } catch (err) {
        console.log(err)
    }
}

export const getProductById = async (req, res) => {
    const { _id } = req.params
    try {
        const product = await Product.findById(_id)
        return successResponse(req, res, product)
    } catch (err) {
        console.log(err)
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        return successResponse(req, res, "Product was created successfully", 201)
    } catch (err) {
        console.log(err)
    }
}

export const updateProduct = async (req, res) => {
    const { _id } = req.params
    try {
        const product = await Product.findByIdAndUpdate(_id, req.body, { new: true })
        return successResponse( req, res, "Product was updated successfully", 302 )
    } catch (err) {
        console.log(err)
    }
}

export const deleteProduct = async (req, res) => {
    const { _id } = req.params
    try {
        await Product.findByIdAndDelete(_id)
        return successResponse( req, res, "Product was deleted successfully" )
    } catch (err) {
        console.log(err)
    }
}