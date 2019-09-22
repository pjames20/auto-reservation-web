<template>
  <div class="row q-ma-md">
    <div class="col-4"></div>
    <div class="col">
      <div class="text-h4 q-mb-md">Contact Us!</div>
      <div class="text-h6 q-mb-md">Owner Facebook:</div>
      <q-btn
        size="35px"
        round
        icon="fab fa-facebook-f"
        @click="openFaceBook"
      />
    </div>
    <div class="col-4"></div>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    openFaceBook () {
      window.open('https://www.facebook.com/jojo.gierza.3', '_blank')
    }
  }
}
</script>

<style scoped>

</style>
