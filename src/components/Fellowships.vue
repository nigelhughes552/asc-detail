<template>
  <div>

    <span class="title">Fellowships</span>



    <v-data-table :headers="headers" :items="fellowships" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>
          <i v-if="props.item.DisplayOnWebPage" class="fa fa-check" aria-hidden="true"></i>
        </td>
        <td>{{ props.item.Fellowship1 }}</td>
        <td>{{ props.item.ElectionDate }}</td>
        <td>{{ props.item.StartDate }}</td>
        <td>{{ props.item.EndDate }}</td>
        <td>{{ props.item.WebsiteStartDate }}</td>
        <td>{{ props.item.WebsiteEndDate }}</td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
    </v-data-table>

    <!-- <table id="fellowshipTable" class="table table-striped">
      <thead>
        <tr>
          <th></th>
          <th>On Web?</th>
          <th>Fellowship</th>
          <th>Election Date</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Website Display Start Date</th>
          <th>Website Display End Date</th>


        </tr>
      </thead>
      <tbody>
        <tr v-for="fellow in fellowships" :key="fellow.PersonFellowshipID">
          <td></td>
          <td> <i  v-if="fellow.DisplayOnWebPage" class="fa fa-check" aria-hidden="true"></i> </td>
          <td>{{fellow.Fellowship1}}</td>
          <td>{{fellow.ElectionDate}}</td>
          <td>{{fellow.StartDate}}</td>
          <td>{{fellow.EndDate}}</td>
          <td>{{fellow.WebsiteStartDate}}</td>
          <td>{{fellow.WebsiteEndDate}}</td>
        </tr>
      </tbody>
    </table> -->

  </div>

</template>


<script>
import axios from "axios";
export default {
  name: "Fellowships",
  data() {
    return {
      headers: [
        {
          text: "On Web?",
          sortable: false,
          value: "DisplayOnWebPage"
        },
        {
          text: "Fellowship",
          value: "Fellowship1"
        },
        {
          text: "Election Date",
          value: "StartDate"
        },
        {
          text: "Start Date",
          value: "StartDate"
        },
        {
          text: "End Date",
          value: "EndDate"
        },
        {
          text: "Website Start Date",
          value: "WebsiteStartDate"
        },
        {
          text: "Website End Date",
          value: "WebsiteEndDate"
        }
      ],
      personId: this.$route.params.personId,
      fellowships: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let url =
        "http://localhost/api/PeopleApi/GetFellowshipByPerson/" + this.personId;
      axios
        .get(url)
        .then(response => {
          this.fellowships = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
