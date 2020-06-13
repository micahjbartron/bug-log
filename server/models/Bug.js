import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Bug = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creatorEmail: { type: String, required: true },
  closed: { type: Boolean, required: true, default: false },
  closedDate: { type: Date }
}, { timestamps: true, toJSON: { virtuals: true } })


Bug.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true

  })

export default Bug
