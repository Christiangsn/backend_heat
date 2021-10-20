import IAuth from './ITokenDTO'

const authConfig: IAuth = {
  secret: process.env.AUTH_SECRET!,
  expires: process.env.AUTH_EXPIRES!,
  rounds: Number(process.env.AUTH_ROUNDS)!
}

export { authConfig }
