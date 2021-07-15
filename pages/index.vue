<template>
  <v-row align="center" justify="center">
    <div class="panel panel-theme">
      <ThemeGenerator />
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

    <v-footer absolute padless class="custom-footer">
      <div>
        Cauctus <a
          :href="'https://github.com/CorentinTh/cauctus/tree/'+appVersion"
          target="_blank"
          rel="noopener noreferrer"
        >{{ appVersion }}</a>
        <br>
        Fait avec <v-icon small>
          mdi-heart
        </v-icon> par <a
          href="//github.com/CorentinTh"
          target="_blank"
          rel="noopener noreferrer"
        > Corentin Thomasset</a>
      </div>
    </v-footer>
  </v-row>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'nuxt-property-decorator'
import Countdown from '~/components/Countdown.vue'
import ThemeGenerator from '~/components/ThemeGenerator.vue'
import {version} from '~/package.json'

@Component({
  components: {Countdown, ThemeGenerator}
})
export default class Index extends Vue {
  @Ref() readonly countdown!: Countdown;
  appVersion = 'v' + version

  created(){
    if (process.client && this.$device.isDesktop){
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
    padding-bottom: var(--border-radius);
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

.theme--light.v-footer.custom-footer {
  color: #adadad;
  text-align: center;
  background-color: transparent;
  width: 100%;

  .v-icon {
    color: #adadad;
  }

  div {
    width: 100%;
    margin-bottom: 10px;

    a {
      text-decoration: none;
      color: #51a2b6;
    }
  }
}

</style>
