<template>
  <div class="row q-ma-md">
    <div class="col-4"></div>
    <div class="col">
      <div class="row">
        <div class="col-5"></div>
        <div class="col">
          <div class="text-h4 q-mb-md">Location:</div>
        </div>
        <div class="col-5"></div>
      </div>
      <GmapMap
        :center="{lat:10.6738415, lng:122.3291748}"
        :zoom="16"
        map-type-id="roadmap"
        style="width: 700px; height: 500px"
      >
      </GmapMap>
    </div>
    <div class="col-4"></div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  data: function () {
    return {}
  }

}
</script>

<style scoped>

</style>
