<template>
  <li v-for="item in cart.items" :key="item.id">
    {{ item.name }} - ${{ item.price?.amount }}
  </li>
</template>

<script setup lang="ts">
import cart from '../../data/cart.json';
</script>
