<template>
  <div class="table-responsive">
    <table ref="dataTable" id="datatable-search" class="table table-flush">
      <thead class="thead-light">
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.amount }}원</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTables",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
