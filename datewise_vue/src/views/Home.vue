<template>
  <MainHeader/>

  <div class="row mt-n4" style="margin-left: 35px; margin-right: 35px;">
    <MoneyBox class="col"/>
    <MoneyBox class="col"/>
  </div>

  <!-- recommend -->
  <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5 mt-md-0"
            :image="product1"
            categories="맛집"
            title="이이요"
            description="서울 광진구 능동로32길 6"
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5 mt-md-0"
            :image="product2"
            categories="맛집"
            title="깍뚝"
            description="서울 광진구 능동로19길 36"
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5 mt-lg-0"
            :image="product3"
            categories="맛집"
            title="은혜즉석떡볶이"
            description="서울 광진구 광나루로 381-1"
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5"
            :image="product4"
            categories="맛집"
            title="천미향"
            description="서울 광진구 능동로 237"
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5"
            :image="product5"
            categories="맛집"

            title="뱃놈"
            description="서울 광진구 광나루로19길 9"
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5"
            :image="product6"
            categories="맛집"
            title="마당족발"
            description="서울 광진구 능동로 173"
          />
        </div>
        <div class="col-sm-7 ms-auto text-end">
          <MaterialPagination class="mt-4">
            <MaterialPaginationItem prev class="ms-auto" />
            <MaterialPaginationItem label="1" active/>
            <MaterialPaginationItem label="2" />
            <MaterialPaginationItem label="3" />
            <MaterialPaginationItem label="4" />
            <MaterialPaginationItem label="5" />
            <MaterialPaginationItem next />
          </MaterialPagination>
        </div>
      </div>
    </div>

  <!-- chart -->
  <div class="mt-n4" style="margin-left: 40px; margin-right: 47px;">
    <div class="col col-12">
        <div class="card z-index-2 mt-2">
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
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MoneyBox from '@/components/MoneyBox.vue'
import GradientLineChart from "@/views/pages/components/GradientLineChart.vue";
import SimpleBookingCard from "@/views/pages/components/SimpleBookingCard.vue";

// images
import product1 from "@/assets/img/products/product-2-min.jpg";
import product2 from "@/assets/img/products/product-1-min.jpg";
import product3 from "@/assets/img/products/product-3-min.jpg";
import product4 from "@/assets/img/products/product-5-min.jpg";
import product5 from "@/assets/img/products/product-6-min.jpg";
import product6 from "@/assets/img/products/product-7-min.jpg";
</script>