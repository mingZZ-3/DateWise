<template>
    <div class="container-fluid pb-5">
        <div class="card card-body">
            <h4>{{ title }}</h4>
            <div id="moneyFormat" v-show="isSpending"><h1 class="spending">- {{ spendingPrice.toLocaleString() }}</h1></div>
            <div id="moneyFormat" v-show="!isSpending"><h1 class="income">+ {{ incomePrice.toLocaleString() }}</h1></div>
        </div> 
    </div>
    
</template>

<script>
import { ref } from 'vue';
import { getAllData } from '@/views/applications/DataApi.js'

export default {
  name : "headercomponent",
  props : {
      title : { type : String, required: true },
      type : { type : String, required: true }
  },
  setup(props) {
    const isSpending = ref(true);
    const spendingPrice = ref(0);
    const incomePrice = ref(0);

    const getAllDataList = async () => {
      try {
        const datalist = await getAllData();
        for (let i=0;i<datalist.length;i++) {
          spendingPrice.value += datalist[i].spending_total;
          incomePrice.value += datalist[i].income_total;
        }
      } catch (error) {
        console.error('Failed to update data:', error);
      }
    };
    

    if (props.type === "0") {    // spending
      isSpending.value = true;
    } else if (props.type === "1") {  // income
      isSpending.value = false;
    } else {
      isSpending.value = true;
    }
    getAllDataList();

    return {
      spendingPrice,
      incomePrice,
      getAllDataList,
      isSpending
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Orbit&display=swap');

#moneyFormat {
    text-align: end; 
    margin-top: 15px; 
    margin-right: 15px;
}
.spending {
    color: #994E60;
    font-style: italic; 
}

.income {
    color: #3E51B5;
    font-style: italic; 
}


h4 {
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: bold;
}

h1 {
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: italic;
}

</style>