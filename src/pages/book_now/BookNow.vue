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
          <q-route-tab name="sign_up" icon="add" label="Sign Up" to="/book_now/sign_up"/>
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
  name: 'BookNow',
  data () {
    return {
      tab: 'mails',
      splitterModel: 20
    }
  }
}
</script>

<style scoped>

</style>
