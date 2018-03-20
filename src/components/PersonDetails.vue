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
  
        <br>Disabled tab!
  
      </b-tab>
  
      <b-tab title="Historic Data">
  
        <br>Disabled tab!
  
      </b-tab>
  
    </b-tabs>
  
  </div>
</template>

<script>
export default {
  name: "PersonDetails",

  data() {
    return {
      person: {
        Title: "",
        Forenames: "",
        Surname: "",
        DisplayName: "",
        DisplayPostnominals: "",
        Mobile: ""
      }
    };
  },

  created: function() {
    this.fetchProducts();
  },

  methods: {
    fetchProducts() {
      {
        this.$http

          .get("http://localhost/api/PeopleApi/GetPersonDetails?id=1")

          .then(response => {
            let personDetails = response.body;
            this.person.Title = personDetails.Title;
            this.person.Forenames = personDetails.Forenames;
            this.person.Surname = personDetails.Surname;
            this.person.DisplayName = personDetails.DisplayName;
            this.person.DisplayPostnominals = personDetails.DisplayPostnominals;
            this.person.Mobile = personDetails.Mobile;
          });
      }
    }
  }
};
</script>
