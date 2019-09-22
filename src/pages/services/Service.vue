<template>
  <div>
    <q-splitter
      v-model="splitterModel"
    >
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-grey-9"
        >
          <q-route-tab name="services" icon="local_shipping" label="Services" to="/services/services_list"/>
        </q-tabs>
      </template>

      <template v-slot:after>
        <router-view />
      </template>

    </q-splitter>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      tab: 'services',
      splitterModel: 20
    }
  }
}
</script>

<style scoped>

</style>
