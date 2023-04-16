<template>
  <v-app>

    <!-- 메인 -->
    <v-main>
      <router-view />
    </v-main>

    <!-- 하단 navbar -->
    <v-footer class="fixed-bottom">
      <bottom-navbar />
    </v-footer>
  </v-app>
</template>

<script>
import BottomNavbar from './components/BottomNavbar.vue';
export default {
  components: {BottomNavbar},
  name: 'App',
 

  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
