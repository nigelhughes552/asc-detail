<template>
  <div>
    <h4>Responsibilities</h4>

    <table id="ResponsibilitiesTable" class="table table-striped">
      <thead>
        <tr>
          <th></th>
          <th>On Web?</th>
          <th>Responsibility</th>
          <th>Start Date</th>
          <th>End Date</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="responsibility in responsibilities" :key="responsibility.PersonResponsibilitiesFellowsID">
          <td></td>
          <td>
            <i v-if="responsibility.DisplayOnWebPage" class="fa fa-check" aria-hidden="true"></i>
          </td>
          <td>{{responsibility.Responsibility}}</td>
          <td>{{responsibility.StartDate}}</td>
          <td>{{responsibility.EndDate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Responsibilities",
  data() {
    return {
      responsibilities: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let url = "http://localhost/api/PeopleApi/GetResponsibilitiesByPerson/1";
      axios
        .get(url)
        .then(response => {
          this.responsibilities = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
