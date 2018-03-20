<template>

  <div class="col-md-2">



<b-list-group>
  <b-list-group-item  href="#"><router-link to="/PersonDetails">Detail</router-link></b-list-group-item>
  <b-list-group-item  href="#" ><router-link to="/Fellowships">Fellowships</router-link></b-list-group-item>
  <b-list-group-item  href="#"><router-link to="/Responsibilities">Responsibilities</router-link></b-list-group-item>

</b-list-group>
<!--
            <ul class="nav nav-pills nav-stacked" id="navTabs" role="tablist">
                 <li role="presentation"><router-link to="/PersonDetails">Detail</router-link></li>
                <li role="presentation"><router-link to="/Fellowships">Fellowships</router-link></li>
                <li role="presentation">   <router-link to="/Responsibilities">Responsibilities</router-link></li>
                <li role="presentation"><a href="#appointment-container" aria-controls="appointment-container" role="tab" data-toggle="tab">Appointments</a></li>
                <li role="presentation"><a href="#room-container" aria-controls="room-container" role="tab" data-toggle="tab">Rooms</a></li>
                <li role="presentation"><a href="#address-container" aria-controls="address-container" role="tab" data-toggle="tab">Addresses</a></li>
                <li role="presentation"><a href="#images-container" aria-controls="images-container" role="tab" data-toggle="tab">Images</a></li>
                <li role="presentation"><a href="#subjects-container" aria-controls="subjects-container" role="tab" data-toggle="tab">Subjects</a></li>
                <li role="presentation"><a href="#telephone-container" aria-controls="telephone-container" role="tab" data-toggle="tab">Telephone</a></li>
                <li role="presentation" id="associatedTab"><a href="#associated-container" aria-controls="partner-container" role="tab" data-toggle="tab">Associated People</a></li>
                <li role="presentation"><a href="#rights-container" aria-controls="rights-container" role="tab" data-toggle="tab">Rights</a></li>
                <li role="presentation"><a href="#uploads-container" aria-controls="uploads-container" role="tab" data-toggle="tab">Files</a></li>
                <li role="presentation"><a href="#pn-container" aria-controls="pn-container" role="tab" data-toggle="tab">Post-nominals</a></li>
                <li role="presentation" id="backgroundTab"><a href="#background-container" aria-controls="background-container" role="tab" data-toggle="tab">Background</a></li>
                <li role="presentation"><a href="#research-container" aria-controls="research-container" role="tab" data-toggle="tab">Research Interests</a></li>
                <li role="presentation"><a href="#publications-container" aria-controls="publications-container" role="tab" data-toggle="tab">Selected Publications</a></li>
                <li role="presentation"><a href="#teaching-container" aria-controls="teaching-container" role="tab" data-toggle="tab">Teaching & Supervision</a></li>
                <li role="presentation"><a href="#memberships-container" aria-controls="memberships-container" role="tab" data-toggle="tab">Other Professional Memberships & Roles</a></li>
                <li role="presentation"><a href="#awards-container" aria-controls="awards-container" role="tab" data-toggle="tab">Research awards &amp; grants</a></li>
                <li role="presentation"><a href="#deceased-container" aria-controls="deceased-container" role="tab" data-toggle="tab">Deceased</a></li>

                <li role="presentation">
                    <button id="btnBack" aria-activedescendanttype="button" class="btn btn-primary btn-block">Back to list</button>
                </li>
            </ul>
            -->
            <pager />
  </div>
</template>

<script>
import Pager from "../components/pager.vue";
export default {
  name: "MainMenu",
  components: {
    Pager
  }
};
</script>


