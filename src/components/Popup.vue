<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" depressed color="teal accent-4" class="white--text">
        <span>add new project</span>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">Add a New Project</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>

          <v-layout>
            <v-flex xs5>
              <v-menu>
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-on="on"
                    :value="formatedDate"
                    label="Due date"
                    offset-y
                    min-width="290px"
                    prepend-icon="mdi-calendar"
                    :rules="inputRules"
                  ></v-text-field>
                </template>

                <v-date-picker v-model="due"></v-date-picker>
              </v-menu>
            </v-flex>

            <v-spacer></v-spacer>

            <v-flex>
              <v-btn class="teal accent-3 mx-0 mt-3" @click="submit"
                >add project</v-btn
              >
            </v-flex>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// import format from "date-fns/format";

export default {
  name: "popup",
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum length is three characters"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content);
      }
    },
    resetForm() {
        this.$refs.form.reset();
    }
  },
  computed: {
    formatedDate() {
      return this.due ? this.due : "";
    }
  }
};
</script>
