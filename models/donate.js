const mongoose = require("mongoose");

const donateSchema = mongoose.Schema({
  donorName: {
    type: String,
    required: true
  },
  donorEmail: {
    type: String,
    required: true,
    unique: true,
  },
 phone:{
    type: String,
    required: true,
    unique: true
  },
  amount:{
    type:Number,
    required:true,

  },
  donationType:{
    type:String,
    required:true,
  },
  message:{
    type:String,
    required:true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Donate", donateSchema);