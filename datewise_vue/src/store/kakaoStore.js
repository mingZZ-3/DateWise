import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios';


export const useKakaoStore = defineStore('kakao', () => {
    const category_group_code = ref('CE7');
    const x = ref('127.05902969025047');
    const y = ref('37.51207412593136');
    const size = ref(3);
    const keyword = ref('');
    const recommendList = ref([]);
    const searchList = ref([]);
  
    const setSearchData = (newCode, newX, newY) => {
        category_group_code.value = newCode;
        x.value = newX;
        y.value = newY;
    };

    const setSize = (newSize) => {
        size.value = newSize;
    };

    const setKeyword = (newKeyword) => {
      keyword.value = newKeyword;
    };

    const recommend = async () => {
      try {
          const data = {
            "category_group_code" : category_group_code.value,
            "x": x.value,
            "y": y.value,
            "size" : size.value
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
          }
      } catch(e) {
        console.log("error", e.response.data);
      }
    };

    const search = async () => {
      try {
          const data = {
            "query" : keyword.value,
            "size" : 5
          };
          const response = await axios.get("https://dapi.kakao.com/v2/local/search/keyword.json", {
            params : data,
            headers : {
              'Content-Type': 'application/json',
              "Authorization" : 'KakaoAK cb8c6c7d8d8e084e5b0b35ddc4b64b78',
              },
            }
          );
          
          if (response.status == 200) {
            searchList.value = response.data.documents;
            console.log(searchList.value);
          }
      } catch(e) {
        console.log("error", e.response.data);
      }
    };

    return { category_group_code, x, y, recommendList, recommend, setSearchData, setSize, setKeyword, search };
  }
);