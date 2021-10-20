import express from 'express'
import Users from './User.routes'

export default (app: express.Application) => {
  app.use(Users)
}
