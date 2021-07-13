<template>
  <div>
    <div class="countdown">
      <div class="svg-circle-container">
        <svg class="svg-circle" viewBox="0 0 100 100" :class="{isEnded, isPaused}">
          <defs>
            <linearGradient id="gradient" x2="0.35" y2="1">
              <stop offset="0%" stop-color="var(--color-stop)" />
              <stop offset="100%" stop-color="var(--color-bot)" />
            </linearGradient>
          </defs>
          <g class="svg-circle-group">
            <circle class="svg-circle-total" cx="50" cy="50" r="45" />
            <path
              :stroke-dasharray="strokeDashArray"
              class="svg-circle-remaining"
              d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
            />
          </g>
        </svg>
      </div>

      <div class="countdown-text">
        <div class="countdown-text-upper">
          Décompte
        </div>
        <!--
          v-touch:swipe.left="()=> addTime(-60)"
          v-touch:swipe.right="()=> addTime(60)"
          -->
        <div
          class="countdown-text-middle"
          @click.stop="dialog = true"
        >
          {{ formattedTimer }}
        </div>
        <div class="countdown-text-bottom">
          Avant la fin
        </div>
      </div>
    </div>


    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title>
          Modifer la durée du timer
        </v-card-title>
        <v-card-text>
          <TimeEditor v-model="duration"/>
        </v-card-text>
      </v-card>
    </v-dialog>


    <v-row>
      <v-col cols="5">
        <v-btn text @click="stop">
          Réinitialiser
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn depressed @click="() => isPaused ? start() : pause()">
          <v-icon>{{ isPaused ? 'mdi-play' : 'mdi-pause' }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="5">
        <v-btn text @click="() => addTime(60)">
          Ajouter 1min
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import TimeEditor from './TimeEditor.vue'

const mod = (n: number, m: number) => ((n % m) + m) % m

@Component({components: {TimeEditor}})
export default class Countdown extends Vue {
  private readonly FULL_DASH_ARRAY = 45 * 2 * Math.PI;
  duration = 726; // seconds
  timePassed = 0
  intervalID: number | undefined = undefined
  isPaused = true
  isEnded = false
  dialog = true

  get remainingSecs() {
    return this.duration - this.timePassed
  }

  get strokeDashArray() {
    return `${(1 - (this.timePassed / this.duration)) * this.FULL_DASH_ARRAY} ${this.FULL_DASH_ARRAY}`
  }

  get formattedTimer() {
    if (!this.isEnded) {
      return `${Math.floor(this.remainingSecs / 60).toString().padStart(2, '0')}:${(this.remainingSecs % 60).toString().padStart(2, '0')}`
    } else {
      return `-${Math.abs(Math.ceil(this.remainingSecs / 60)).toString().padStart(2, '0')}:${(60 - mod(this.remainingSecs, 60)).toString().padStart(2, '0')}`
    }
  }

  addTime(delta: number) {
    this.duration = Math.max(this.duration + delta, 0)
  }

  startInterval() {
    if (!this.intervalID) {
      this.intervalID = window.setInterval(this.onSecondElapsed.bind(this), 1000)
    }
  }

  clearInterval() {
    if (this.intervalID) {
      window.clearInterval(this.intervalID)
      this.intervalID = undefined
    }
  }

  onSecondElapsed() {
    if (++this.timePassed > this.duration) {
      this.isEnded = true
    }
  }

  start() {
    this.startInterval()
    this.isPaused = false
    this.$emit('timerStarted')
  }

  stop() {
    this.clearInterval()
    this.timePassed = 0
    this.isPaused = true
    this.isEnded = false
    this.$emit('timerStopped')
  }

  pause() {
    this.clearInterval()
    this.isPaused = true
    this.$emit('timerPaused')
  }

  onTimerEnded() {
    this.$emit('timerEnded')
  }
}
</script>

<style scoped lang="less">
.countdown {
  position: relative;
  display: inline-block;

  .svg-circle-container {
    width: 300px;

    .svg-circle {
      transform: scaleX(-1);

      &-group {
        fill: none;
        stroke: none;
      }

      &-total {
        stroke-width: 4px;
        stroke: #eee;
      }

      &-remaining {
        stroke-width: 4px;
        stroke-linecap: round;
        transform: rotate(90deg);
        transform-origin: center;
        transition: 1s linear all;
        fill-rule: nonzero;
        stroke: url(#gradient);
      }

      #gradient {
        --color-stop: #64c4a0;
        --color-bot: #15889e;
      }

      &.isEnded {
        .svg-circle-remaining {
          display: none;
        }

        @keyframes flash_red {
          from {
            stroke: #eee;
          }
          to {
            stroke: #f74e51;
          }
        }

        .svg-circle-total {
          //stroke: #f74e51;
          animation: 0.5s ease-in-out 0s infinite alternate flash_red;
        }

        &.isPaused {
          .svg-circle-total {
            stroke: #f74e51;
            animation: none;
          }
        }
      }

    }
  }

  .countdown-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .countdown-text-middle {
      font-size: 60px;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      color: #1f1f1f;
    }
  }
}

</style>
