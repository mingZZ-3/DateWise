<template>
    <div class="container">
        <h2>For date</h2>
    </div>

  <section class="pt-5 pb-0">
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
  </section>
</template>

<script setup>
// example  component
import SimpleBookingCard from "@/views/pages/components/SimpleBookingCard.vue";

//Vue Material Kit 2 Pro components
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";

// images
import product1 from "@/assets/img/products/product-2-min.jpg";
import product2 from "@/assets/img/products/product-1-min.jpg";
import product3 from "@/assets/img/products/product-3-min.jpg";
import product4 from "@/assets/img/products/product-5-min.jpg";
import product5 from "@/assets/img/products/product-6-min.jpg";
import product6 from "@/assets/img/products/product-7-min.jpg";
</script>