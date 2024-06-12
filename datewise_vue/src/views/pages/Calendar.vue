<template>
    <div class="row">
      <div class="col-xl-9">
        <div class="card card-calendar">
          <calendar id="calendar-table" />
        </div>
      </div>
    </div>
</template>

<script>
import Calendar from "@/views/applications/Calendar.vue";

export default {
  name: "CalendarPage",
  components: { Calendar, },
};
</script>
