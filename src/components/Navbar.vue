<template>
  <nav>
    <v-app-bar flat app class="grey lighten-3">
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Vue</span>
        <span>Do</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn depressed class="grey lighten-3 grey--text" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer temporary app v-model="drawer" class="deep-purple accent-2">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/profile.jpg" />
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text headline mt-5">ONYX BLACK</p>
        </v-flex>

        <!-- popup -->
        <v-flex class="mt-5 mb-3">
          <Popup />
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon
            ><v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  name: "navbar",
  components: {
    Popup
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder-open", text: "My Projects", route: "/projects" },
        { icon: "mdi-account-multiple", text: "Team", route: "/team" }
      ]
    };
  }
};
</script>

<style scoped></style>
