import { PrismaUserRepository } from '../../repositories/Prisma/PrismaUserRepository'
import { ProfileServices } from './ProfileServices'
import { ProfileControllers } from './ProfileControllers'

const userRepository = new PrismaUserRepository()
const profileServices = new ProfileServices(userRepository)
const profileControllers = new ProfileControllers(profileServices)

export { profileControllers }
