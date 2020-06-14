import _api from "./AxiosService"
import router from "../router"


export const NotesStore = {
  actions: {
    async getNotesByBugId({ commit, dispatch }, id) {
      try {
        let res = await _api.get('bugs/' + id + '/notes')
        commit("setNotes", res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}