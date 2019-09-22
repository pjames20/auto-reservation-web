<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="directions_car" class="q-mr-sm" to="/" />

        <q-toolbar-title>
          Automotive Reservation
        </q-toolbar-title>

        <q-tabs v-model="tab" shrink stretch>
<!--          <q-route-tab name="home" label="Home" to=""  />-->
          <q-route-tab name="services" label="Services" to="/services" />
          <q-route-tab name="book_now" label="Book Now" to="/book_now" />
          <q-route-tab name="inventory" label="Inventory" to="/inventory" />
          <q-route-tab name="location" label="Location" to="/location" />
          <q-route-tab name="about" label="About" to="/about" />
        </q-tabs>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      tab: ''
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
