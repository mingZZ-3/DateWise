<template>
  <div class="mb-4">
  <MainHeader/>

  <div class="row mt-n4" style="margin-left: 35px; margin-right: 35px;">
    <MoneyBox class="col" title="Spending" type="0"/>
    <MoneyBox class="col" title="Income" type="1"/>
  </div>

  <!-- recommend -->
  <div class="ms-5 me-5 mt-1">
    <div class="col col-12">
        <div class="card z-index-2">
          <div class="card-header p-3 pt-2">
             <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 me-3 float-start">
              <i class="material-icons-round opacity-10">favorite</i>
            </div>
            <div class="d-block d-md-flex">
              <div class="me-auto">
                <h4 class="mb-0">For Date</h4>
                <p class="mb-0 text-sm">we recommend places based on what you visited recently</p>
              </div>
            </div>
          </div>
          <div class="p-3 card-body">
            <section class="pb-0">
              <div class="container mb-3">
              <div class="row">
                  <div class="col-lg-4 col-md-6" 
                    v-for="item in recommendList" :key="item.id">
                    <SimpleBookingCard
                      class="mt-5 mt-md-0"
                      :urlLink="item.place_url"
                      :categories="item.category_group_name"
                      :title="item.place_name"
                      :description="item.address_name"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  </div>

  <!-- chart -->
  <div class="ms-5 me-5 mt-5">
    <div class="col col-12">
        <div class="card z-index-2 mt-2">
          <div class="card-header p-3 pt-2">
             <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 me-3 float-start">
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
  </div>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MoneyBox from '@/components/MoneyBox.vue'
import GradientLineChart from "@/views/pages/components/GradientLineChart.vue";
import SimpleBookingCard from "@/views/pages/components/SimpleBookingCard.vue";
import { storeToRefs } from 'pinia';
import { useKakaoStore } from '@/store/kakaoStore.js'
import { onMounted } from 'vue';
import { deleteSingleData } from '@/views/applications/DataApi.js'

const KakaoStore = useKakaoStore();
const { recommendList } = storeToRefs(KakaoStore);

const deleteData = async (id) => {
    try {
      const tmp = await deleteSingleData(id);
      console.log(tmp);
    } catch (error) {
      console.error('Failed to update data:', error);
    }
}

onMounted(() => {
  KakaoStore.setSize(3);
  KakaoStore.recommend();
  // KakaoStore.setKeyword("마라");
  // KakaoStore.search()
  deleteData("8304");
});


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Orbit&display=swap');

h4, i, p {
    font-family: "DM Serif Text", serif;
    font-weight: bold;
    font-style: normal;
    letter-spacing: 2px;
}
</style>