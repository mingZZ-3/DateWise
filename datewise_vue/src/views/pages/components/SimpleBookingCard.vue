<script setup>
defineProps({
  categories: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  urlLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    color: String,
    label: String,
    route: String,
    default: () => ({
      color: "success",
      label: "See More",
    }),
  },
});

const goMap = (link) => {
  window.open(link, '_blank');
}
</script>
<template>
  <div class="card">
    <div class="card-body pt-3">
      <p class="text-dark mb-1 text-sm">
        {{ categories }}
      </p>
      <a :href="action.route">
        <h5>{{ title }}</h5>
      </a>
      <p>
        {{ description }}
      </p>
      <button class="btn btn-sm mb-0" :class="`btn-outline-${action.color}`" @click="goMap(urlLink)">
        {{ action.label }}
      </button>
    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbit&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Orbit&display=swap');

p, h5, button {
  font-family: "Orbit", sans-serif;
  font-weight: 400;
  font-style: normal;
}

button {
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: normal;
}
</style>