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
              <div class="container">
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
import axios from 'axios';
import {ref} from 'vue';


const recommendList = ref([]);

const recommend = async () => {
  try {
      console.log("recommend")
      let data = {
        "category_group_code" : "FD6",
        "x": "127.05902969025047",
        "y": "37.51207412593136",
        "size" : 3
      };
      const response = await axios.get("https://dapi.kakao.com/v2/local/search/category.json", {
        params : data,
        headers : {
          'Content-Type': 'application/json',
          "Authorization" : 'KakaoAK cb8c6c7d8d8e084e5b0b35ddc4b64b78',
          },
        }
      );
      
      if (response.status == 200) {
        recommendList.value = response.data.documents;
        console.log(recommendList.value);
      }
  } catch(e) {
    console.log("error", e)
  }
};
recommend();
</script>