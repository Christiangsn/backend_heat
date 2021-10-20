import { AuthenticateControllers } from './AuthenticateControllers'
import { PrismaUserRepository } from '../../repositories/Prisma/PrismaUserRepository'
import { AuthenticateUserServices } from './AuthenticateServices'

const userRepository = new PrismaUserRepository()
const authenticateUserServices = new AuthenticateUserServices(userRepository)
const authenticateControllers = new AuthenticateControllers(authenticateUserServices)

export { authenticateControllers }
