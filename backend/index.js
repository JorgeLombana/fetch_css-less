import express from 'express'
import dotenv from 'dotenv'
import auth from './routes/auth.routes.js'
import { connectDB } from './db/connect.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use('/api/v1/', auth)

const main = async () => {
  const port = process.env.PORT || 3000
  try {
    await connectDB()
    app.listen(port, console.log(`DB connected✅ \nserver listening on port:${port}👂🏽`))
  } catch (error) {
    console.error(error)
  }
}
main()
