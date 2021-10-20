import { sign } from 'jsonwebtoken'
import { authConfig } from './AuthConfig'
import { User } from '../../entities/User'

export async function genetarionToken (user: User): Promise<string> {
  const token = sign(
    {
      user: {
        name: user.name,
        avatar_url: user.avatar_url,
        id: user.id
      }
    },
    authConfig.secret,
    {
      subject: user.id,
      expiresIn: 86400
    }
  )
  return token
}
