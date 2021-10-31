<template>
  <div>
    <v-app>
      <headerArea/>
      <topBarArea/>
      <mainContentsArea/>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import headerArea from './components/Header.vue';
import topBarArea from './components/Topbar.vue';
import mainContentsArea from './components/Maincontents.vue';

export default Vue.extend({
  name: 'App',
  components: {
    headerArea,
    topBarArea,
    mainContentsArea,
  },

  data: () => ({
    //
  }),
});
</script>
