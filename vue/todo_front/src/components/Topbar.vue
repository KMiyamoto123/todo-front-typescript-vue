<template>
  <div>
    <v-tabs>
      <v-tab>TODO</v-tab>
      <v-tab>Calender</v-tab>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon
          large
          color="pink lighten-2"
        >
          mdi-plus-circle-outline
        </v-icon>
        Add
      </v-btn>
    </v-tabs>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'topBarArea',
    data: function () {
      return {
        //
      }
    }
  })
</script>

<style>
</style>