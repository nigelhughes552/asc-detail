<template>
  <div>

    <h4>Fellowships</h4>

    <table id="fellowshipTable" class="table table-striped">
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
    </table>

  </div>

</template>


<script>
import axios from "axios";
export default {
  name: "Fellowships",
  data() {
    return {
      fellowships: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let url = "http://localhost/api/PeopleApi/GetFellowshipByPerson/1";
      axios
        .get(url)
        .then(response => {
          this.fellowships = response.data;
          console.log(this.fellowships);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
