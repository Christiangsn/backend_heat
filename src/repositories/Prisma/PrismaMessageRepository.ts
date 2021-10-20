/* eslint-disable camelcase */
import { prisma } from '../../prisma'
import { IMessageRepository } from '../IMessageRepository'
import { Messages } from '../../entities/Message'

class PrismaUserRepository implements IMessageRepository {
  async store ({ text, user_id }: Messages): Promise<Messages> {
    const message = await prisma.message.create({
      data: {
        text,
        user_id: user_id
      },
      include: {
        user: true
      }
    })

    return message
  }

  async index (): Promise<Messages[]> {
    const messages = await prisma.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        user: true
      }
    })

    return messages
  }
}

export { PrismaUserRepository }
