import _api from "./AxiosService"
import router from "../router"

export const BugsStore = {
  actions: {
    getBugs({ commit, dispatch }) {
      _api.get('bugs')
        .then(res => {
          commit('setBugs', res.data)
        })
    },

    addBug({ commit, dispatch }, bugData) {
      let res = _api.post('bugs', bugData)
        .then(serverBug => {
          router.push({ name: "bug", params: { bugId: serverBug.data.id } })
          dispatch('getBugs')
        })
    },
    async getActiveBug({ commit, dispatch }, id) {
      try {
        let res = await _api.get('bugs/' + id)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async editBug({ commit, dispatch }, editBug) {
      try {
        let id = editBug.bugId
        let content = editBug.content
        let res = await _api.put('bugs/' + id, { description: content })

        dispatch("getActiveBug", id)
      } catch (error) {
        console.error(error)
      }
    },
    async closeBug({ commit, dispatch }, editBug) {
      try {

        let res = await _api.put('bugs/' + editBug, { closed: true })
        confirm("Are you sure? this can't be undone")
        dispatch("getActiveBug", editBug)
      } catch (error) {
        console.error(error)
      }
    }

  }
}