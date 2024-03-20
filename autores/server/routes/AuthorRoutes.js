import { Router } from 'express'
import { AuthorController } from '../controllers/index.js'
const router = Router()

router.get('/', AuthorController.getAllAuthors)
router.get('/:_id', AuthorController.getAuthorById)
router.post('/new', AuthorController.createAuthor)
router.put('/update/:_id', AuthorController.updateAuthorById)
router.delete('/delete/:_id', AuthorController.deleteAuthorById)

export default router