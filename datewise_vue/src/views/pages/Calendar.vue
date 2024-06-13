<template>
  <calendar id="calendar-table" />

  <div class="py-4 container">
    <div class="card">
        <div class="card-header">
            <h5 class="mb-0" style="color: #380A15; font-size: 30px; padding-left: 20px;">Result</h5>
        </div>
        <DataTables :data="filteredData" />
    </div>
</div>
</template>

<script>
import Calendar from "@/views/applications/Calendar.vue";
import DataTables from '../applications//DataTables.vue'

export default {
  name: "CalendarPage",
  components: { 
    Calendar,
    DataTables,
  },
};
</script>