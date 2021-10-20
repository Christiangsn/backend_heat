/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { MessageServices } from './MessageServices'

class MessageControllers {
  constructor (
    private messageService: MessageServices
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    const { text } = req.body
    const { user_id } = req

    try {
      const result = await this.messageService.handle({ text, user_id })

      return res.json(result)
    } catch (error) {
      return res.json(error)
    }
  }

  async execute (req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.messageService.execute()

      return res.json(result)
    } catch (error) {
      return res.json(error)
    }
  }
}

export { MessageControllers }
