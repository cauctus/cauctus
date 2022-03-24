<template>
  <div class="generator">
    <div v-if="title" class="generator-title">
      <v-icon v-if="icon" small dark>
        {{ icon }}
      </v-icon>
      {{ title }}
    </div>
    <div class="generator-result-wrapper">
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <div
            class="generator-result"
            v-bind="attrs"
            v-on="on"
          >
            {{ value }}
          </div>
        </template>
        <span>{{ value }}</span>
      </v-tooltip>
      <div class="button-wrapper">
        <template v-if="tooltip">
          <v-dialog
            width="500"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>
                  {{ icons.mdiInformationOutline }}
                </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="grey lighten-3">
                {{ value }}
              </v-card-title>

              <v-card-text class="text-justify pa-6">
                {{ tooltip }}
              </v-card-text>
            </v-card>
          </v-dialog>
        </template>

        <v-btn icon @click="refresh()">
          <v-icon>{{ icons.mdiRefresh }}</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import {mdiInformationOutline, mdiRefresh} from '@mdi/js'

@Component
export default class BaseGenerator extends Vue {
  @Prop() readonly title: string|undefined
  @Prop() readonly icon: string|undefined
  @Prop({default: () => () => 'result'}) readonly generator!: () => string | { description: string, title: string }
  value: string = 'result';
  tooltip: string | null = null;
  icons = {
    mdiInformationOutline,
    mdiRefresh
  }

  created() {
    this.refresh({track: false})
  }

  refresh({track} = {track: true}) {
    const generated = this.generator()

    if (track) {
      this.$plausible?.trackEvent('generator:refresh', {props: {generator: this.title?.toLowerCase().split(' ')[0] ?? 'generator'}})
    }

    if (typeof generated === 'string') {
      this.value = generated
    } else {
      this.value = generated.title
      this.tooltip = generated.description
    }
  }
}
</script>

<style lang="less">
.generator {
  text-align: left;
  color: #ffffff;

  .generator-title {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: -8px;
    margin-top: 15px;

    .v-icon {
      margin-bottom: 3px;
    }
  }

  .generator-result-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 0;

    .generator-result {
      flex: 1;
      font-size: 20px;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .button-wrapper {
      .v-btn {
        color: white;
      }
    }
  }
}
</style>
