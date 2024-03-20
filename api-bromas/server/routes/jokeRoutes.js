import { Router } from "express"
import { JokeController } from '../controllers/index.js'
const router = Router()

router.get('/', JokeController.getJokes)
router.get('/random', JokeController.randomJoke)
router.get('/:_id', JokeController.getSingleJoke)
router.post('/new', JokeController.createNewJoke)
router.put('/update/:_id', JokeController.updateJoke)
router.delete('/delete/:_id', JokeController.deleteJoke)

export default router