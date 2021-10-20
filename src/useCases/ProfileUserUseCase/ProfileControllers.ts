/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { ProfileServices } from './ProfileServices'

class ProfileControllers {
  constructor (
        private profileServices: ProfileServices
  ) {}

  async index (req: Request, res: Response): Promise<Response> {
    const { user_id } = req

    try {
      const result = await this.profileServices.index({ id: user_id })
      return res.json(result)
    } catch (error) {
      return res.json(error)
    }
  }
}

export { ProfileControllers }
