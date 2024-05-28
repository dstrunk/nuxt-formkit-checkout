<template>
  <div ref='parent'>
    <CheckoutStepSummary
        :isValid
        :isActive
        :hasBeenVisited
        :data='recipientInfo'
        title='Recipient Info'
        stepCount='3'
        v-if='hasMounted'
        @edit='node.context.handlers.incrementStep(0)()'
    />

    <div class='pl-7' v-if='isActive'>
      <FormKit type="text" label="firstName" name="firstName" v-model='recipientInfo.firstName' />
      <FormKit type="text" label="lastName" name="lastName" v-model='recipientInfo.lastName' />
      <FormKit type="text" label="message" name="message" v-model='recipientInfo.message' />
      <FormKit type="text" label="signature" name="signature" v-model='recipientInfo.signature' />
      <FormKit type="text" label="occasion" name="occasion" v-model='recipientInfo.occasion' />
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckoutStepSummary from "~/components/Checkout/Step/CheckoutStepSummary.vue";
import { useAutoAnimate } from "@formkit/auto-animate/vue";
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

const [parent] = useAutoAnimate()
const hasMounted = useHasMounted();

const recipientInfo = reactive({
  firstName: '',
  lastName: '',
  message: '',
  signature: '',
  occasion: '',
});

defineEmits<{
  submit: [];
}>();
</script>
