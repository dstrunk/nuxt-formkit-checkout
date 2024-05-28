<template>
  <dl v-if='Object.keys(data).length' class='grid grid-cols-2'>
    <template v-for='(value, key) in data' :key='slugify(key)'>
      <dt v-text='key' v-if='value !== ""' class='text-sm text-gray-500 font-bold'></dt>
      <dd v-text='value' v-if='value !== ""' class='text-sm text-gray-500'></dd>
    </template>
  </dl>
</template>

<script setup lang='ts'>
import { slugify } from "@formkit/utils";

const props = defineProps<{
  data: object;
}>();

const { data } = toRefs(props);
</script>
