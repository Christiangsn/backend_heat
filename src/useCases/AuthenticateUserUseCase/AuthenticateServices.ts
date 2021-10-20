/* eslint-disable camelcase */
import axios from 'axios'
import { IUserRepository } from '../../repositories/IUserRepository'
import { IAcessToken, IUserGithub } from './AuthenticateDTO'
import { genetarionToken } from '../../config'

class AuthenticateUserServices {
  // eslint-disable-next-line no-useless-constructor
  constructor (private userRepository: IUserRepository) {}

  async execute (code: string) {
    const url = 'https://github.com/login/oauth/access_token'

    const { data } = await axios.post<IAcessToken>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      },
      headers: {
        Accept: 'application/json'
      }
    })

    const getUser = await axios.get<IUserGithub>('https://api.github.com/user', {
      headers: {
        authorization: `Bearer ${data.access_token}`
      }
    })

    const { login, id: github_id, avatar_url, name } = getUser.data
    let user = await this.userRepository.show(github_id)

    if (!user) {
      user = await this.userRepository.store({ login, github_id, avatar_url, name })
    }
    const generationToken = await genetarionToken(user)

    return { generationToken, user }
  }
}

export { AuthenticateUserServices }
