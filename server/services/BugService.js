import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class BugService {
  async getAll() {
    return await dbContext.Bugs.find({}).populate("creator", "name picture")
  }
  async getById(id, userEmail) {
    let data = await dbContext.Bugs.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID ")
    }
    return data
  }
  async create(rawData) {
    let data = await dbContext.Bugs.create(rawData)
    return data
  }
  async edit(id, userEmail, update) {
    let data = await dbContext.Bugs.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async delete(id, userEmail) {
    let data = await dbContext.Bugs.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
  }


}

export const bugService = new BugService