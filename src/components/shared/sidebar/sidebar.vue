<template src="./sidebar.html">
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { text: 'Products', link: '/products' },
                { text: 'Clients', link: '/clients' },
                { text: 'Taxes', link: '/taxes' },
                { text: 'Sales', link: '/sales' },
            ],
        };
    },
};
</script>

<style scoped src="./sidebar.css">

</style>
