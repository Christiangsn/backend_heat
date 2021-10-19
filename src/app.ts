import express from 'express'

class App {
  public app: express.Application

  constructor () {
    this.app = express()
  }

  private middlewares (): void {

  }

  private routes (): void {

  }
}

export default new App().app
