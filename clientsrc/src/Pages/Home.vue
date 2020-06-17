<template>
  <div class="home container-fluid">
    <div class="row text-center text-light">
      <div class="col">
        <form @submit.prevent="reportBug">
          <div class="form-group">
            <label for="exampleFormControlInput1" v-if="profile.email"></label>
            <label for="exampleFormControlInput1" v-else>Log in to report bug</label>
            <input class="form-control" v-model="newBug.title" placeholder="Title..." />
          </div>
          <div class="form-group">
            <textarea
              v-model="newBug.description"
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Description"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <button class="btn btn-success" @click="bug.closed = !bug.closed">hide closed</button>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Reported By</th>
              <th scope="col">Status</th>
              <th scope="col">Mod Date</th>
            </tr>
          </thead>

          <bug v-for="bug in bugs" :class="{strikeout: bug.closed}" :key="bug.id" :bug="bug" />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Bug from "@/components/bugsComponent.vue";
// import BugForm from "@/components/BugFormComponent";
export default {
  name: "home",
  data() {
    return {
      newBug: {
        title: "",
        description: ""
      }
    };
  },

  mounted() {
    this.$store.dispatch("getBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    reportBug() {
      this.$store.dispatch("addBug", this.newBug);
      this.newBug = { title: "", description: "" };
    }
  },
  components: {
    Bug
    // BugForm
  }
};
</script>
<style scoped>
.strikeout {
  text-decoration: line-through;
  color: red;
}
</style>
