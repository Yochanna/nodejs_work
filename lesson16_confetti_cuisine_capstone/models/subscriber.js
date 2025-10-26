const mongoose = require('mongoose');

// Schema creation with validation
const subscriberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true
  },
  zipCode: {
    type: Number,
    min: 10000,
    max: 99999
  },
  subscribedDate: {
    type: Date,
    default: Date.now
  }
});

// Instance method to get full info
subscriberSchema.methods.getInfo = function() {
  return `${this.name} (${this.email}) - ZIP: ${this.zipCode}`;
};

module.exports = mongoose.model("Subscriber", subscriberSchema);
