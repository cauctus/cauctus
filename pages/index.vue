<template>
  <v-row align="center" justify="center">
    <div class="panel panel-theme">
      <Generators />
    </div>
    <div class="panel panel-countdown">
      <div>
        <Countdown ref="countdown" />
      </div>
      <div>
        <v-row align="center" justify="center" no-gutters />
      </div>
    </div>
    <div class="panel panel-blank" />
  </v-row>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'nuxt-property-decorator'
import Countdown from '~/components/Countdown.vue'
import Generators from '~/components/Generators.vue'

@Component({
  components: {Countdown, Generators}
})
export default class Index extends Vue {
  @Ref() readonly countdown!: Countdown;

  created() {
    if (process.client && this.$device.isDesktop) {
      this.$toast.success('This application is optimised for mobile use only yet. </br> A desktop friendly version may be comming in the futur')
    }
  }

  head() {
    return {
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

.panel {
  width: 100%;
  text-align: center;
  --border-radius: 30px;

  &.panel-theme {
    background: #51a2b6;
    background: linear-gradient(145deg, #73d3a7 0%, #51a2b6 100%);
    padding: 20px 30px calc(20px + var(--border-radius));
  }

  &.panel-countdown {
    background-color: #fff;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin-top: calc(-1 * var(--border-radius));
    padding-top: 50px;

    box-shadow: 0 -4px 25px 0 rgba(0, 0, 0, 0.4);
  }

  &.panel-blank {
    background-color: white;
    height: 25px;
  }
}
</style>
