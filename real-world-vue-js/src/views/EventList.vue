<template>
  <div>
    <h1>Lista de eventos</h1>
    <EventCard v-bind:id=id></EventCard>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
export default {
  data() {
    return {
      id: '1'
    };
  },
  components: {
    EventCard
  }
};
</script>
