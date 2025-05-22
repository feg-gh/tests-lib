<script setup>
import { mainStore } from "../stores/store";
const store = mainStore();
</script>


<template>
  <div class="item-list">
    <h2>Catalog Items</h2>
    <ul>
      <li 
        v-for="item in store.itemsList" 
        :key="item.id"
        v-show="item.inStock"
        >
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <p>Price: {{ item.price }}</p>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.item-list {
  max-width: 600px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
}

.item-list h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.item-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item-list li {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.item-list li:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.item-list h3 {
  margin: 0 0 6px;
  font-size: 1.2rem;
  color: #222;
}

.item-list p {
  margin: 4px 0;
  color: #555;
  font-size: 0.9rem;
}
</style>
