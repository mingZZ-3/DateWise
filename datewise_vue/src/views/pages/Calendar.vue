<template>
  <div>
    <TopHeader id="title" title="Calendar" type="2"/>

    <div class="row mt-n4" style="margin-left: 35px; margin-right: 35px;">
      <MoneyBox class="col" title="Spending" type="0"/>
      <MoneyBox class="col" title="Income" type="1"/>
    </div>

    <calendar id="calendar-table" class="ms-4 mt-n5"/>

    <div class="container ms-4 mb-4">
      <div class="card me-5">
          <div class="card-header">
              <h5 class="mb-0" style="color: #380A15; font-size: 30px;">Result</h5>
          </div>
          <DataTables :data="totallist"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopHeader from "@/components/Header.vue"
import Calendar from "@/views/applications/Calendar.vue";
import DataTables from '../applications//DataTables.vue';
import { getSingleData } from '@/views/applications/DataApi.js';
import MoneyBox from '@/components/MoneyBox.vue'
import { getCurrentInstance, ref } from 'vue';


const internalInstance = getCurrentInstance(); 
const emitter = internalInstance.appContext.config.globalProperties.emitter;
const totallist = ref([]);

const dayClick = async (date) => {
  try {
    totallist.value = [];
    const response = await getSingleData(date);

    totallist.value = totallist.value.concat(
      response.spending.map((tmp, index) => (
        {
          ...tmp,
          type: "spending",
          index: index,
          date: response.date
        }
      ))
    );
    totallist.value = totallist.value.concat(
      response.income.map((tmp, index) => (
        {
          ...tmp,
          type: "income",
          index: index,
          date: response.date
        }
      ))
    );
      
    console.log(totallist.value);
  } catch (error) {
    totallist.value = [];
  }
}
emitter.on('day_click', dayClick);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Orbit&display=swap');

h2, h5, .title {
    font-family: "DM Serif Text", serif;
    font-weight: bold;
    font-style: normal;
    letter-spacing: 2px;
}
</style>