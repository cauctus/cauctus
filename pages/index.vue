<template>
  <v-row align="center" justify="center">
    <div class="panel panel-theme">
      <ThemeGenerator />
    </div>
    <div class="panel panel-countdown">
      <div>
        <Countdown ref="countdown" />
      </div>
      <div class="text-center">
        <v-btn @click="countdown.start()">
          start
        </v-btn>
        <v-btn @click="countdown.stop()">
          stop
        </v-btn>
      </div>
    </div>
    <div class="panel panel-blank" />
  </v-row>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'nuxt-property-decorator'
import Countdown from '~/components/Countdown.vue'
import ThemeGenerator from '~/components/ThemeGenerator.vue'

@Component({
  components: {Countdown, ThemeGenerator}
})
export default class Index extends Vue {
  @Ref() readonly countdown!: Countdown;
}
</script>

<style lang="less">
.panel {
  width: 100%;
  text-align: center;
  --border-radius: 30px;

  &.panel-theme{
    background: rgb(37,99,108);
    background: linear-gradient(145deg, #73d3a7 0%, #51a2b6 100%);
    padding-bottom: var(--border-radius);
  }

  &.panel-countdown{
    background-color: #fff;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin-top: calc(-1 * var(--border-radius));
    padding-top: 50px;

    box-shadow: 0 -4px 25px 0 rgba(0,0,0,0.4);
  }

  &.panel-blank {
    background-color: white;
    height: 25px;
  }
}

</style>
