const mongoose = require('mongoose');

// Schema creation
const readerSchema = mongoose.Schema({
  // Schema properties with types
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  favoriteGenre: {
    type: String,
    default: "General"
  },
  joinedDate: {
    type: Date,
    default: Date.now
  }
});

// Export the model
module.exports = mongoose.model("Reader", readerSchema);
