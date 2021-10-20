import { Router } from 'express'
import { authenticateControllers } from '../useCases/AuthenticateUserUseCase'
import { messageControllers } from '../useCases/CreateMessageUseCase'
import { AuthMiddleware } from '../middlewares/ensureAuthenticated'
import { profileControllers } from '../useCases/ProfileUserUseCase'

const router = Router()

router.get('/authenticateGithub', (request, response) => authenticateControllers.submit(request, response))
router.post('/signin/callback', (request, response) => authenticateControllers.handle(request, response))
router.get('/messages/3', (request, response) => messageControllers.execute(request, response))

router.use(AuthMiddleware)
router.post('/messages', (request, response) => messageControllers.handle(request, response))
router.get('/profile', (request, response) => profileControllers.index(request, response))
export default router
