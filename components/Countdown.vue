<template>
  <div class="countdown">
    <div class="svg-circle-container">
      <svg class="svg-circle" viewBox="0 0 100 100">
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
      <div class="countdown-text-middle">
        {{ formattedTimer }}
      </div>
      <div class="countdown-text-bottom">
        <v-btn text @click="addTime(60)">
          +1 minute
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Countdown extends Vue {
  private readonly FULL_DASH_ARRAY = 45 * 2 * Math.PI;
  duration = 180; // seconds
  timePassed = 0
  intervalID: number | undefined = undefined
  isPaused = true

  get remainingSecs() {
    return this.duration - this.timePassed
  }

  get strokeDashArray() {
    return `${(1 - (this.timePassed / this.duration)) * this.FULL_DASH_ARRAY} ${this.FULL_DASH_ARRAY}`
  }

  get formattedTimer() {
    return `${Math.floor(this.remainingSecs / 60).toString().padStart(2, '0')}:${(this.remainingSecs % 60).toString().padStart(2, '0')}`
  }

  addTime(delta: number) {
    this.duration += delta
  }

  startInterval() {
    this.intervalID = window.setInterval(this.onSecondElapsed.bind(this), 1000)
  }

  clearInterval() {
    window.clearInterval(this.intervalID)
  }

  onSecondElapsed() {
    if (++this.timePassed >= this.duration) {
      this.pause()
      this.onTimerEnded()
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
