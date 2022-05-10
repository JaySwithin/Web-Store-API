const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  emailNotifications: {
    type: Boolean,
    required: true
  },
  verified: {
    type: Boolean,
    required: true
  },
})

const userModel = mongoose.model('Users', UserSchema);
module.exports = userModel;