import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGO
export const connectDB = async () => {
  return await mongoose.connect(uri)
}
