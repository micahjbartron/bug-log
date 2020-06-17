<template>
  <div class="form-group">
    <form @submit.prevent="changeBug">
      <textarea
        v-model="editBug.content"
        required
        class="form-control"
        id="exampleFormControlTextarea1"
        placeholder="Edit Bug Description..."
        rows="3"
      ></textarea>
      <button type="submit" class="btn btn-success">Update</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "Edit",
  props: ["edit"],
  data() {
    return {
      editBug: {
        content: "",
        bugId: this.$route.params.bugId
      }
    };
  },
  // mounted() {
  //   this.$store.dispatch("getActiveBug", this.$route.params.bugId);
  // },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    changeBug() {
      this.$store.dispatch("editBug", this.editBug);
      this.editBug = {
        content: "",
        bugId: this.$route.params.bugId
      };
    }
  },
  components: {}
};
</script>


<style scoped>
</style>