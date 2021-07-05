<template>
  <div class="theme-generator">
    <div class="theme-title">
      Thème :
    </div>
    <div class="theme-wrapper">
      <div class="theme">
        {{ theme }}
      </div>
      <div class="button-wrapper">
        <v-btn icon @click="refreshTheme">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import {Component, Vue} from 'nuxt-property-decorator'
import {generateTheme} from '~/service/theme-generator'

@Component
export default class ThemeGenerator extends Vue {
  theme = generateTheme()

  refreshTheme() {
    this.theme = generateTheme()
  }
}
</script>

<style lang="less">
.theme-generator {
  padding: 30px;
  text-align: left;
  color: #ffffff;

  .theme-title {
    font-size: 18px;
    font-weight: 400;
  }

  .theme-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;

    .theme {
      flex: 1;
      font-size: 25px;
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
