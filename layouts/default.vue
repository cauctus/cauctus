<template>
  <v-app>
    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <div class="heading">
          <div class="background">
            <WavyBackground />
          </div>
          <div class="logo-wrapper">
            <LogoWithIcon />
          </div>
        </div>

        <v-list>
          <div v-for="(section, i) in navigation" :key="i">
            <v-subheader v-if="section.title">
              {{ section.title }}
            </v-subheader>

            <v-list-item
              v-for="(item, j) in section.items"
              :key="j"
              :to="item.to"
              link
              nuxt
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>

        <v-footer absolute padless class="custom-footer">
          <div>
            Cauctus <a
              :href="'https://github.com/CorentinTh/cauctus/tree/'+appVersion"
              target="_blank"
              rel="noopener noreferrer"
            >{{ appVersion }}</a>
            <template v-if="commitSHA">
              - <a
                :href="'https://github.com/CorentinTh/cauctus/commit/'+commitSHA"
                target="_blank"
                rel="noopener noreferrer"
              >{{ commitSHA.substr(0, 7) }}</a>
            </template>
            <br>
            Fait avec
            <v-icon x-small>
              {{ icons.mdiHeart }}
            </v-icon>
            par <a
              href="//github.com/CorentinTh"
              target="_blank"
              rel="noopener noreferrer"
            > Corentin Thomasset</a>
          </div>
        </v-footer>
      </v-navigation-drawer>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {mdiCounter, mdiHeart, mdiHome, mdiInformation, mdiShape, mdiAccountVoice, mdiPoliceBadge} from '@mdi/js'
import {version} from '~/package.json'
import WavyBackground from '~/assets/wavy-background.svg?inline'
import LogoWithIcon from '~/assets/logo-with-icon.svg?inline'

@Component({
  components: {
    WavyBackground,
    LogoWithIcon
  }
})
export default class Default extends Vue {
  appVersion = 'v' + version
  commitSHA = process.env.gitCommitSHA
  icons = {
    mdiHeart
  }

  navigation = [
    {
      title: false,
      items: [
        {
          text: 'Home',
          icon: mdiHome,
          to: '/'
        },
        {
          text: 'Les catoch\'',
          icon: mdiShape,
          to: '/categories'
        },
        {
          text: 'Les punitions',
          icon: mdiPoliceBadge,
          to: '/punishments'
        },
        {
          text: 'Virelangues',
          icon: mdiAccountVoice,
          to: '/tongue-twisters'
        }
      ]
    },
    {
      title: 'Divers',
      items: [
        {
          text: 'Compteur',
          icon: mdiCounter,
          to: '/counter'
        },
        {
          text: 'A propos',
          icon: mdiInformation,
          to: '/about'
        }
      ]
    }
  ]

  get drawer() {
    return this.$store.state.sidenav.open
  }

  set drawer(value: boolean) {
    this.$store.commit('sidenav/set', value)
  }
}
</script>

<style lang="less">
.pretty-scrollbar {
  &::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
  }

  // Track
  &::-webkit-scrollbar-track {
    opacity: 0 !important;
  }

  // Handle
  &::-webkit-scrollbar-thumb {
    background: rgba(241, 241, 241, 0.10) !important;
    border-radius: 10px;
  }

  // Handle on hover
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(241, 241, 241, 0.20) !important;
  }
}

.heading {
  position: relative;

  .logo-wrapper {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
  }
}

.v-navigation-drawer__content {
  .pretty-scrollbar;

  .v-list-item--active {
    color: var(--v-anchor-base) !important;
    border-left: 3px solid var(--v-primary-base);
  }
}

.theme--light.v-footer.custom-footer {
  color: #adadad;
  text-align: center;
  background-color: transparent;
  width: 100%;
  font-size: 12px;

  .v-icon {
    color: #adadad;
  }

  div {
    width: 100%;
    margin-bottom: 10px;

    a {
      text-decoration: none;
      color: #51a2b6;
    }
  }
}
</style>
