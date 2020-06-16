import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import api from "./AxiosService"
import router from "../router";
import { BugsStore } from "./BugsStore"
import { NotesStore } from "./NotesStore"

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    bugNotes: [],
    // activeNote: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs
    },

    setActiveBug(state, activeBug) {
      state.activeBug = activeBug
    },
    addNote(state, note) {
      state.bugNotes.push(note)
    },
    setNotes(state, bugNotes) {
      state.bugNotes = bugNotes
      // Vue.set(state.bugNotes, payload.bugId, payload.notes)
    },
    removeNote(state, id) {
      state.bugNotes = state.bugNotes.filter(n => n.id != id)
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
    BugsStore,
    NotesStore
  }
});
