import { Router } from 'express'
import AuthorRoutes from './AuthorRoutes.js'
const router = Router()

router.use('/authors', AuthorRoutes)

export default router