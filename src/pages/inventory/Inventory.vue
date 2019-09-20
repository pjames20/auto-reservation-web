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
          <q-route-tab name="add_item" icon="add" label="Sign Up" to="/inventory/add_item"/>
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
  name: 'Inventory',
  data () {
    return {
      tab: 'inventory',
      splitterModel: 20
    }
  }
}
</script>

<style scoped>

</style>
