import app from './app'

const port = process.env.APP_PORT || 4000

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`)
})
