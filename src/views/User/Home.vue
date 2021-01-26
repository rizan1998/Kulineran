<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <h3>This is home</h3>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "../../components/UserComponent/Navbar";
import FooterComponent from "../../components/UserComponent/Footer";

export default {
  name: "Home",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
