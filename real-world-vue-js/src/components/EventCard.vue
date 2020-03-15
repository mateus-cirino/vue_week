<template>
    <div>
        <h1>
            <router-link :to="{ name: 'event-show', params: { id: 1 } }">
                {{ title }}
            </router-link>
        </h1>
    </div>
</template>

<script>
    export default {
        props: ["id"],
        computed: {
            title() {
                return "Evento " + this.id;
            }
        },
    }
</script>

<style scoped>

</style>