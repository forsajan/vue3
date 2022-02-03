<script setup>
const emit = defineEmits(['prev'])

const onPrev = () => {
  emit('prev')
}
</script>
<template>
  <div class="previous" @click="onPrev">&lt;&lt;</div>
</template>
<style scoped>
  .previous {
    flex: 1;
    padding: 10px;
    cursor: pointer;
    background-color: aquamarine;
    text-align: left;
  }
</style>