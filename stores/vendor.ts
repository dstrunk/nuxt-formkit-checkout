import { defineStore } from "pinia";
import { useQuery } from "villus";

export const useVendorStore = defineStore('vendor', () => {
    const { data: vendorQueryData, isFetching: isVendorQueryFetching } = useQuery({
        query: ``,
    });

    const vendor = ref(vendorQueryData?.vendor);

    return {
        vendor,
        isVendorQueryFetching,
    };
});
