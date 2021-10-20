import { Server } from 'socket.io'
import http from 'http'

class Socket {
    public io: Server

    public ioConnection (serverHttp : http.Server): void {
      this.io = new Server(serverHttp, {
        cors: {
          origin: '*'
        }
      })

      this.io.on('connection', socket => {
        console.log(`Socket.io is running or id ${socket.id}`)
      })
    }
}

export default new Socket()
