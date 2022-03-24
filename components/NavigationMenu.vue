<template>
  <div class="navigation-menu">
    <div v-for="(section, i) in menu" :key="i" class="section-wrapper">
      <div v-if="section.title" class="section-title">
        {{ section.title }}
      </div>

      <router-link v-for="(item, j) in section.items" :key="j" class="item" :to="item.to">
        <div class="item-icon">
          <v-icon>{{ item.icon }}</v-icon>
        </div>
        <div class="item-text">
          {{ item.text }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

type NavigationMenuSection = {
    title?: string;
    items: {
        text: string,
        icon: Vue,
        to: string
    }[]
}

@Component
export default class NavigationMenu extends Vue {
    @Prop({ default: () => []}) menu!: NavigationMenuSection[]
}
</script>

<style scoped lang="less">
.navigation-menu {
    padding: 10px 0;

    .section-wrapper {
        .section-title {
            padding-left: 16px;
            color: rgba(0,0,0,.6);
            font-size: .875rem;
            font-weight: 400;
            margin: 16px 0 3px;
        }

        .item {
            display: flex;
            padding-left: 26px;
            min-height: 48px;
            color: rgba(0,0,0,.87);
            text-decoration: none;
            align-items: center;
            border-left: 3px solid transparent;

            .item-icon .v-icon {
                margin-right: 25px;
            }

            .item-text {
                text-overflow: ellipsis;
                flex: 1 1 100%;
                font-size: 1rem;
            }

            &.nuxt-link-exact-active {
                color: var(--v-anchor-base) !important;
                border-left-color: var(--v-primary-base);
                background-color: #ecf6f6;

                .item-icon .v-icon {
                    color: var(--v-anchor-base) !important;
                }
            }
        }
    }
}
</style>
