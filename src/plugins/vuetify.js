import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        amarilloIntegra: '#ffd800',
        verdeIntegra: '#238f15',
        rojoIntegra: '#d70302',
        vinoIntegra: '#5b0b0c',
        azulIntegra: '#0587db',
        fondo: '#FBFBFE',
        titulo: '#2a3b47',
        subtitulo: '#A0A7AC',
        normal: '#697477',
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { es },
    current: 'es',
  },
});
