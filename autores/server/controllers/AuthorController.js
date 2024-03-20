import { successResponse } from "../helpers/responses.js"
import Author from "../models/Author.js"

export const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find()
        return successResponse(res, authors)
    } catch (err) {
        next(err)
    }
}

export const getAuthorById = async (req, res, next) => {
    const { _id } = req.params
    try {
        const author = await Author.findById(_id)
        return successResponse(res, author)
    } catch (err) {
        next(err)
    }
}

export const createAuthor = async (req, res, next) => {
    try {
        await Author.create(req.body)
        return successResponse(res, "Author created successfully", 201)
    } catch (err) {
        next(err)
    }
}

export const updateAuthorById = async (req, res, next) => {
    const { _id } = req.params
    try {
        await Author.findByIdAndUpdate(_id, req.body, { new: true })
        return successResponse(res, "Author updated successfully", 203)
    } catch (err) {
        next(err)
    }
}

export const deleteAuthorById = async (req, res, next) => {
    const { _id } = req.params
    try {
        await Author.findByIdAndDelete(_id)
        return successResponse(res, "Author deleted successfully")
    } catch (err) {
        next(err)
    }
}