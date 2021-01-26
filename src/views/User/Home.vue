<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <Hero />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "../../components/UserComponent/Navbar";
import Hero from "../../components/UserComponent/Hero";
import FooterComponent from "../../components/UserComponent/Footer";

export default {
  name: "Home",
  components: {
    NavbarComponent,
    Hero,
    FooterComponent,
  },
};
</script>
