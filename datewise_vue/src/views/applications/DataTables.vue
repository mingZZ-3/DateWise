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
        <tr v-for="(item, index) in data" :key="index" @click="emitter.emit('item_edit_click', originalData, index, )">
          <td id="cate">{{ item.category }}</td>
          <td id="title">{{ item.title }}</td>
          <td id="amount">{{ item.amount }}원</td>
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
    originalData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
td {
  padding: 20px;
  font-family: "DM Serif Display", serif;
  color: #380A15;
  font-weight: bold;
  font-style: normal;
}

.table-responsive {
  margin-left: 50px;
  margin-right: 50px;
}

#cate {
  color: #827B7D;
  font-size: 15px;
}

#title {
  color: #994E60;
  font-size: 20px;
}

#amount {
  font-size: 20px;
}

.custom-table th:first-child,
.custom-table td:first-child {
  border-top: 2px solid rgba(56, 10, 21, 0.3);
}

.custom-table th:last-child,
.custom-table td:last-child {
  border-top: 2px solid rgba(56, 10, 21, 0.3);
}
</style>
