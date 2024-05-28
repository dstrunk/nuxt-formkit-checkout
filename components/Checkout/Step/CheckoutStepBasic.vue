<template>
  <div>
    <div ref='parent'>
      <CheckoutStepSummary
          :isValid
          :isActive
          :hasBeenVisited
          :data='basicInfo'
          title='Basic Info'
          stepCount='1'
          v-if='hasMounted'
          @edit='node.context.handlers.incrementStep(0)()'
      />

      <div class='pl-7 flex flex-col space-y-4' v-if='isActive'>
        <FormKit
            type="text"
            label="firstName"
            name="firstName"
            validation='required'
            v-model='basicInfo.firstName'
        />
        <FormKit
            type="text"
            label="lastName"
            name="lastName"
            validation='required'
            v-model='basicInfo.lastName'
        />
        <FormKit
            type="text"
            label="email"
            name="email"
            v-model='basicInfo.email'
        />
        <FormKit
            type="text"
            label="phone"
            name="phone"
            v-model='basicInfo.phone'
        />
        <FormKit
            type="checkbox"
            label="Something"
            name="Something"
            v-model='basicInfo.something'
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const { isActive, isValid, hasBeenVisited, data } = toRefs(props);

const [parent] = useAutoAnimate()
const hasMounted = useHasMounted();

const basicInfo = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  something: '',
});

defineEmits<{
  submit: [];
}>();
</script>
