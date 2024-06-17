<template>
  <div v-if="data.length === 0">
    <h4 id="nolist">Please add your daily life :)</h4>
    </div>
    <div v-else>
      <div class="table-responsive">
        <table ref="dataTable" id="datatable-search" class="table table-flush">
          <thead class="thead-light">
            <tr>
              <th class="eng">Category</th>
              <th class="eng">Title</th>
              <th class="eng">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index" @click="emitter.emit('item_edit_click', { item : item, index : item.index })">
              <td id="cate"  class="cate">{{ item.category }}</td>
              <td id="title" :class="item.type === 'spending' ? 'spendingtitle' : 'incometitle'">{{ item.title }}</td>
              <td id="amount" class="eng">{{ item.amount.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
    </div> 
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbit&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Orbit&display=swap');

#title {
  font-family: "Orbit", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.cate, .amount, th, .eng, #nolist {
    font-family: "DM Serif Text", serif;
    font-weight: bold;
    font-style: normal;
    letter-spacing: 2px;
}

td, h2, h4{
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

.spendingtitle {
  color: #994E60;
  font-size: 20px;
}
.incometitle {
  color: #133862;
  font-size: 20px;
}

#amount {
  font-size: 20px;
}

#nolist {
  padding: 20px;
  color: #827B7D;
  margin-left: 10px;
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
