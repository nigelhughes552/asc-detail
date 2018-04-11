<template>
      <vue-tree-navigation :items="items" :defaultOpenLevel="0" />
    </template>

    <script>
export default {
  name: "TreeMenu",
  data() {
    return {
      personId: 1,
      items: [
        { name: "Overview", route: "Overview" },
        {
          name: "Detail",
          route: "/",
          children: [
            { name: "Name", route: "/DetailsName/" + 1 },
            { name: "Contact Information", element: "requirements" },
            { name: "Images", element: "demo" }
          ]
        },

        {
          name: "Roles",
          route: "/",
          children: [
            { name: "Fellowships", route: "/Fellowships/" + 1 },
            {
              name: "Responsibilities",
              route: "/Responsibilities/" + 1
            },
            { name: "Appointments", route: "/Appointments/" + 10 }
          ]
        },
        {
          name: "Background",
          route: "examples",
          children: [
            { name: "Roles", route: "elements" },
            { name: "Publications", route: "router" },
            { name: "Teaching/Supervision", route: "combined" },
            { name: "Other", route: "this" }
          ]
        },
        {
          name: "Research",
          route: "notes",
          children: [
            { name: "Detail", element: "scroll-behaviour" },
            { name: "Awards & Grants", element: "styling" }
          ]
        }
      ]
    };
  }
};
</script>
<style>
.router-link {
  color: rgb(56, 28, 212);
  text-decoration: none;
}

.router-link-active {
  color: rgb(107, 145, 228);
}

.navigation-toggle-icon {
  border: solid #cc1414;
}
</style>