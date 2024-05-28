<template>
    <h2>Pickup</h2>
    <FormKit type="group" name="delivery">
        <FormKit type="text" label="date" name="date" v-model='fulfillment.date' />
        <FormKit type="text" label="time" name="time" v-model='fulfillment.time' />
    </FormKit>
</template>

<script setup lang="ts">
const fulfillment = defineModel({ required: true });
</script>
