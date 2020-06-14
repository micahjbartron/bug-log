<template>
  <div class="bug">
    <tr>
      <th scope="row">{{bug.title}}</th>
      <td>{{bug.creatorEmail}}</td>
      <td>{{bug.status}}</td>
      <td>{{bug.email}}</td>
    </tr>
  </div>
</template>


<script>
export default {
  name: "Bug",
  props: ["bug"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>