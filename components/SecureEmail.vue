<template>
  <span>
    <a
      href="#"
      class="secure-email"
      :data-name="email.split('@')[0]"
      :data-domain="email.split('@')[1]"
      onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain; return false;"
    />
  </span>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'nuxt-property-decorator'

@Component
export default class SecureEmail extends Vue {
  @Prop() email!: string
}
</script>

<style scoped>
.secure-email:after {
  content: attr(data-name) "@" attr(data-domain);
}
</style>
