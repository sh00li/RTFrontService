import colors from 'vuetify/es5/util/colors'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
export default new Vuetify({
  customVariables: ['~/assets/scss/var/vuetify.scss'],
  rtl: false,
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
    }
  },
})
