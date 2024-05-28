<template>
  <div ref='parent'>
    <CheckoutStepSummary
        :isValid
        :isActive
        :hasBeenVisited
        :data
        title='Payment Info'
        stepCount='4'
        v-if='hasMounted'
        @edit='node.context.handlers.incrementStep(0)()'
    />

    <div class='pl-7' v-if='isActive'>
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

const [parent] = useAutoAnimate();
const hasMounted = useHasMounted();

defineEmits<{
  submit: [];
}>();
</script>
