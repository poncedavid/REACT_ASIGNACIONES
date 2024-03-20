import { JokeModel } from "../models/index.js"

export const getJokes = async (req, res) => {
    try {
        const jokes = await JokeModel.find()
        return res.json({jokes})
    } catch (err) {
        console.log(err)
    }
}

export const randomJoke = async (req, res) => {
    try {
        const jokeCount = await JokeModel.count()
        const random = Math.floor(Math.random() * jokeCount)
        const joke = await JokeModel.findOne().skip(random)
        return res.json({ joke })
    } catch (err) {
        console.log(err)
    }
}

export const getSingleJoke = async (req, res) => {
    const { _id } = req.params
    try {
        const joke = await JokeModel.findById(_id)
        return res.json({joke})
    } catch (err) {
        console.log(err)
    }
}

export const createNewJoke = async (req, res) => {
    try {
        const joke = await JokeModel.create(req.body)
        return res.status(201).json({
            message: 'New joke created succesfully',
            joke
        })
    } catch (err) {
        console.log(err)
    }
}

export const updateJoke = async (req, res) => {
    const { _id } = req.params
    try {
        const joke = await JokeModel.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        return res.json({
            message: 'Joke was updated',
            joke
        })
    } catch (err) {
        console.log(err)
    }
}

export const deleteJoke = async (req, res) => {
    const { _id } = req.params
    try {
        await JokeModel.findByIdAndDelete(_id)
        return res.json({
            message: 'Joke was deleted'
        })
    } catch (err) {
        console.log(err)
    }
}