import bcryptjs from 'bcryptjs'
import userModel from '../models/auth.js'

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find()
    res.status(201).json(users)
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const signUp = async (req, res) => {
  const { username, email, password } = req.body
  const hashedPassword = bcryptjs.hashSync(password, 10)
  const newUser = new userModel({ username, email, password: hashedPassword })
  try {
    await newUser.save()
    res.status(200).json({ msg: 'user created!' })
  } catch (error) {
    res.status(500).json(error)
  }
}

const singIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const userExist = await userModel.findOne({ email: email })
    if (!userExist) {
      return res.status(404).json({ msg: 'user not found' })
    }
    const validPassword = bcryptjs.compareSync(password, userExist.password)
    if (!validPassword) {
      return res.status(401).json({ msg: 'wrong password' })
    }
    res.status(200).json(userExist)
  } catch (error) {
    res.status(500).json(error)
  }
}

export { getUsers, signUp, singIn }
