import App from './app'
const port = process.env.APP_PORT

const app = App.serverHttp

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`)
})
