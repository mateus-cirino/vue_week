<template>
  <div>
    <h1>Lista de eventos</h1>
    <router-link :to="{ name: 'event-show', params: { id: 1 } }"
      >Evento #1</router-link
    >
    <router-view />
  </div>
</template>
