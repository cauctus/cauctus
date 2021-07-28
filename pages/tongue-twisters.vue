<template>
  <div class="page-wrapper">
    <div class="page-header">
      <v-row no-gutters justify="center" align="center">
        <v-btn icon dark large @click="$store.commit('sidenav/open')">
          <v-icon large>
            {{ icons.mdiMenu }}
          </v-icon>
        </v-btn>
        <v-spacer />
        <h1>Virelangues</h1>
      </v-row>

      <v-row no-gutters justify="center" align="center" class="flex-nowrap mt-7">
        <div>
          <v-btn
            icon
            dark
            class="mr-4"
            @click="shuffle"
          >
            <v-icon>{{ icons.mdiRefresh }}</v-icon>
          </v-btn>
        </div>
        <div class="flex">
          <v-text-field
            v-model="query"
            clearable
            outlined
            dense
            dark
            hide-details="true"
            label="Rechercher"
            :append-icon="icons.mdiMagnify"
          />
        </div>
      </v-row>
    </div>

    <div class="content-wrapper">
      <template v-for="(item, i) in filteredTongueTwisters">
        <v-card :key="i" class="mt-2">
          <v-card-text class="text-justify">
            {{ item }}
          </v-card-text>
        </v-card>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {mdiMagnify, mdiMenu, mdiRefresh} from '@mdi/js'
import tongueTwisters from '~/data/tongue-twisters.yaml'
import { shuffleArray } from '~/helpers/utils'

const normalize = (s: string) => s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '')

@Component
export default class TongueTwisters extends Vue {
  query: string | null = null
  tongueTwisters: string[] = tongueTwisters;
  icons = {
    mdiMagnify,
    mdiMenu,
    mdiRefresh
  }

  head() {
    return {title: 'Virelangues'}
  }

  get filteredTongueTwisters() {
    if (!this.query) {
      return this.tongueTwisters
    }

    const queryClean = normalize(this.query)

    return this.tongueTwisters.filter(s => normalize(s).includes(queryClean))
  }

  shuffle () {
    this.tongueTwisters = shuffleArray(tongueTwisters)
  }
}
</script>

<style lang="less" scoped>

h1{
  font-weight: 300;
}

.page-wrapper {
  //background: #51a2b6;
  //background: linear-gradient(145deg, #73d3a7 0%, #51a2b6 100%);
  background-color: rgb(245 245 247);
  margin: -12px;
  min-height: 100vh;
  padding-top: 160px;
  position: relative;

  .page-header {
    color: #ffffff;
    padding: 26px 42px;
    background: #51a2b6;
    background: linear-gradient(145deg, #73d3a7 0%, #51a2b6 100%);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 6;
    box-shadow: 0 -4px 25px 0 rgba(0, 0, 0, 0.4);
  }

  .content-wrapper {
    padding: 26px;
    z-index: 5;
  }

  .list-header{
    font-weight: 600;
    font-size: 16px;
    color: #3c3c3c;
  }

  .list-content {
    color: #3c3c3c;
    text-align: justify;
  }
}
</style>
