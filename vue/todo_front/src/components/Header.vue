<template>
  <div>
    <v-app-bar
    color="teal lighten-3"
    dense
    dark
    >
      <v-toolbar-title
        @click="$router.push('/')"
        style="cursor:pointer"
      >
        {{title}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="#">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'headerArea',

    data: function () {
      return {
        title: 'Todo'
      }
    }
  })
</script>

<style >
</style>