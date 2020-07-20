<template>
  <v-app>
    <AppBar />
    <v-content class="fondo">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {
    AppBar: () => import(/* webpackChunkName: "AppBarV1-componente" */"@/components/Menus/AppBarV1")
  },
  data: () => ({
    //
  })
};
</script>
