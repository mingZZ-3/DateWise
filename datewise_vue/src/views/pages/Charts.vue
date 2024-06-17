<template>
  <TopHeader title="Monthly Analytics" type="4"></TopHeader>

  <div class="row mt-n4" style="margin-left: 35px; margin-right: 35px;">
      <MoneyBox class="col" title="Spending" type="0"/>
      <MoneyBox class="col" title="Income" type="1"/>
    </div>

  <!-- pie chart -->
  <div class="py-4 container-fluid mt-n6">
    <div class="mt-3 row ms-2 me-2">
      <div class="col-lg-6 col-12">
        <div class="card z-index-2 mt-4">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 me-3 float-start">
              <!-- 초록 <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 me-3 float-start"> -->
              <i class="material-icons opacity-10">donut_small</i>
            </div>
            <h4 class="mb-0">Spending VS Income</h4>
            <p class="mb-0 text-sm">Which do you have more expenses or income this month?</p>
          </div>
          <div class="p-3 card-body">
            <pie-chart
              id="pie-chart-component"
              height="300"
              :chart="{
                labels: ['Spending', 'Income'],
                datasets: {
                  label: 'Percentage',
                  data: [ 1200000, 3022000],
                },
              }"
            />
          </div>
        </div>
      </div>

      <!-- line chart -->
      <div class="col-lg-6 col-12">
        <div class="card z-index-2 mt-4">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 me-3 float-start">
              <!-- 파랑 <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 me-3 float-start"> -->
              <i class="large material-icons opacity-10">show_chart</i>
            </div>
            <div class="d-block d-md-flex">
              <div class="me-auto">
                <h4 class="mb-0">Monthly Spending Graph</h4>
                <p class="mb-0 text-sm">Which month had the most spending?</p>
              </div>
            </div>
          </div>
          <div class="p-3 card-body">
            <gradient-line-chart
              id="chart-line"
              title="Line chart with gradient"
              :chart="{
                labels: [
                  '1',
                  '5',
                  '10',
                  '15',
                  '20',
                  '25',
                  '30',
                ],
                datasets: [
                  {
                    label: 'last month',
                    data: [50000, 120000, 450000, 550000, 520000, 750000, 940000],
                  },
                  {
                    label: 'this month',
                    data: [100000, 270000, 320000, 410000, 790000, 1200000, 1500000],
                  },
                ],
              }"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- bar chart -->
    <div class="card z-index-2 mt-5 ms-3 me-3">
      <div class="card-header p-3 pt-2">
        <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 me-3 float-start">
          <i class="material-icons opacity-10">splitscreen</i>
        </div>
        <h4 class="mb-0">Spending by Category</h4>
        <p class="mb-0 text-sm">Which categories spend the most?</p>
      </div>
      <div class="p-3 card-body">
        <bar-chart-horizontal
          :chart="{
            labels: ['food', 'shopping', 'utility bill', 'beauty', 'transportation', 'subscription'],
            datasets: {
              label: 'Spending by category',
              data: [80000, 73000, 28000, 53000, 19000, 7000],
            },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import GradientLineChart from "./components/GradientLineChart.vue";
import BarChartHorizontal from "./components/BarChartHorizontal.vue";
import PieChart from "./components/PieChart.vue";
import TopHeader from "@/components/Header.vue";
import MoneyBox from '@/components/MoneyBox.vue';
import { getAllData } from '@/views/applications/DataApi.js';
import { ref, onMounted } from 'vue';

const pieData = ref([0,0]);

const getAllDataList = async () => {
  try {
    const datalist = await getAllData();
    datalist.forEach(data => {
      pieData.value[0] += data.spending_total;
      pieData.value[1] += data.income_total;
    });
  } catch (error) {
    console.error('Failed to update data:', error);
  }
};
   
onMounted(() => {
  getAllDataList();
});
</script>

<style>
h2 {
  font-family: "DM Serif Display", serif;
  font-weight: bold;
  font-style: normal;
}
</style>
