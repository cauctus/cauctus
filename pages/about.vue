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
        <h1>à propos</h1>
      </v-row>
    </template>

    <template slot="content">
      <v-card>
        <v-card-text>
          <p class="text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <nuxt-link to="/">
              Cauctus
            </nuxt-link> est une application publique open source (sous license MIT) développée par
            <a href="https://github.com/CorentinTh" target="_blank" rel="noopener noreferrer">Corentin Thomasset</a> visant a mettre a disposition des ressources pour l'organisation d'ateliers ou de spectacles de théâtre d'improvisation.
          </p>
          <p class="text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;
            Si vous avez trouvé un bug, quelque chose de cassé ou qui ne fonctionne pas comme prévu, ou bien que vous souhaiteriez voir une nouvelle fonctionnalité, veuillez remplir un rapport de bug ou une demande de feature
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/CorentinTh/cauctus/issues/new/choose">ici</a> ou me contacter directement par mail <SecureEmail email="contact@cauctus.net" />.
          </p>

          <div class="text-center icons-button">
            <v-btn
              v-for="(item, i) in iconsLinks"
              :key="i"
              :href="item.to"
              target="_blank"
              rel="noopener noreferrer"
              fab
              text
              large
            >
              <v-icon large>
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
      <br>
      <v-card>
        <v-card-text>
          <h2>Changelog</h2>
          <div class="changelog" v-html="changelog" />
        </v-card-text>
      </v-card>
    </template>
  </PageWithHeader>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {mdiGithub, mdiTwitter, mdiGift, mdiMenu} from '@mdi/js'
import changelog from '~/CHANGELOG.md'
import PageWithHeader from '~/components/PageWithHeader.vue'
import SecureEmail from '~/components/SecureEmail.vue'

@Component({components: {PageWithHeader, SecureEmail}})
export default class About extends Vue {
  changelog = changelog
    .replace(/<h1>(.*?)<\/p>/is, '') // Remove h1 and first paragraphe
    .replace(/<a/g, '<a target="_blank" rel="noopener noreferrer"') // add target blank to <a> link
    .replace(/h3>/g, 'h4>') // Replace h3 with h4
    .replace(/h2>/g, 'h3>') // Replace h2 with h3

  icons = {
    mdiMenu
  }

  iconsLinks = [
    {
      to: 'https://github.com/CorentinTh/cauctus',
      icon: mdiGithub
    },
    {
      to: 'https://twitter.com/cthmsst',
      icon: mdiTwitter
    },
    {
      to: 'https://github.com/sponsors/CorentinTh',
      icon: mdiGift
    }
  ]

  head() {
    return {title: 'À propos'}
  }
}
</script>

<style lang="less" scoped>
h1{
  font-weight: 300;
  text-transform: uppercase;
}
::v-deep {
  .icons-button .v-btn__content{
    color: var(--v-anchor-base);
  }

  h2 {
    text-align: center;
    margin: 25px 0 40px;
    font-size: 25px;
  }

  h3 {
    margin: 10px 0;
  }

  .changelog {
    h3 {
      font-size: 20px;

      &:not(:first-child){
        margin-top: 50px;
      }

      a {
        color: inherit;
        text-decoration: none;
        border-bottom: dashed 1px var(--v-anchor-base);

        &:hover {
          color: var(--v-anchor-base);
        }
      }
    }

    h4 {
      margin-top: 10px;
      padding-left: 7px;
      font-size: 16px;
    }

    ul {
      padding-left: 30px;
    }
  }
}
</style>
