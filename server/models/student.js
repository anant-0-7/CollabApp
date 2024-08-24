import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})
import mongoose from "mongoose";
import encrypt from 'mongoose-encryption'
const secret = process.env.ENCRYPTION_KEY

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'First Name is required']
  },
  
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  writeAccess: {
    type: Boolean,
    default: false
  },
  
}, { timestamps: true })

StudentSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] })

const Student = mongoose.model('Student', StudentSchema)

export default Student;