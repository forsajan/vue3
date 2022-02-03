<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { generateFakeData, Item } from '../models/item.model'
import { useMainStore } from '../store'

const items = ref<Item[]>([])

const store = useMainStore()

onMounted(() => {
  items.value = store.items
})

const createItem = () => {
  store.createNewItem(generateFakeData())
}

function deleteItem(id: string) {
  store.deleteItem(id)
}

const updateItem = (id: string) => {
  store.updateItem(id, generateFakeData())
}
</script>
<template>
<h1>Items</h1>
<button @click="createItem">New Item</button>
<div class="container">
  <table class="item-table">
    <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
    </thead>
    <tr v-for="(item, index) in items">
      <td>{{ item.name }}</td>
      <td>{{ item.description }}</td>
      <td><button @click="updateItem(item.id)">edit</button></td>
      <td><button @click="deleteItem(item.id)">delete</button></td>
    </tr>
  </table>
</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.item-table {
  border-collapse: collapse;
  border: 1px solid black;
}
</style>