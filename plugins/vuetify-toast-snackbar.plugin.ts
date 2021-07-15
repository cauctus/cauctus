import Vue from 'vue'
import VuetifyToast from 'vuetify-toast-snackbar'
import { Plugin } from '@nuxt/types'

// @ts-ignore
const vuetifyToastSnackbarPlugin: Plugin = ({ $vuetify }) => {
    Vue.use(VuetifyToast, {$vuetify})
}

export default vuetifyToastSnackbarPlugin
