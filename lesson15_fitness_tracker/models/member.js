const mongoose = require('mongoose');

// Schema creation
const memberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  membershipLevel: {
    type: String,
    enum: ['Basic', 'Premium', 'VIP'],
    default: 'Basic'
  },
  joinedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Member", memberSchema);
