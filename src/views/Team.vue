<template>
  <div class="team">
    <h1 class="display-1 grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-center pt-5 ma-3">
            <v-responsive>
              <v-avatar size="175">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="headline">{{ person.name }}</div>
              <div class="subtitle grey--text">{{ person.role }}</div>
              <div class="subtitle-2 grey--text pt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia ipsum quidem adipisci, error perspiciatis odit commodi
                saepe amet veritatis qui ab voluptates quisquam! Vitae, ex error
                officiis labore atque beatae.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-layout row align-content-space-around class="mb-3">
                <v-flex>
                  <v-btn depressed center color="lightgrey">
                    <v-icon small left>mdi-message</v-icon>
                    <span>Message</span>
                  </v-btn>
                </v-flex>
                <v-flex>
                  <v-spacer></v-spacer>
                  <v-btn depressed center color="lightgrey">
                    <v-icon small left>mdi-phone</v-icon>
                    <span>Call</span>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "team",
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "/profile.jpg"
        },
        { name: "Ryu", role: "Graphic designer", avatar: "/profile.jpg" },
        { name: "Chun Li", role: "Web developer", avatar: "/profile.jpg" },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/profile.jpg"
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/profile.jpg" }
      ]
    };
  }
};
</script>

<style scoped></style>
