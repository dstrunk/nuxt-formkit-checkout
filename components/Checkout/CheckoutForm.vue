<template>
  <FormKit type="form" :actions="false" use-local-storage #default="{ value }">
    <FormKit
        :allowIncomplete="false"
        type="multi-step"
        name="order"
        tabStyle="progress"
        stepsClass="$reset p-4"
    >
      <template #tabs />

      <div ref='parent'>
        <FormKit type="step" name="basic" nextLabel="Save & Continue">
          <template #stepInner='{ isValid, isActiveStep, hasBeenVisited, node }'>
            <CheckoutStepBasic :isActive='isActiveStep' :isValid='isValid' :hasBeenVisited='hasBeenVisited || false' :data='value' :node='node' />
          </template>

          <template #stepNext='{ handlers, node }'>
            <div class='flex justify-end w-full mt-8'>
              <FormKit type='button' @click.prevent='addBasicInfo(handlers, node.value)' label='Save & Continue' v-if='node.props.isActiveStep' />
            </div>
          </template>
        </FormKit>

        <FormKit type="step" name="fulfillment" nextLabel="Save & Continue">
          <template #stepInner='{ isValid, isActiveStep, hasBeenVisited, node }'>
            <CheckoutStepFulfillment :isActive='isActiveStep' :isValid='isValid' :hasBeenVisited='hasBeenVisited || false' :data='value' :node='node' class='mt-6' />
          </template>

          <template #stepActions='{ handlers, node }'>
            <div class='flex justify-between w-full mt-8' v-if='node.props.isActiveStep'>
              <FormKit type='button' @click.prevent='handlers.previous' label='Previous' />
              <FormKit type='button' @click.prevent='addFulfillmentInfo(handlers, node.value)' label='Save & Continue' />
            </div>
          </template>
        </FormKit>

        <FormKit type="step" name="recipientInfo" nextLabel="Save & Continue">
          <template #stepInner='{ isValid, isActiveStep, hasBeenVisited, node }'>
            <div class='mt-6'>
              <CheckoutStepRecipientInfo :isActive='isActiveStep' :isValid='isValid' :hasBeenVisited='hasBeenVisited || false' :data='value' :node='node' />
            </div>
          </template>

          <template #stepActions='{ handlers, node }'>
            <div class='flex justify-between w-full mt-8' v-if='node.props.isActiveStep'>
              <FormKit type='button' @click.prevent='handlers.previous' label='Previous' />
              <FormKit type='button' @click.prevent='addRecipientInfo(handlers, node.value)' label='Save & Continue' />
            </div>
          </template>
        </FormKit>

        <FormKit type="step" name="payment" nextLabel="Save & Continue">
          <template #stepInner='{ isValid, isActiveStep, hasBeenVisited, node }'>
            <div class='mt-6'>
              <CheckoutStepPayment :isActive='isActiveStep' :isValid='isValid' :hasBeenVisited='hasBeenVisited || false' :data='value' :node='node' />
            </div>
          </template>

          <template #stepActions='{ handlers, node }'>
            <div class='flex justify-between w-full mt-8' v-if='node.props.isActiveStep'>
              <FormKit type='button' @click.prevent='handlers.previous' label='Previous' />
              <FormKit type='button' @click.prevent='submitOrder(node.value)' label='Submit' />
            </div>
          </template>
        </FormKit>
      </div>
    </FormKit>
  </FormKit>
</template>

<script setup lang="ts">
import { useAutoAnimate } from "@formkit/auto-animate/vue";
import { useCartStore } from "~/stores/cart";
import useHasMounted from "~/composables/useHasMounted";
import type { StepHandlers } from "@formkit/addons";

const store = useCartStore();
const [parent] = useAutoAnimate();
const hasMounted = useHasMounted();

interface Quote {}

async function addBasicInfo(handler: StepHandlers, data) {
  handler.next();
  await store.addBasicInfo(data);
}

async function addFulfillmentInfo(handler: StepHandlers, data) {
  handler.next();
  await store.addFulfillmentInfo(data);
}

async function addRecipientInfo(handler: StepHandlers, data) {
  handler.next();
  await store.addRecipientInfo(data);
}

async function submitOrder(data) {
  await store.addPaymentInfo(data);
}
</script>

<style>
.formkit-input {
  @apply flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50;
}

.formkit-input[type=button] {
  @apply inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50;
}

.formkit-input[type=checkbox] {
  @apply h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground;
}

.formkit-outer[data-invalid=true] .formkit-input {
  @apply border-red-400 ring-red-400;
}

.formkit-label {
  @apply text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70;
}

.formkit-messages {
  @apply mt-2;
}

.formkit-message[data-message-type=validation] {
  @apply text-sm text-red-600;
}
</style>

<style scoped>
.formkit-step[hidden] {
  display: block;
}
</style>
