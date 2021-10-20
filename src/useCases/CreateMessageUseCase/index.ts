import { PrismaUserRepository } from '../../repositories/Prisma/PrismaMessageRepository'
import { MessageServices } from './MessageServices'
import { MessageControllers } from './MessageControllers'

const userRepository = new PrismaUserRepository()
const messageServices = new MessageServices(userRepository)
const messageControllers = new MessageControllers(messageServices)

export { messageControllers }
