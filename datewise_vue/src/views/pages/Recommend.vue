<template>
    <div class="mb-4">
      <Header title="Date Recommend" type="3"/>


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
// example  component
import SimpleBookingCard from "@/views/pages/components/SimpleBookingCard.vue";
import Header from '@/components/Header.vue';
import axios from 'axios';
import {ref} from 'vue';

const recommendList = ref([]);

const recommend = async () => {
  try {
      let data = {
        "category_group_code" : "FD6",
        "x": "127.05902969025047",
        "y": "37.51207412593136",
        "size" : 15
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