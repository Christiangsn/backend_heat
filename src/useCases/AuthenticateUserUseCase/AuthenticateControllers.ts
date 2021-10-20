import { Request, Response } from 'express'
import { AuthenticateUserServices } from './AuthenticateServices'

class AuthenticateControllers {
  // eslint-disable-next-line no-useless-constructor
  constructor (private authenticateUserServices: AuthenticateUserServices) {}

  public async handle (req: Request, res: Response): Promise<Response> {
    const { code } = req.body

    try {
      const result = await this.authenticateUserServices.execute(code)
      return res.json(result)
    } catch (error) {
      return res.json(error)
    }
    //
  }

  public async submit (req: Request, res: Response): Promise<void> {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
  }
}

export { AuthenticateControllers }
