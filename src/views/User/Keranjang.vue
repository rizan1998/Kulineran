<template>
  <div class="Keranjang">
    <NavbarComponent />
    <div class="container">
      <h3>this is keranjang</h3>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "../../components/UserComponent/Navbar";
import FooterComponent from "../../components/UserComponent/Footer";
export default {
  name: "Keranjang",
  data() {},
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>