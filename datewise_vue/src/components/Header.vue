<template>
    <div class="container-fluid pb-5">
      <div
        class="page-header min-height-150 border-radius-xl mt-4"
        :style="{ backgroundImage: `url(${setImgUrl})` }"
      >
        <span class="mask bg-gradient-primary opacity-1"></span>
      </div>
      <div class="card card-body mx-3 mx-md-4 mt-n6 fs-50">
        <h2 style="text-align: center; color: black; letter-spacing: 2px;">{{ title }}</h2>
      </div>
    </div>
</template>

<script>
export default {
  name : "headercomponent",
  props : {
      title : { type : String, required: true },
      type : { type : String, required:false }
  },
  computed: {
    setImgUrl() {
      switch (this.type) {
        case "1": // home
          return 'https://i.pinimg.com/originals/8c/b1/8b/8cb18bc79c6bc2aa80c85819841d87b8.png';
        case "2": // calendar
          return 'https://i.pinimg.com/originals/8c/b1/8b/8cb18bc79c6bc2aa80c85819841d87b8.png';
        case "3": // recommend
          return 'https://i.pinimg.com/originals/3c/9c/f1/3c9cf1f3c4214aa6a1106cd239db34cb.jpg';
        case "4": // charts
          return 'https://i.pinimg.com/originals/96/16/33/96163342988a4605804326c4f1c85b41.jpg';
        case "5": // search
          return 'https://i.pinimg.com/originals/b4/38/00/b43800ccf99625b3efee80cfff41703f.jpg';
        default:
          return 'https://i.pinimg.com/originals/8c/b1/8b/8cb18bc79c6bc2aa80c85819841d87b8.png';
      }
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Orbit&display=swap');

h2 {
    font-family: "DM Serif Text", serif;
    font-weight: bold;
    font-style: normal;
    letter-spacing: 1px;
}
</style>