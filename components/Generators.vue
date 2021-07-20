<template>
  <div>
    <BaseGenerator
      v-model="theme"
      title="Thème"
      @refresh="refreshTheme"
    />

    <BaseGenerator
      v-model="place"
      title="Lieu :"
      @refresh="refreshPlace"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {generateTheme} from '~/service/theme-generator'
import BaseGenerator from '~/components/BaseGenerator.vue'
import {randFromArray} from '~/helpers/utils'

import places from '~/data/places.yaml'

@Component({components: {BaseGenerator}})
export default class Generators extends Vue {
  theme = generateTheme()
  place: string = ''

  refreshTheme() {
    this.theme = generateTheme()
  }

  refreshPlace() {
    this.place = randFromArray(places as string[])
  }

  mounted() {
    this.refreshPlace()
  }
}
</script>
