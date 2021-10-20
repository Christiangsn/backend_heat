/* eslint-disable camelcase */
import { prisma } from '../../prisma'
import { User } from '../../entities/User'
import { IUserRepository } from '../IUserRepository'

class PrismaUserRepository implements IUserRepository {
  async show (id: number): Promise<User> {
    return await prisma.user.findFirst({
      where: {
        github_id: id
      }
    })
  }

  async store ({ name, github_id, login, avatar_url }: User): Promise<User> {
    return await prisma.user.create({
      data: {
        name: name,
        github_id: github_id,
        login: login,
        avatar_url: avatar_url
      }
    })
  }

  async index ({ id }: User): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        id: id
      }
    })

    return user
  }
}

export { PrismaUserRepository }
