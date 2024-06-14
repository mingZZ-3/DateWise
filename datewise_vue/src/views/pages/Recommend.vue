<template>
    <div class="mb-4">
      <Header id="title" title="Date Recommend" type="3"/>

      <!-- recommend -->
      <div class="mt-n3 ms-5 me-5">
        <div class="col col-12">
            <div class="card p-4">
              <div>
                <h2 style="color: #380A15;">For Date</h2>
                <h5 style="color: #827B7D;">we recommend places based on what you visited recently</h5>
              </div>
              <div class="card-body mt-2">
                <section class="pb-0">
                  <div class="row">
                      <div 
                        class="col-lg-4 col-md-6 mb-5" 
                        v-for="item in recommendList" :key="item.id"
                      >
                        <SimpleBookingCard
                          class="mt-md-0"
                          :urlLink="item.place_url"
                          :categories="item.category_group_name"
                          :title="item.place_name"
                          :description="item.address_name"
                        />
                      </div>
                    </div>
                </section>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>


<script setup>
import SimpleBookingCard from "@/views/pages/components/SimpleBookingCard.vue";
import Header from '@/components/Header.vue';
import { storeToRefs } from 'pinia';
import { useKakaoStore } from '@/store/kakaoStore.js'
import { onMounted } from 'vue';

const KakaoStore = useKakaoStore();
const { recommendList } = storeToRefs(KakaoStore);

onMounted(() => {
  KakaoStore.setSize(15);
  KakaoStore.recommend();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Orbit&display=swap');

h2, h5, #title {
    font-family: "DM Serif Text", serif;
    font-weight: bold;
    font-style: normal;
    letter-spacing: 1px;
}
</style>