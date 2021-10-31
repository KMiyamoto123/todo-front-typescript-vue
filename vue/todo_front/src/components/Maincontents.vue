<template>
  <div>
    <v-container>
      <v-row>
        <draggable
          tag="v-col"
          v-model="contents"
          class="col-12"
          :options="{delay:200, animation:300}"
        >
          <v-card
            class="my-5"
            v-for="(content, key) in contents"
            :key="key"
          >
            <v-card-title>
              {{ content.title }}
            </v-card-title>
            <v-row justify="center" align="center">
              <v-col cols="2" align="center">
                <v-btn
                  icon
                  v-on:mouseover="mouseOverAction(key)"
                  v-on:mouseleave="mouseLeaveAction(key)"
                >
                  <v-icon
                    v-if="content.hoverFlag"
                    large
                  >
                    mdi-circle-outline
                  </v-icon>
                  <v-icon
                    v-else
                    large
                  >
                    mdi-check-circle-outline
                  </v-icon>
                </v-btn>
              </v-col>
              <v-row justify="center" align="center">
                <v-col cols="8">
                  <v-textarea
                    auto-grow
                    clearable
                    clear-icon="mdi-close-circle"
                    label="Detail"
                  >
                  </v-textarea>
                </v-col>
                <dateArea/>
              </v-row>
            </v-row>
          </v-card>
        </draggable>
      </v-row>
    </v-container>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue'
  import draggable from 'vuedraggable'
  import dateArea from './Date.vue'

  export default Vue.extend({
    name: 'mainContentsArea',
    components: {
      draggable,
      dateArea
    },
    data: function () {
      return {
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        contents: [
          {title: 'Test1', hoverFlag: true},
          {title: 'Test2', hoverFlag: true},
          {title: 'Test3', hoverFlag: true},
          {title: 'Test4', hoverFlag: true},
          {title: 'Test5', hoverFlag: true},
          {title: 'Test6', hoverFlag: true},
          {title: 'Test7', hoverFlag: true},
          {title: 'Test8', hoverFlag: true},
          {title: 'Test9', hoverFlag: true},
          {title: 'Test10', hoverFlag: true},
        ],
      }
    },
    methods: {
      // eslint-disable-next-line
      mouseOverAction(key: any){
        this.contents[key].hoverFlag = false;
      },
      // eslint-disable-next-line
      mouseLeaveAction(key: any){
        this.contents[key].hoverFlag = true;
      }
    }
  })
</script>

<style>
</style>