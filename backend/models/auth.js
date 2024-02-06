import mongoose from 'mongoose'

const signUpSchema = new mongoose.Schema({
  username: { required: true, type: String, unique: true },
  email: { required: true, type: String, unique: true },
  password: { required: true, type: String },
})

const singUpModel = mongoose.model('singUpModel', signUpSchema)

export default singUpModel
