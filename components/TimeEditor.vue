<template>
  <div class="time-editor">
    <div class="digit-editor">
      <div class="arrow arrow-up">
        <v-btn x-large color="primary" icon @click="addTime(600)">
          <v-icon>{{ icons.mdiMenuUp }}</v-icon>
        </v-btn>
      </div>
      <div class="digit">
        {{ Math.floor(duration / 600) }}
      </div>
      <div class="arrow arrow-down">
        <v-btn x-large color="primary" icon @click="addTime(-600)">
          <v-icon>{{ icons.mdiMenuDown }}</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="digit-editor">
      <div class="arrow arrow-up">
        <v-btn x-large color="primary" icon @click="addTime(60)">
          <v-icon>{{ icons.mdiMenuUp }}</v-icon>
        </v-btn>
      </div>
      <div class="digit">
        {{ Math.floor((duration / 60) % 10) }}
      </div>
      <div class="arrow arrow-down">
        <v-btn x-large color="primary" icon @click="addTime(-60)">
          <v-icon>{{ icons.mdiMenuDown }}</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="splitter digit">
      :
    </div>
    <div class="digit-editor">
      <div class="arrow arrow-up">
        <v-btn x-large color="primary" icon @click="addTime(10)">
          <v-icon>{{ icons.mdiMenuUp }}</v-icon>
        </v-btn>
      </div>
      <div class="digit">
        {{ Math.floor((duration % 60) / 10) }}
      </div>
      <div class="arrow arrow-down">
        <v-btn x-large color="primary" icon @click="addTime(-10)">
          <v-icon>{{ icons.mdiMenuDown }}</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="digit-editor">
      <div class="arrow arrow-up">
        <v-btn x-large color="primary" icon @click="addTime(1)">
          <v-icon>{{ icons.mdiMenuUp }}</v-icon>
        </v-btn>
      </div>
      <div class="digit">
        {{ Math.floor(duration % 10) }}
      </div>
      <div class="arrow arrow-down">
        <v-btn x-large color="primary" icon @click="addTime(-1)">
          <v-icon>{{ icons.mdiMenuDown }}</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {Component, ModelSync, Vue} from 'nuxt-property-decorator'
import {mdiMenuDown, mdiMenuUp} from '@mdi/js'

@Component
export default class TimeEditor extends Vue {
  @ModelSync('time', 'change') duration!: number
  icons = {
    mdiMenuDown,
    mdiMenuUp
  }

  addTime(delta: number) {
    this.duration = Math.max(this.duration + delta, 0)
  }
}
</script>

<style lang="less" scoped>
.time-editor {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .digit-editor {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      text-align: center;
    }
  }

  .arrow {
    color: #eeeeee;
  }

  .digit {
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 40px;
    color: #3c3c3c;
  }
}
</style>
