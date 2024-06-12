<template>
  <div class="py-4 container-fluid">

    <div class="mt-4 row">
      <div class="col-lg-6 col-12">
        <div class="card z-index-2 mt-4">
          <div class="card-header p-3 pt-2">
             <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 me-3 float-start">
            <!-- 초록 <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 me-3 float-start"> -->
              <i class="material-icons opacity-10">donut_small</i>
            </div>
            <h4 class="mb-0">Pie chart</h4>
            <p class="mb-0 text-sm">Spending vs Income</p>
          </div>
          <div class="p-3 card-body">
            <pie-chart
              id="pie-chart-component"
              height="300"
              :chart="{
                labels: ['Spending', 'Income'],
                datasets: {
                  label: 'Percentage',
                  data: [40, 30],
                },
              }"
            />
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-12">
        <div class="card z-index-2 mt-4">
          <div class="card-header p-3 pt-2">
             <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 me-3 float-start">
            <!-- 파랑 <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 me-3 float-start"> -->
              <i class="large material-icons opacity-10">show_chart</i>
            </div>
            <div class="d-block d-md-flex">
              <div class="me-auto">
                <h4 class="mb-0">Line chart</h4>
                <p class="mb-0 text-sm">Monthly Spending Graph</p>
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
                    data: [36000, 23000, 8000, 55000, 62000, 15000, 64000],
                  },
                  {
                    label: 'this month',
                    data: [50000, 47000, 72000, 11000, 89000, 120000, 35000],
                  },
                ],
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="card z-index-2 mt-4">
      <div class="card-header p-3 pt-2">
        <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 me-3 float-start">
          <i class="material-icons opacity-10">splitscreen</i>
        </div>
        <h4 class="mb-0">Bar chart</h4>
        <p class="mb-0 text-sm">Sales related to age average</p>
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

<script>
import GradientLineChart from "./components/GradientLineChart.vue";
import BarChartHorizontal from "./components/BarChartHorizontal.vue";
import PieChart from "./components/PieChart.vue";

export default {
  name: "Charts",
  components: {
    GradientLineChart,
    BarChartHorizontal,
    PieChart,
  },
};
</script>
