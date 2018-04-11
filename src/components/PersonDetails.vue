<template>
  <div>


    <img :src="personImage" />

    <v-tabs v-model="active" color="blue-grey lighten-1" dark slider-color="blue">
      <v-tab ripple>
        Name
      </v-tab>

      <v-tab ripple>
        Contact Information
      </v-tab>
      <v-tab ripple>
        Images
      </v-tab>
  <v-tab ripple>
        Postnominals
      </v-tab>
        <v-tab ripple>
        Files
      </v-tab>
        <v-tab ripple>
        Rights
      </v-tab>


      <v-tab-item>
        <v-card>
          <v-card-text>
            <strong>Title: </strong>{{person.Title}}
            <br>
            <strong>Forenames: </strong>{{person.Forenames}}
            <br>
            <strong>Surname: </strong>{{person.Surname}}
            <br>
            <strong>Display Name: </strong>{{person.DisplayName}}
            <br>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-card-text>
            <img :src="personImage" />
          </v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs>






    <!-- <b-tabs>
      <b-tab title="Main" active>

        <div class="card">
          <div class="card-header">
            Main Details
          </div>

          <div class="card-body">
            <strong>Title: </strong>{{person.Title}}<br>
            <strong>Forenames: </strong>{{person.Forenames}}<br>
            <strong>Surname: </strong>{{person.Surname}}<br>
            <strong>Display Name: </strong>{{person.DisplayName}}<br>
         
          <img :src="personImage" />
          </div>
        </div>
      </b-tab>



      <b-tab title="Postnominals">
        <div class="card">
          <div class="card-header">
            Postnominals
          </div>

          <div class="card-body"><strong>Display Postnominals: </strong>{{person.DisplayPostnominals}}<br>

          </div>

        </div>

      </b-tab>

      <b-tab title="Contact Information">

      <div class="card">

          <div class="card-header">

            Contact

          </div>

          <div class="card-body"><strong>Mobile <i class="fa fa-mobile" aria-hidden="true"></i>: </strong>{{person.Mobile}}<br>

          </div>

        </div>

      </b-tab>

      <b-tab title="Other">

        <div class="card">

          <div class="card-header">

            Other

          </div>

          <div class="card-body">
            <strong>Home Page URL: </strong>{{person.HomePageURL}}<br>

          </div>

        </div>

      </b-tab>

      <b-tab title="Historic Data">

        <br>Disabled tab!

      </b-tab>

    </b-tabs> -->

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PersonDetails",
  data() {
    return {
      active: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      person: [],
      personId: this.$route.params.personId,
      personImage: ""
    };
  },

  created: function() {
    this.fetchData();
    this.fetchImage();
  },

  methods: {
    fetchData() {
      {
        let url =
          "http://localhost/api/PeopleApi/GetPersonDetails?id=" + this.personId;
        axios
          .get(url)
          .then(response => {
            this.person = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    fetchImage() {
      {
        let url =
          "http://localhost/api/peopleapi/GetPersonImage?id=" + this.personId;
        axios
          .get(url)
          .then(response => {
            this.personImage = response.data;
            if (this.personImage == "/images/avatar.png") {
              this.personImage = "/static/avatar.png";
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>
