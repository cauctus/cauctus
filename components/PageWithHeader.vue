<template>
  <div class="pwh">
    <div class="pwh-header">
      <slot name="header" />
    </div>
    <div class="pwh-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class PageWithHeader extends Vue {

}
</script>

<style lang="less" scoped>
.pwh {
  background-color: rgb(245 245 247);
  margin: -12px;

  .pwh-header {
    color: #ffffff;
    padding: 26px 42px;
    background: #51a2b6;
    background: linear-gradient(145deg, #73d3a7 0%, #51a2b6 100%);
    box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.4);
  }

  .pwh-content {
    padding: 26px;
  }
}
</style>
