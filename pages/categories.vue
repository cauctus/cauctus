<template>
  <div class="page-wrapper">
    <div class="page-header">
      <div>
        <h1 class="text-center">
          Les catégories
        </h1>
      </div>

      <v-text-field
        v-model="query"
        outlined
        dense
        dark
        label="Rechercher"
        :append-icon="icons.mdiMagnify"
      />
    </div>

    <div class="content-wrapper">
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
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {mdiMagnify} from '@mdi/js'
import categories from '~/data/categories.yaml'

const normalize = (s: string) => s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '')

type CategoryList = { title: string; description: string; }[]

@Component
export default class Categories extends Vue {
  query = ''
  categories: CategoryList = categories;
  icons = {
    mdiMagnify
  }

  get filteredCategories() {
    const queryClean = normalize(this.query)

    return this.categories.filter(({title, description}) => normalize(title).includes(queryClean) || normalize(description).includes(queryClean))
  }
}
</script>

<style lang="less" scoped>

h1{
  font-weight: 400;
  margin-bottom: 20px;
}

.page-wrapper {
  //background: #51a2b6;
  //background: linear-gradient(145deg, #73d3a7 0%, #51a2b6 100%);
  background-color: rgb(245 245 247);
  margin: -12px;
  min-height: 100vh;
  padding-top: 200px;
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
