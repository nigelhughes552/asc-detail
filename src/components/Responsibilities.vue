<template>
  <div>

    <span class="title">Responsibilities</span>
    <v-data-table :headers="headers" :items="items" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>
          <i v-if="props.item.DisplayOnWebPage" class="fa fa-check" aria-hidden="true"></i>
        </td>
        <td>{{ props.item.Responsibility }}</td>
        <td>{{ props.item.StartDate }}</td>
        <td>{{ props.item.EndDate }}</td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
    </v-data-table>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Responsibilities",
  data() {
    return {
      headers: [
        {
          text: "On Web?",
          sortable: false,
          value: "DisplayOnWebPage"
        },
        {
          text: "Responsibility",
          value: "Responsibility"
        },
        {
          text: "Start Date",
          value: "StartDate"
        },
        {
          text: "End Date",
          value: "EndDate"
        }
      ],
      items: [],
      personId: this.$route.params.personId
      //responsibilities: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let url =
        "http://localhost/api/PeopleApi/GetResponsibilitiesByPerson/" +
        this.personId;
      axios
        .get(url)
        .then(response => {
          // this.responsibilities = response.data;
          this.items = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
