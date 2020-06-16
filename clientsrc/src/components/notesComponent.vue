<template>
  <div class="note">
    <div class="row">
      <div class="col">
        <div class="card mt-3 shaddow-light">
          <div class="card-body">
            <h5 class="card-title">
              <button class="btn btn-danger mr-3" @click="deleteNote(note.id)">X</button>
              {{note.creatorEmail}}
            </h5>
            <p class="card-text">{{note.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Notes",
  props: ["note"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteNote(id) {
      this.$store.dispatch("deleteNote", id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>