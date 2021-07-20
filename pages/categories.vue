<template>
  <div class="page-wrapper">
    <div class="page-header">
      <div>
        <v-btn icon color="primary" to="/">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
      <h1>Liste des catégories</h1>

      <v-text-field
        v-model="query"
        outlined
        dense
        label="Rechercher"
        append-icon="mdi-magnify"
      />
    </div>

    <v-expansion-panels popout>
      <v-expansion-panel v-for="(item, i) in filteredCategories" :key="i" class="list-item">
        <v-expansion-panel-header class="list-header">
          {{ item.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="list-content">
          {{ item.description }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {Context} from '@nuxt/types'

const normalize = (s: string) => s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '')

type CategoryList = { title: string; description: string; }[]
type CategoryDoc = { categories: CategoryList }

@Component
export default class Categories extends Vue {
  query = ''
  categories!: CategoryList;

  async asyncData({$content}: Context) {
    const {categories} = (await $content('categories').sortBy('title').fetch()) as unknown as CategoryDoc

    return {categories}
  }

  get filteredCategories() {
    const queryClean = normalize(this.query)

    return this.categories.filter(({title, description}) => normalize(title).includes(queryClean) || normalize(description).includes(queryClean))
  }
}
</script>

<style lang="less" scoped>
.page-wrapper {
  //background: #51a2b6;
  //background: linear-gradient(145deg, #73d3a7 0%, #51a2b6 100%);
  background-color: rgb(245 245 247);
  padding: 26px;
  margin: -12px;
  min-height: 100vh;

  .page-header {
    padding: 12px;
  }

  .list-header{
    font-weight: 600;
    font-size: 16px;
    color: #3c3c3c;
  }

  .list-content {
    border-top: 1px solid #d2d2d2;
    padding-top: 16px;
    color: #3c3c3c;
    text-align: justify;
  }
}
</style>
