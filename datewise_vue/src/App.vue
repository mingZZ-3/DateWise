<!--
=========================================================
* Vue Material Dashboard 2 PRO - v3.1.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-material-dashboard-2-pro
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<template>
  <!-- nav -->
  <sidenav
  :custom_class="color"
  :class="['fixed-start']"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden"
  >
    <router-view />
  </main>
</template>

<script>
import Sidenav from "./components/Sidenav";
import { mapMutations, mapState } from "vuex";

export default {
name: "App",
components: {
  Sidenav,
},
computed: {
  ...mapState([
    "isRTL",
    "color",
    "isAbsolute",
    "isNavFixed",
    "navbarFixed",
    "absolute",
    "showSidenav",
    "showNavbar",
    "showFooter",
    "showConfig",
    "hideConfigButton",
  ]),
},
beforeMount() {
  const sidenav = document.getElementsByClassName("g-sidenav-show")[0];

  if (window.innerWidth > 1200) {
    sidenav.classList.add("g-sidenav-pinned");
  }
},
methods: {
  ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
},
};
</script>

<style>
.dataTable-pagination-list .active a {
background-image: linear-gradient(
  195deg,
  #66bb6a 0%,
  #43a047 100%
) !important;
}
</style>
