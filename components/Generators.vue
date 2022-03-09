<template>
  <div>
    <BaseGenerator
      v-for="(generator, i) in generators"
      ref="gens"
      :key="i"
      :title="generator.title"
      :generator="generator.refresh"
    />
    <div class="text-center">
      <v-btn class="ma-5" icon dark large @click="refreshAll">
        <v-icon large>
          {{ icons.mdiRefresh }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {mdiRefresh} from '@mdi/js'
import {categories} from '@cauctus/dataset'
import {generateTheme} from '~/service/theme-generator'
import BaseGenerator from '~/components/BaseGenerator.vue'
import {randFromArray} from '~/helpers/utils'

import places from '~/data/places.yaml'
import characters from '~/data/characters.yaml'
import actions from '~/data/actions.yaml'
import feelings from '~/data/feelings.yaml'
import events from '~/data/events.yaml'

@Component({components: {BaseGenerator}})
export default class Generators extends Vue {
  icons = {
    mdiRefresh
  }

  generators = [
    {
      title: 'Catégorie :',
      refresh: () => randFromArray(categories as { title: string, description: string }[])
    },
    {
      title: 'Thème :',
      refresh: () => generateTheme()
    },
    {
      title: 'Action :',
      refresh: () => randFromArray(actions as string[])
    },
    {
      title: 'Lieu :',
      refresh: () => randFromArray(places as string[])
    },
    {
      title: 'Personnage :',
      refresh: () => randFromArray(characters as string[])
    },
    {
      title: 'Sentiment :',
      refresh: () => randFromArray(feelings as string[])
    },
    {
      title: 'Événement :',
      refresh: () => randFromArray(events as string[])
    }
  ]

  refreshAll() {
    this.$plausible?.trackEvent('generator:refreshAll');
    (this.$refs.gens as BaseGenerator[]).forEach(el => el.refresh({track: false}))
  }
}
</script>
