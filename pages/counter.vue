<template>
  <PageWithHeader>
    <template slot="header">
      <v-row no-gutters justify="center" align="center">
        <v-btn icon dark large @click="$store.commit('sidenav/open')">
          <v-icon large>
            {{ icons.mdiMenu }}
          </v-icon>
        </v-btn>
        <v-spacer />
        <h1 class="text-center">
          Compteur
        </h1>
        <v-spacer />
        <v-btn icon dark large @click="count = 0">
          <v-icon large>
            {{ icons.mdiRefresh }}
          </v-icon>
        </v-btn>
      </v-row>
    </template>

    <template slot="content">
      <div class="count">
        {{ count }}
      </div>
      <v-spacer />
      <div class="btn-wrapper">
        <v-btn block class="btn btn-increment" @click="increment">
          +1
        </v-btn>
        <v-btn block class="btn btn-decrement" @click="decrement">
          -1
        </v-btn>
      </div>
    </template>
  </PageWithHeader>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'nuxt-property-decorator'
import {mdiRefresh, mdiMenu} from '@mdi/js'
import PageWithHeader from '~/components/PageWithHeader.vue'

@Component({components: {PageWithHeader}})
export default class Counter extends Vue {
  count = 0
  icons = {
    mdiRefresh,
    mdiMenu
  }

  head() {
    return {title: 'Compteur'}
  }

  created() {
    if (process.browser) {
      this.count = localStorage.count ?? 0
    }
  }

  increment() {
    this.count++
    this.vibrate()
  }

  decrement() {
    this.count--
    this.vibrate()
  }

  vibrate() {
    window?.navigator?.vibrate?.(200)
  }

  @Watch('count')
  storeValue() {
    localStorage.count = this.count
  }
}
</script>

<style lang="less" scoped>
.count {
  text-align: center;
  margin: 40px 0 0;
  font-size: 100px;
}

.btn-wrapper {
  .btn {
    background-color: #ffffff;
    font-size: 25px;
    color: #3c3c3c;

    &-increment {
      margin-bottom: 16px;
      height: 30vh !important;
    }

    &-decrement {
      height: 50px !important;
    }
  }
}
</style>
