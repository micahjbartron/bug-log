import _api from "./AxiosService"
import router from "../router"


export const NotesStore = {
  actions: {
    async getNotesByBugId({ commit, dispatch }, bugId) {
      try {
        let res = await _api.get('bugs/' + bugId + '/notes')
        commit("setNotes", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addNote({ commit, dispatch }, noteData) {
      try {
        let res = await _api.post('notes/', noteData)
        commit("addNote", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteNote({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('notes/' + id)
        confirm("are you sure you want to delete")
        commit('removeNote', id)
      } catch (error) {
        console.error(error)
      }
    }
  }
}