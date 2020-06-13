import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"



class NoteService {
  async find(query = {}) {
    let comment = await dbContext.Notes.find(query)
    // .populate("bugs")
    return comment
  }
  async create(rawData) {
    let data = await dbContext.Notes.create(rawData)
    return data
  }
  async edit(id, userEmail, update) {
    let data = await dbContext.Notes.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Edit Not Allowed")
    }
  }
  async delete(id, userEmail) {
    let data = await dbContext.Notes.findByIdAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Delete Not Allowed")
    }
  }

}

export const noteService = new NoteService