<template>
    <div class="container-fluid pb-5">
        <div class="card card-body">
            <h4>{{ title }}</h4>
            <div id="moneyFormat" v-show="isSpending"><h3 class="spending">{{ setAmount }}</h3></div>
            <div id="moneyFormat" v-show="!isSpending"><h3 class="income">{{ setAmount }}</h3></div>
        </div> 
    </div>
    
</template>

<script>
import {ref, computed} from 'vue';

export default {
  name : "headercomponent",
  props : {
      title : { type : String, required: true },
      type : { type : String, required: true }
  },
  setup(props) {
    const isSpending = ref(true);

    const setAmount = computed(() => {
      if (props.type === "0") {    // spending
        return "- 4000";
      } else if (props.type === "1") {  // income
        return "+ 3000";
      } else {
        return "0";
      }
    });

    if (props.type === "0") {    // spending
      isSpending.value = true;
    } else if (props.type === "1") {  // income
      isSpending.value = false;
    } else {
      isSpending.value = true;
    }

    return {
      isSpending,
      setAmount
    };
  }
}
</script>

<style scoped>
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
</style>