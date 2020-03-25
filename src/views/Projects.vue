<template>
  <div class="projects">
    <h1 class="display-1 grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header class="headline">
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  name: "projects",
  data() {
    return {
      Projects: []
    };
  },
  computed: {
    myProjects() {
      return this.Projects.filter(project => {
        return project.person === "Tom";
      });
    }
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type == "added") {
          this.Projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
        // else if (change.type == "removed") {
        //   // const Projects = { ...this.Projects };
        //   // delete Projects[change.doc.data()];
        //   // this.Projects = Projects;

        //   this.Projects.remove(change.doc.data());
        //   vm.$forceUpdate();
        // } else {
        //   //
        // }
      });
    });
  }
};
</script>

<style scoped></style>
