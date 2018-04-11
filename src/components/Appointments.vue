<template>
  <div>
    <span  class="title">Appointments</span>

 <v-data-table :headers="headers" :items="appointments" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>
          <i v-if="props.item.DisplayOnWebPage" class="fa fa-check" aria-hidden="true"></i>
        </td>
        <td>{{ props.item.Appointment }}</td>
        <td>{{ props.item.StartDate }}</td>
        <td>{{ props.item.EndDate }}</td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
    </v-data-table>







    <!-- <table id="appointmentTable" class="table table-striped">
      <thead>
        <tr>
          <th></th>
          <th>On Web?</th>
          <th>Appointment</th>
          <th>Start Date</th>
          <th>End Date</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="appointment in appointments" :key="appointment.PersonAppointmentsFellowsID">
          <td></td>
          <td>
            <i v-if="appointment.DisplayOnWebPage" class="fa fa-check" aria-hidden="true"></i>
          </td>
          <td>{{appointment.Appointment}}</td>
          <td>{{appointment.StartDate}}</td>
          <td>{{appointment.EndDate}}</td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Appointments",
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
      personId: this.$route.params.personId,
      appointments: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let url =
        "http://localhost/api/PeopleApi/GetAppointmentsByPerson/" +
        this.personId;
      axios
        .get(url)
        .then(response => {
          this.appointments = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
