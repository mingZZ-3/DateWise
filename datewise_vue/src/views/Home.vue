<template>
  <MainHeader/>
  <Header title="Search" type="5"/>
  <!-- 해더 아래 기본 내부 세팅 -->
  <div class="row mt-n4" style="margin-left: 35px; margin-right: 35px;">
    <MoneyBox class="col"/>
    <MoneyBox class="col"/>
  </div>
  
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import Header from '@/components/Header.vue'
import MoneyBox from '@/components/MoneyBox.vue'

</script> 