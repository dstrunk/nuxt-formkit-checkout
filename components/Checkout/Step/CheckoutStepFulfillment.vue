<template>
  <div>
    <div ref='parent'>
      <CheckoutStepSummary
          :isValid
          :isActive
          :hasBeenVisited
          :data='fulfillmentInfo'
          title='Fulfillment Info'
          stepCount='2'
          v-if='hasMounted'
          @edit='node.context.handlers.incrementStep(0)()'
      />

      <div class='pl-7' v-if='isActive'>
        <div class="flex">
          <button type="button" @click.prevent="isDelivery = true">
            Delivery
          </button>

          <button type="button" @click.prevent="isDelivery = false">
            Pickup
          </button>
        </div>

        <div ref='deliveryParent'>
          <CheckoutStepFulfillmentDelivery v-if="isDelivery" v-model="delivery" />
          <CheckoutStepFulfillmentPickup v-else v-model="pickup" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAutoAnimate } from "@formkit/auto-animate/vue";
import CheckoutStepSummary from "~/components/Checkout/Step/CheckoutStepSummary.vue";
import useHasMounted from "~/composables/useHasMounted";
import type { FormKitGroupValue } from "@formkit/core";

const props = defineProps<{
  isActive: boolean;
  isValid: boolean;
  hasBeenVisited: boolean;
  data: FormKitGroupValue | undefined;
  node: object;
}>();

const { isActive, isValid, hasBeenVisited, data, node } = toRefs(props);

defineEmits<{
  submit: [];
}>();

const isDelivery = ref(true);
const pickup = reactive({
  date: '',
  time: '',
});
const delivery = reactive({
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zip: '',
});
const [parent] = useAutoAnimate();
const [deliveryParent] = useAutoAnimate();
const hasMounted = useHasMounted();

const fulfillmentInfo = computed(() => isDelivery.value ? delivery : pickup);
</script>
