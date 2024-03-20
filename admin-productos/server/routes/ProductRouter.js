import { Router } from 'express'
import { ProductController } from '../controllers/index.js'
const router = Router()

router.get('/', ProductController.getProducts)
router.post('/new', ProductController.createProduct)
router.get('/:_id', ProductController.getProductById)
router.put('/update/:_id', ProductController.updateProduct)
router.delete('/delete/:_id', ProductController.deleteProduct)

export default router