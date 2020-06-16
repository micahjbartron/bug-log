<template>
  <form @submit.prevent="addBug">
    <div class="form-group">
      <label for="exampleFormControlInput1" v-if="profile.email"></label>
      <label for="exampleFormControlInput1" v-else>Log in to report bug</label>
      <input
        type="email"
        class="form-control"
        required
        v-model="newBug.title"
        placeholder="Title..."
      />
    </div>
    <div class="form-group">
      <textarea
        class="form-control"
        required
        v-model="newBug.description"
        placeholder="Description"
        rows="3"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</template>


<script>
export default {
  name: "bugReport",
  data() {
    return {
      newBug: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    addBug() {
      this.$store.dispatch("addBug", this.newBug);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>