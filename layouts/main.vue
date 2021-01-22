<template>
  <v-app>
    <v-main
      tag="div"
      class="d-flex justify-center align-center"
    >
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vuetify.js'
    }
  },
  created(){
    this.$vuetify.rtl = true
  }
}
</script>
