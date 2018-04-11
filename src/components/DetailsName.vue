<template>
  <div>
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
        <strong>Addressee: </strong>{{person.Addressee}}
        <br>
        <strong>Salutation: </strong>{{person.Salutation}}
        <br>
        <strong>Salutation Informal: </strong>{{person.SalutationInformal}}
        <br>
        <strong>Search Name: </strong>{{person.SearchName}}
        <br>
        <strong>College Username: </strong>{{person.CollegeUsername}}
        <br>
        <strong>Other Names: </strong>{{person.OtherNames}}
        <br>


        <br>
      </v-card-text>
    </v-card>
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
    // this.fetchImage();
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
