<template>
    <h2>Delivery</h2>
    <FormKit type="group" name="delivery" v-model="fulfillment">
        <FormKit type="text" label="addressLine1" name="addressLine1" v-model='fulfillment.addressLine1' />
        <FormKit type="text" label="addressLine2" name="addressLine2" v-model='fulfillment.addressLine2' />
        <FormKit type="text" label="city" name="city" v-model='fulfillment.city' />
        <FormKit type="text" label="state" name="state" v-model='fulfillment.state' />
        <FormKit type="text" label="zip" name="zip" v-model='fulfillment.zip' />
    </FormKit>
</template>

<script setup lang="ts">
const fulfillment = defineModel({ required: true });
</script>
