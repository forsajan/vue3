<script setup>
import { ref } from 'vue'
import Previous from './Previous.vue';

const props = defineProps({
  data: Array
})

const current = ref(0)

const onPrev = () => {
  current.value > 0 ? current.value-- : current.value
}

const next = () => {
  const max = props.data.length - 1
  current.value < max ? current.value++ : current.value
}
</script>

<template>
  <div class="card-container">
    <!-- <div class="prevous" @click="prev">&lt;&lt;</div> -->
    <Previous @prev="onPrev"/>
    <div class="data"><p>{{ data[current] }}</p></div>
    <div class="next" @click="next">&gt;&gt;</div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

.card-container {
  display: flex;
  flex-direction: row;
}

.prevous, .next {
  flex: 1;
  padding: 10px;
  cursor: pointer;
  background-color: aquamarine;  
}
.prevous {
  text-align: left;
}
.next {
  text-align: right;
}
.data {
  flex: 30;
  text-align: center;
  padding: 10px;
  background-color: gray;
  color: #fff;
}
</style>