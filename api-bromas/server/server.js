import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
import { mongooseConnection } from './config/mongoose.config.js'
import routes from './routes/index.js'

mongooseConnection()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

app.listen(PORT, err => {
    err ? console.log(err) : console.log(`Server running at the port ${PORT}`)
})