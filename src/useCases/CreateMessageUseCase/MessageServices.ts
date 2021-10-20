/* eslint-disable camelcase */
import { IMessageRepository } from '../../repositories/IMessageRepository'
import { IMessageDTO } from './MessageDTO'
import Socket from '../../socket'

class MessageServices {
  constructor (
    private MessageRepository: IMessageRepository
  ) { }

  async handle ({ text, user_id }: IMessageDTO) {
    const newMessage = await this.MessageRepository.store({ text, user_id })

    const infoWS = {
      text: newMessage.text,
      user_id: newMessage.user_id,
      created_at: newMessage.created_at,
      user: {
        name: newMessage.user.name,
        avatar_url: newMessage.user.avatar_url
      }
    }

    Socket.io.emit('new_message', infoWS)

    return newMessage
  }

  async execute () {
    const messages = await this.MessageRepository.index()

    return messages
  }
}

export { MessageServices }
