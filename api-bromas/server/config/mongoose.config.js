import mongoose from "mongoose"

mongoose.set('strictQuery', false)

export const mongooseConnection = () => {
    try {
        mongoose.connect(process.env.CONNECTION_URI)
    } catch (err) {
        console.log(`Error at the mongoose connect database: ${err}`)
    }
}