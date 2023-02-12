import mongoose, { Schema, model } from 'mongoose'
import { DEFAULT_ROLES } from '@/constans/roles'

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  avatar: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  password: {
    type: String,
    required: true,
    default: '@'
  },
  provider: {
    type: String,
    required: true,
    default: 'email'
  },
  emailVerified: {
    type: Boolean,
    default: false,
    required: false
  },
  role: {
    type: String,
    required: true,
    enum: Object.keys(DEFAULT_ROLES),
    default: DEFAULT_ROLES.ADMIN
  },
  status: {
    type: Boolean,
    default: true,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true
}
)

export const User = mongoose.models.User || model('User', userSchema)
