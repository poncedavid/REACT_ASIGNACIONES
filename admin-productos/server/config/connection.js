import mongoose from 'mongoose'

mongoose.set('strictQuery', false)
export const databaseConnection = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
    } catch (err) {
        console.log(`Error at the database connection: ${err}`)
    }
}