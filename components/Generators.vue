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

    <BaseGenerator
      v-model="character"
      title="Personnage :"
      @refresh="refreshCharacters"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {generateTheme} from '~/service/theme-generator'
import BaseGenerator from '~/components/BaseGenerator.vue'
import {randFromArray} from '~/helpers/utils'

import places from '~/data/places.yaml'
import characters from '~/data/characters.yaml'

@Component({components: {BaseGenerator}})
export default class Generators extends Vue {
  theme = generateTheme()
  place: string = ''
  character: string = ''

  refreshTheme() {
    this.theme = generateTheme()
  }

  refreshPlace() {
    this.place = randFromArray(places as string[])
  }

  refreshCharacters() {
    this.character = randFromArray(characters as string[])
  }

  created() {
    this.refreshPlace()
    this.refreshCharacters()
  }
}
</script>
