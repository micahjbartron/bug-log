<template>
  <div class="bug container-fluid">
    <div class="row">
      <div class="col">
        <div class="card mt-3 shaddow-light">
          <div class="card-body">
            <h5 class="card-title">{{bug.title}}</h5>
            <p class="card-text">{{bug.description}}</p>
            <button
              v-show="bug.closed == false"
              class="btn btn-danger outline ml-5"
              @click="closeBug(bug.id)"
            >Close Bug</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-2">
      <div class="col">
        <div class="form-group">
          <form @submit.prevent="editBug">
            <textarea
             
              required
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Edit Bug Description..."
              rows="3"
            ></textarea>
            <button type="submit" class="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row py-2">
      <div class="col">
        <div class="form-group">
          <form @submit.prevent="addNote">
            <textarea
              v-model="newNote.content"
              required
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="AddNote"
              rows="3"
            ></textarea>
            <button type="submit" class="btn btn-success">Add Note</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <note v-for="note in notes" :key="note.id" :note="note" />
      </div>
    </div>
  </div>
</template>


<script>
import Note from "@/components/notesComponent.vue";
export default {
  name: "bug",

  data() {
    return {
      newNote: {
        content: "",
        bugId: this.$route.params.bugId
      }, 
    };
    // return{
    //   updateBug:{
    //     content: "",
    //     bugId: this.$rout.params.bugId
    //   }
    // }
  },
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.bugId);
    this.$store.dispatch("getNotesByBugId", this.$route.params.bugId);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.bugNotes;
    }
  },
  methods: {
    closeBug(id) {
      this.$store.dispatch("closeBug", id);
    },
    // editBug(id){
    //    this.$store.dispatch("editBug",id)
    // },
    addNote() {
      this.$store.dispatch("addNote", this.newNote);

      this.newNote = {
        content: "",
        bugId: this.bug.id
      };
    }
  },
  components: {
    Note
  }
};
</script>


<style scoped>
</style>