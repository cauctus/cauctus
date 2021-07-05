<template>
  <v-row justify="center" align="center">
    <Countdown />
  </v-row>
</template>

<script>
import {Component, Vue} from 'nuxt-property-decorator'
import Countdown from '../components/Countdown'

@Component({
  components: {Countdown}
})
export default class Index extends Vue {

}
</script>
