import { Router } from "express"
import JokeRoutes from './jokeRoutes.js'
const router = Router()

router.use('/jokes', JokeRoutes)

export default router