<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye class="mr-1"></b-icon-eye>Lihat semua
          </router-link>
        </div>
      </div>
      <div class="row mb-3">
        <div
          class="col-md-4 mt-4"
          v-for="product of products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "../../components/UserComponent/Navbar";
import Hero from "../../components/UserComponent/Hero";
import FooterComponent from "../../components/UserComponent/Footer";
import CardProduct from "../../components/UserComponent/CardProduct";

import axios from "axios";

export default {
  name: "Home",
  components: {
    NavbarComponent,
    Hero,
    FooterComponent,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    //ketika halaman dipasang makan kodingannya berjalan

    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => {
        // handle success
        console.log("berhasil:", response);
        this.setProduct(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>
