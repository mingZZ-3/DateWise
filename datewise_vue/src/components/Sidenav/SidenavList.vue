<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div
    id="sidenav-collapse-main"
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
  >
    <ul class="navbar-nav">
      <!-- 홈 버튼 -->
      <li class="nav-item" :class="getRoute() === 'dashboards' ? 'active' : ''">
        <router-link to="/">
          <a
            aria-expanded="false"
            class="nav-link"
            v-bind="$attrs"

          >
          <div
            class="text-center d-flex align-items-center justify-content-center me-2"
          >
          <i class="material-icons-round opacity-10">home</i>
          </div>
          <span class="nav-link-text ms-1">Home</span>
        </a>
        </router-link>
      </li>

      <li class="nav-item" :class="getRoute() === 'dashboards' ? 'active' : ''">
        <!-- 캘린더 -->
         <router-link to="/pages/calendar">
          <a
            aria-expanded="false"
            class="nav-link"
            v-bind="$attrs"
          >
            <div
              class="text-center d-flex align-items-center justify-content-center me-2"
            >
            <i class="material-icons-round opacity-10">calendar_month</i>
            </div>
            <span class="nav-link-text ms-1">Calendar</span>
          </a>
        </router-link>
      </li>

      <li class="nav-item" :class="getRoute() === 'dashboards' ? 'active' : ''">
        <router-link to="/pages/recommend">
          <a
            aria-expanded="false"
            class="nav-link"
            v-bind="$attrs"
          >
            <div
              class="text-center d-flex align-items-center justify-content-center me-2"
            >
            <i class="material-icons-round opacity-10">diversity_1</i>
            </div>
            <span class="nav-link-text ms-1">Date Recommend</span>
          </a>
        </router-link>
      </li>

      <li class="nav-item" :class="getRoute() === 'dashboards' ? 'active' : ''">
        <router-link to="/pages/charts">
          <a
            aria-expanded="false"
            class="nav-link"
            v-bind="$attrs"
          >
            <div
              class="text-center d-flex align-items-center justify-content-center me-2"
            >
            <i class="material-icons-round opacity-10">donut_small</i>
            </div>
            <span class="nav-link-text ms-1">Charts</span>
          </a>
        </router-link>
        
      </li>

      <li class="mt-3 nav-item">
      </li>
   
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SidenavList",
  components: {

  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  computed: {
    ...mapState(["isRTL"])
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Orbit&display=swap');

i, span {
    font-family: "DM Serif Text", serif;
    font-weight: bold;
    font-style: normal;
    letter-spacing: 1px;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>