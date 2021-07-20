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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275" class="">
              <defs>
                <linearGradient
                  id="small-hero-gradient-1"
                  x1="13.74"
                  y1="183.7"
                  x2="303.96"
                  y2="45.59"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#73d3a7" />
                  <stop offset="1" stop-color="#51a2b6" />
                </linearGradient>
              </defs>
              <g>
                <g>
                  <path fill="#73d3a7" opacity="0.49" d="M0,187.5v25s0,37.5,50,50S300,225,300,225V187.5Z" />
                </g>
                <g>
                  <path
                    fill="#51a2b6"
                    opacity="0.6"
                    d="M300,237.5S287.5,275,250,275,121.05,237.5,61.4,200s134.21,0,134.21,0Z"
                  />
                </g>
                <g>
                  <path
                    fill="#00a19a"
                    opacity="0.6"
                    d="M0,200v12.5a241.47,241.47,0,0,0,112.5,50c73.6,11.69,130.61-14.86,150-25L300,200Z"
                  />
                </g>
                <g>
                  <path fill="url(#small-hero-gradient-1)" d="M0,0V212.5s62.5-12.5,150,25,150,0,150,0V0Z" />
                </g>
              </g>
            </svg>
          </div>
          <div class="logo-wrapper">
            <svg
              version="1.1"
              viewBox="0.0 0.0 451.5485564304462 249.9475065616798"
              fill="none"
              stroke="none"
              stroke-linecap="square"
              stroke-miterlimit="10"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
            ><clipPath id="p.0"><path d="m0 0l451.54855 0l0 249.94751l-451.54855 0l0 -249.94751z" clip-rule="nonzero" /></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l451.54855 0l0 249.94751l-451.54855 0z" fill-rule="evenodd" /><g filter="url(#shadowFilter-p.1)"><use xlink:href="#p.1" transform="matrix(1.0 0.0 0.0 1.0 1.3497062992126045 5.846220472440954)" /></g><defs><filter id="shadowFilter-p.1" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceAlpha" stdDeviation="5.0" result="blur" /><feComponentTransfer in="blur" color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0" intercept="0.0" /><feFuncG type="linear" slope="0" intercept="0.0" /><feFuncB type="linear" slope="0" intercept="0.0" /><feFuncA type="linear" slope="0.16" intercept="0" /></feComponentTransfer></filter></defs><g id="p.1"><path fill="#000000" fill-opacity="0.0" d="m162.95407 11.144357l125.63782 0l0 125.63781l-125.63782 0z" fill-rule="evenodd" /><g transform="matrix(0.24538635170603673 0.0 0.0 0.24538635170603673 162.95406824146983 11.144356955380577)"><clipPath id="p.2"><path d="m1.1368684E-13 0l512.0 0l0 512.0l-512.0 0z" clip-rule="evenodd" /></clipPath><image
              clip-path="url(#p.2)"
              fill="#000"
              width="512.0"
              height="512.0"
              x="0.0"
              y="0.0"
              preserveAspectRatio="none"
              xlink:href="data:image/png;base64,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"
            /></g></g><g filter="url(#shadowFilter-p.3)"><use xlink:href="#p.3" transform="matrix(1.0 0.0 0.0 1.0 0.0 2.0)" /></g><defs><filter id="shadowFilter-p.3" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceAlpha" stdDeviation="2.0" result="blur" /><feComponentTransfer in="blur" color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0" intercept="0.0" /><feFuncG type="linear" slope="0" intercept="0.0" /><feFuncB type="linear" slope="0" intercept="0.0" /><feFuncA type="linear" slope="0.1" intercept="0" /></feComponentTransfer></filter></defs><g id="p.3"><path fill="#000000" fill-opacity="0.0" d="m7.930446 155.39896l435.68503 0l0 83.401566l-435.68503 0z" fill-rule="evenodd" /><path fill="#ffffff" d="m123.54632 215.63661q-5.265625 0 -9.5 -2.328125q-4.21875 -2.328125 -6.625 -6.453125q-2.40625 -4.125 -2.40625 -9.25q0 -5.109375 2.40625 -9.234375q2.40625 -4.140625 6.65625 -6.46875q4.25 -2.328125 9.515625 -2.328125q3.953125 0 7.2968826 1.328125q3.34375 1.3125 5.671875 3.84375l-2.375 2.375q-4.15625 -4.203125 -10.484383 -4.203125q-4.203125 0 -7.65625 1.9375q-3.4375 1.921875 -5.390625 5.265625q-1.953125 3.328125 -1.953125 7.484375q0 4.15625 1.953125 7.5q1.953125 3.34375 5.390625 5.265625q3.453125 1.921875 7.65625 1.921875q6.3750076 0 10.484383 -4.25l2.375 2.390625q-2.328125 2.53125 -5.703125 3.875q-3.3593826 1.328125 -7.3125076 1.328125zm42.353645 -9.765625l-19.765625 0l-4.25 9.46875l-3.90625 0l16.21875 -35.453125l3.703125 0l16.203125 35.453125l-3.953125 0l-4.25 -9.46875zm-1.375 -3.046875l-8.5 -19.046875l-8.515625 19.046875l17.015625 0zm28.982468 12.8125q-6.890625 0 -10.75 -3.9375q-3.84375 -3.953125 -3.84375 -11.5l0 -20.3125l3.75 0l0 20.15625q0 6.171875 2.78125 9.21875q2.796875 3.03125 8.0625 3.03125q5.3125 0 8.09375 -3.03125q2.796875 -3.046875 2.796875 -9.21875l0 -20.15625l3.640625 0l0 20.3125q0 7.546875 -3.828125 11.5q-3.8125 3.9375 -10.703125 3.9375zm41.229187 0q-5.265625 0 -9.5 -2.328125q-4.21875 -2.328125 -6.625 -6.453125q-2.40625 -4.125 -2.40625 -9.25q0 -5.109375 2.40625 -9.234375q2.40625 -4.140625 6.65625 -6.46875q4.25 -2.328125 9.515625 -2.328125q3.953125 0 7.296875 1.328125q3.34375 1.3125 5.671875 3.84375l-2.375 2.375q-4.15625 -4.203125 -10.484375 -4.203125q-4.203125 0 -7.65625 1.9375q-3.4375 1.921875 -5.390625 5.265625q-1.953125 3.328125 -1.953125 7.484375q0 4.15625 1.953125 7.5q1.953125 3.34375 5.390625 5.265625q3.453125 1.921875 7.65625 1.921875q6.375 0 10.484375 -4.25l2.375 2.390625q-2.328125 2.53125 -5.703125 3.875q-3.359375 1.328125 -7.3125 1.328125zm27.465897 -32.515625l-12.46875 0l0 -3.234375l28.671875 0l0 3.234375l-12.46875 0l0 32.21875l-3.734375 0l0 -32.21875zm35.758026 32.515625q-6.890625 0 -10.75 -3.9375q-3.84375 -3.953125 -3.84375 -11.5l0 -20.3125l3.75 0l0 20.15625q0 6.171875 2.78125 9.21875q2.796875 3.03125 8.0625 3.03125q5.3125 0 8.09375 -3.03125q2.796875 -3.046875 2.796875 -9.21875l0 -20.15625l3.640625 0l0 20.3125q0 7.546875 -3.828125 11.5q-3.8125 3.9375 -10.703125 3.9375zm35.604187 0q-3.953125 0 -7.578125 -1.265625q-3.609375 -1.265625 -5.59375 -3.34375l1.46875 -2.875q1.9375 1.921875 5.125 3.109375q3.1875 1.1875 6.578125 1.1875q4.765625 0 7.140625 -1.734375q2.390625 -1.75 2.390625 -4.546875q0 -2.125 -1.296875 -3.390625q-1.296875 -1.265625 -3.171875 -1.953125q-1.859375 -0.6875 -5.203125 -1.484375q-4.015625 -1.015625 -6.390625 -1.953125q-2.375 -0.9375 -4.078125 -2.859375q-1.703125 -1.9375 -1.703125 -5.21875q0 -2.6875 1.421875 -4.890625q1.421875 -2.203125 4.359375 -3.515625q2.9375 -1.328125 7.296875 -1.328125q3.03125 0 5.9375 0.84375q2.921875 0.828125 5.046875 2.296875l-1.265625 2.984375q-2.21875 -1.46875 -4.75 -2.203125q-2.53125 -0.734375 -4.96875 -0.734375q-4.65625 0 -7.015625 1.8125q-2.359375 1.796875 -2.359375 4.625q0 2.125 1.28125 3.421875q1.296875 1.296875 3.25 1.984375q1.953125 0.671875 5.25 1.484375q3.890625 0.96875 6.296875 1.90625q2.40625 0.9375 4.078125 2.84375q1.671875 1.890625 1.671875 5.125q0 2.6875 -1.4375 4.890625q-1.4375 2.203125 -4.4375 3.5q-2.984375 1.28125 -7.34375 1.28125z" fill-rule="nonzero" /></g></g></svg>
          </div>
        </div>

        <v-list>
          <v-list-item
            v-for="(item, i) in navigation"
            :key="i"
            :to="item.to"
            link
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
        </v-list>

        <v-footer absolute padless class="custom-footer">
          <div>
            Cauctus <a
              :href="'https://github.com/CorentinTh/cauctus/tree/'+appVersion"
              target="_blank"
              rel="noopener noreferrer"
            >{{ appVersion }}</a><template v-if="commitSHA">
              - <a
                :href="'https://github.com/CorentinTh/cauctus/commit/'+commitSHA"
                target="_blank"
                rel="noopener noreferrer"
              >{{ commitSHA.substr(0, 7) }}</a>
            </template>
            <br>
            Fait avec <v-icon x-small>
              {{ icons.mdiHeart }}
            </v-icon> par <a
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
import {mdiHeart, mdiHome, mdiShape} from '@mdi/js'
import {version} from '~/package.json'

@Component
export default class Default extends Vue {
  drawer = false
  appVersion = 'v' + version
  commitSHA = process.env.gitCommitSHA
  icons = {
    mdiHeart
  }

  navigation = [
    {
      text: 'Home',
      icon: mdiHome,
      to: '/'
    },
    {
      text: 'Les catoch\'',
      icon: mdiShape,
      to: '/categories'
    }
  ]
}
</script>

<style lang="less" >
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
