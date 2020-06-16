<template>
  <tbody>
    <tr>
      <th scope="row">
        <router-link :to="{name: 'bug', params: {bugId: bug.id}}">{{bug.title}}</router-link>
      </th>
      <td>{{bug.creatorEmail}}</td>
      <td v-if="bug.closed == false">Open</td>
      <td v-else>Closed</td>
      <td>{{bug.updatedAt}}</td>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "Bug",
  props: ["bug"],
  data() {
    return {
    
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>