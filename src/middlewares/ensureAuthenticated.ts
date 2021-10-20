import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { authConfig } from '../config/GenerationToken/AuthConfig'

async function AuthMiddleware (req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new Error('No token provided')
  }

  const parts = authHeader.split(' ')

  if (!String(parts.length === 2)) {
    throw new Error('No token provided')
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    throw new Error('Invalid Request')
  }

  try {
    verify(token, authConfig.secret, (err, decoded: any) => {
      if (err) {
        console.log(err)
        throw new Error('Token error')
      } else {
        req.user_id = decoded.sub
      }
    })

    next()
  } catch (error) {
    return res.status(401).json({ message: 'token experired' })
  }
}

export { AuthMiddleware }
