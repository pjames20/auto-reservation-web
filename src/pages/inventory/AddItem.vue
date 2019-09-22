<template>
  <div class="q-ma-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
    >
      <q-input
        filled
        v-model="item.customerName"
        label="Customer Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="item.dateTime"
        label="Date Time"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="item.itemService"
        label="Service"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="item.admin"
        label="Admin"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="item.cost"
        label="Cost"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm q-mb-md"/>
      </div>
    </q-form>

    <q-table
      title="Items"
      :data="data"
      :columns="columns"
      row-key="name"
    />

  </div>
</template>

<script>
export default {
  name: 'AddItem',
  data () {
    return {
      item: {
        customerName: null,
        dateTime: null,
        itemService: null,
        admin: null,
        cost: null
      },
      columns: [
        { name: 'customerName', required: true, label: 'Name', align: 'left', field: row => row.customerName, sortable: true },
        { name: 'dateTime', required: true, label: 'Email', align: 'left', field: row => row.dateTime, sortable: true },
        { name: 'service', required: true, label: 'Date', align: 'left', field: row => row.itemService, sortable: true },
        { name: 'admin', required: true, label: 'Year', align: 'left', field: row => row.admin, sortable: true },
        { name: 'cost', required: true, label: 'Make', align: 'left', field: row => row.cost, sortable: true }
      ],
      data: []
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.data.push(this.item)
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: ''
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
      }
    },
    onReset () {
    }
  }
}
</script>

<style scoped>
</style>
