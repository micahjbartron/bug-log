<template>
  <div class="home container-fluid">
    <div class="row text-center text-light">
      <div class="col">
        <h1>Log in to report or make notes on a bug</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Reported By</th>
              <th scope="col">Status</th>
              <th scope="col">Mod Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">we broke everything</th>
              <td>Mark</td>
              <td>Open</td>
              <td>5-17-20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
