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
    // async addBug({ commit, dispatch }, bugData) {
    //   try {
    //     let res = await _api.post('bugs', bugData)
    //     router.push({ name: "bug" })
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    addBug({ commit, dispatch }, bugData) {
      _api.post('bugs', bugData)
        .then(serverBug => {
          router.push({ path: "bug", params: { id: bugData.id } })
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