<template>
  <div class="index-wrapper" :class="{collapsed}">
    <div class="panel panel-theme">
      <v-row no-gutters justify="center" align="center" class="header">
        <v-btn icon dark large @click="$store.commit('sidenav/open')">
          <v-icon large>
            {{ icons.mdiMenu }}
          </v-icon>
        </v-btn>
        <v-spacer />
        <h1 class="text-center">
          Cauctus
        </h1>
      </v-row>

      <Generators />
    </div>
    <div class="panel panel-countdown-wrapper">
      <div class="panel panel-countdown ">
        <div class="anchor text-center" @click="collapsed=!collapsed">
          <v-icon>{{ collapsed ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
        </div>

        <Countdown ref="countdown" />
      </div>
      <div class="panel panel-blank" />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'nuxt-property-decorator'
import {mdiChevronDown, mdiChevronUp, mdiMenu} from '@mdi/js'
import Countdown from '~/components/Countdown.vue'
import Generators from '~/components/Generators.vue'
import {description} from '~/package.json'

@Component({
  components: {Countdown, Generators}
})
export default class Index extends Vue {
  @Ref() readonly countdown!: Countdown;
  collapsed = false;
  icons = {
    mdiMenu,
    mdiChevronDown,
    mdiChevronUp
  }

  created() {
    if (process.client && this.$device.isDesktop) {
      this.$toast.success('This application is optimised for mobile use only yet. </br> A desktop friendly version may be comming in the futur')
    }
  }

  head() {
    return {
      titleTemplate: '%s',
      title: `Cauctus - ${description}`,
      link: [
        {
          rel: 'canonical',
          href: 'https://cauctus.net'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.index-wrapper {
  margin: -12px;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .header {
    color: white;
    margin-bottom: 20px;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 15px;

    h1 {
      font-weight: 300;
      text-transform: uppercase;
      line-height: 1.2;
    }
  }

  .panel {
    width: 100%;
    text-align: center;
    --border-radius: 30px;

    &.panel-theme {
      background: #51a2b6;
      background: linear-gradient(114deg, #73d3a7 0%, #51a2b6 100%);
      padding: 20px 30px calc(20px + var(--border-radius)) 30px;
      height: 100vh;
    }

    &.panel-countdown-wrapper {
      position: absolute;
      transition: top 300ms ease-in-out;
      top: 277px;

      .collapsed& {
        top: 100vh;
      }

      .panel-countdown {
        background-color: #fff;
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        margin-top: calc(-1.5 * var(--border-radius));

        box-shadow: 0 -4px 12px 0 rgba(0, 0, 0, 0.2);

        .anchor {
          cursor: pointer;

          .v-icon {
            color: #d2d2d2;
            margin-top: 10px;
          }
        }
      }

      .panel-blank {
        background-color: white;
        height: 100vh;
      }
    }

  }

}

</style>
