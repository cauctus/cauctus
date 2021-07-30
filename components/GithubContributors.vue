<template>
  <div>
    <v-list class="pa-0">
      <v-list-item v-for="(contributor, i) in contributors" :key="i" :href="contributor.html_url">
        <v-list-item-avatar>
          <v-img :src="contributor.avatar_url" />
        </v-list-item-avatar>
        <v-list-item-content>
          {{ contributor.login }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

interface Contributor {
    login: string
    'avatar_url': string
    'html_url': string
}

@Component
export default class GithubContributors extends Vue {
  contributors: Contributor[] = []
  fetchOnServer = true

  async fetch() {
    this.contributors = await this.$axios.$get('https://api.github.com/repos/CorentinTh/cauctus/contributors')
  }
}
</script>
