export default function useHasMounted() {
    const hasMounted = ref(false);

    onMounted(() => hasMounted.value = true);
    onUnmounted(() => hasMounted.value = false);

    return hasMounted;
}
