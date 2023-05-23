<template>
    <div id="events" class="grid h-full bg-zinc-800 pt-10 overflow-auto"> 
      <div class="mb-10">
        <h1 class="justify-self-left text-xl sm:text-3xl text-zinc-500">Events</h1>
        <h2 class="justify-self-left text-md sm:text-xl text-zinc-500">A collection of gatherings I helped put on:</h2>
      </div>
      <div class="grid grid-cols-1 mx-8 gap-y-20 sm:grid-cols-3 sm:gap-12 sm:mx-12 place-items-center mb-10">
        <event-card
          v-for="e in events"
          :key="e.src"
          :event="e"
        ></event-card>
      </div>
    </div>
  </template>
  
<script lang="ts" setup>
import EventCard from '@/components/EventCard.vue'
import { EventData } from '@/types';

const events: EventData[] = [
  {
    alt: '',
    name: 'Blanco\'s Blackout Bash',
    src: '10-28-22-blackout-bash.png',
  },
  {
    alt: 'A black flyer with neon icons of dice, cards, a cigar as well as detail such as the date (April 8th), start time (6:30PM) & location (Lone Star Riverboat)',
    name: 'Springtime Casino Cruise',
    src: '04-08-23-party-barge.png',
  },
];
</script>
  
  <style>
  #portfolio {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  