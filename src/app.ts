import express from 'express'
import routes from './routes/'
import http from 'http'
import Socket from './socket'
import cors from 'cors'

class App {
  public app: express.Application
  public serverHttp: http.Server
  public Socket: typeof Socket

  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
    this.serverHttp = http.createServer(this.app)
    this.socket()
  }

  private middlewares (): void {
    this.app.use(cors())
    this.app.use(express.json())
  }

  private routes (): void {
    routes(this.app)
  }

  private socket (): void {
    Socket.ioConnection(this.serverHttp)
  }
}

export default new App()
