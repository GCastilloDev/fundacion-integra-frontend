<template>
  <nav>
    <v-app-bar elevate-on-scroll app :color="color" height="72px">
      <v-container class="d-flex align-center">
        <v-col>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://firebasestorage.googleapis.com/v0/b/integra-4aa35.appspot.com/o/imagenes-sistema%2Flogo-integra-small.png?alt=media&token=1e5e3392-f653-4372-92b6-3c437aeffd52"
            transition="scale-transition"
            width="60"
          />
        </v-col>

        <v-spacer></v-spacer>

        <v-btn depressed :class="colorText" class="mr-2 font-weight-bold" text>Ingresar</v-btn>
        <v-btn depressed color="azulIntegra" dark>Regístrate</v-btn>
      </v-container>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data: () => ({
    color: "transparent",
    colorText: "white--text"
    // normal--text
  }),
  methods: {
    handleScroll() {
      let alto = window.scrollY;
      this.color = alto >= 200 ? 'white' : 'transparent';
      this.colorText = alto >= 200 ? 'normal--text' : 'white--text';
    }
  }
};
</script>

<style lang="scss" scoped>
</style>