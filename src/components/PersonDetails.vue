<template>
  <div>
    <b-tabs>
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

    </b-tabs>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PersonDetails",
  data() {
    return {
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
