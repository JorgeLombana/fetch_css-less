import express from 'express'
import dotenv from 'dotenv'
import auth from './routes/auth.routes.js'
import cors from 'cors'
import { connectDB } from './db/connect.js'

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
app.use('/api/v1/', auth)

const main = async () => {
  const port = process.env.PORT || 3000
  try {
    await connectDB()
    app.listen(
      port,
      console.log(`DB connected✅ \nserver listening on port:${port}👂🏽`)
    )
  } catch (error) {
    console.error(error)
  }
}
main()
