import { defineStore } from "pinia";
import { useMutation, useQuery } from "villus";
import { watch } from "vue";

interface Vendor {}
interface Cart {}

export const useCartStore = defineStore('cart',  () =>{
    // const { data: cartQueryData, isFetching: isCartQueryFetching, execute: executeCartQuery } = useQuery({
    //     query: ``,
    // });
    //
    // const cart = ref(cartQueryData?.cart);

    const { data: cartMutationData, isFetching: isCartMutationFetching, execute: executeCartMutation } = useMutation(`{}`);

    // watch(() => cartMutationData, async () => {
    //     await executeCartQuery();
    // });

    async function addBasicInfo(quote) {
        await executeCartMutation({
            addBasicInfo: quote,
        });
    }

    async function addFulfillmentInfo(quote) {
        await executeCartMutation({
            addFulfillmentInfo: quote,
        });
    }
    //
    async function addFulfillmentDate(quote) {
        await executeCartMutation({
            addFulfillmentDate: quote,
        });
    }

    async function addRecipientInfo(quote) {
        await executeCartMutation({
            addRecipientInfo: quote,
        });
    }

    async function addPaymentInfo(quote) {
        await executeCartMutation({
            addPaymentInfo: quote,
        });
    }

    return {
        // cart,
        // isCartQueryFetching,
        isCartMutationFetching,

        addBasicInfo,
        addFulfillmentInfo,
        addFulfillmentDate,
        addRecipientInfo,
        addPaymentInfo,
    };
});
