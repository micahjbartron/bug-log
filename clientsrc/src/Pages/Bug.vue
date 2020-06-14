<template>
  <div class="bug container-fluid">
    <div class="row">
      <div class="col">
        <h1>{{bug.title}}</h1>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "bug",
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.boardId);
  },
  data() {
    return {};
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>