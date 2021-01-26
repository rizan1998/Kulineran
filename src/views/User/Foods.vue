<template>
  <div>
    <NavbarComponent />
    <div class="container">
      <h3>This is Foods</h3>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "../../components/UserComponent/Navbar";
import FooterComponent from "../../components/UserComponent/Footer";

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
