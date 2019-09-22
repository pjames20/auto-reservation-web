<template>
  <div class="q-ma-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
    >
      <q-input
        filled
        v-model="signUp.name"
        label="Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="signUp.phoneNo"
        label="Phone No."
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="signUp.email"
        label="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="signUp.date"
        label="Date"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="signUp.year"
        label="Year"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="signUp.make"
        label="Make"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="signUp.model"
        label="Model"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="signUp.questions"
        label="Question"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm q-mb-md"/>
      </div>
    </q-form>

    <q-table
      title="Reserved Clients"
      :data="data"
      :columns="columns"
      row-key="name"
    />

  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      signUp: {
        name: null,
        phoneNo: null,
        email: null,
        date: null,
        year: null,
        make: null,
        model: null,
        questions: null
      },
      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, sortable: true },
        { name: 'phoneNo', required: true, label: 'Phone Number', align: 'left', field: row => row.phoneNo, sortable: true },
        { name: 'email', required: true, label: 'Email', align: 'left', field: row => row.email, sortable: true },
        { name: 'date', required: true, label: 'Date', align: 'left', field: row => row.date, sortable: true },
        { name: 'year', required: true, label: 'Year', align: 'left', field: row => row.year, sortable: true },
        { name: 'make', required: true, label: 'Make', align: 'left', field: row => row.make, sortable: true },
        { name: 'model', required: true, label: 'Model', align: 'left', field: row => row.model, sortable: true },
        { name: 'questions', required: true, label: 'Questions', align: 'left', field: row => row.questions, sortable: true }
      ],
      data: []
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.data.push(this.signUp)
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
