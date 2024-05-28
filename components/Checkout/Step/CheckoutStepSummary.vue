<template>
  <div class='flex space-x-2 py-2'>
    <div v-if='hasBeenVisited'>
      <Icon name='heroicons:check-circle-16-solid' v-if='isValid' class='text-emerald-500 w-5 h-5' />
      <Icon name='heroicons:no-symbol-16-solid' v-else class='text-red-600 w-5 h-5' />
    </div>
    <div v-else>
      <span class='w-5 h-5'>
        {{ stepCount }}
      </span>
    </div>

    <div class='flex space-x-3 items-center w-full'>
      <h2 class='text-lg font-bold'>
        {{ title }}
      </h2>

      <button type='button' v-if='!isActive && hasBeenVisited' @click='emit("edit")' class='text-sm text-blue-500 font-bold mt-0.5'>
        Edit
      </button>
    </div>
  </div>

  <div v-if='!isActive && data && hasBeenVisited'>
    <CheckoutStepSummaryPreview :data />
  </div>
</template>

<script setup lang='ts'>
import CheckoutStepSummaryPreview from "~/components/Checkout/Step/CheckoutStepSummaryPreview.vue";

const props = defineProps<{
  isActive: boolean;
  isValid: boolean;
  hasBeenVisited: boolean;
  data: object;
  title: string;
  stepCount: string;
}>();

const { isActive, isValid, hasBeenVisited, data } = toRefs(props);

const emit = defineEmits<{
  edit: [];
}>();
</script>

<style scoped>
</style>
