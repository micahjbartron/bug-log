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
      _api.post('bugs', bugData)
        .then(serverBug => {
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
    }

  }
}