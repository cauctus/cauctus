<template>
  <div class="generator">
    <div class="generator-title">
      {{ title }}
    </div>
    <div class="generator-result-wrapper">
      <div class="generator-result">
        {{ result }}
      </div>
      <div class="button-wrapper">
        <v-btn icon @click="$emit('refresh')">
          <v-icon>{{ icons.mdiRefresh }}</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Model, Prop, Vue} from 'nuxt-property-decorator'
import {mdiRefresh} from '@mdi/js'

@Component
export default class BaseGenerator extends Vue {
  @Prop({default: 'title'}) readonly title!: string
  @Model('change') readonly result!: string
  icons = {
    mdiRefresh
  }
}
</script>

<style lang="less">
.generator {
  text-align: left;
  color: #ffffff;
  margin: 10px 0;

  .generator-title {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: -8px;
  }

  .generator-result-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;

    .generator-result {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
    }

    .button-wrapper {
      .v-btn {
        color: white;
      }
    }
  }
}
</style>
