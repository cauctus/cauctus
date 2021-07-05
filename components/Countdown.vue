<template>
  <div>

    <div class="svg-circle-container">
      <svg class="svg-circle" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" x2="0.35" y2="1">
            <stop offset="0%" stop-color="var(--color-stop)" />
            <stop offset="100%" stop-color="var(--color-bot)" />
          </linearGradient>
        </defs>
        <g class="svg-circle-group">
          <circle class="svg-circle-total" cx="50" cy="50" r="45"></circle>
          <path
            :stroke-dasharray="strokeDashArray"
            class="svg-circle-remaining"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
          ></path>
        </g>
      </svg>
    </div>

    {{ formattedTimer }}

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Countdown extends Vue {
  private readonly FULL_DASH_ARRAY = 45 * 2 * Math.PI;
  duration = 5; // seconds
  timePassed = 0
  intervalID = -1
  isPaused = true

  created() {
    this.start()
  }

  get remainingSecs() {
    return this.duration - this.timePassed
  }

  get strokeDashArray() {
    return `${(1 - (this.timePassed / this.duration)) * this.FULL_DASH_ARRAY} ${this.FULL_DASH_ARRAY}`;

  }

  get formattedTimer() {
    return `${Math.floor(this.remainingSecs / 60).toString().padStart(2, '0')}:${(this.remainingSecs % 60).toString().padStart(2, '0')}`
  }

  startInterval() {
    this.intervalID = setInterval(this.onSecondElapsed.bind(this), 1000)
  }

  clearInterval() {
    clearInterval(this.intervalID)
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

</style>
