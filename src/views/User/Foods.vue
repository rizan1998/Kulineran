<template>
  <div>
    <NavbarComponent />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h3>Daftar Makanan</h3>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6 offset-md-6">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Menu Makanan"
              aria-label="Cari Menu Makanan"
              aria-describedby="basic-addon2"
              @keyup="searchFoods"
            />
            <div class="input-group-append" @click="searchFoods">
              <span class="input-group-text" id="basic-addon2">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
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
import FooterComponent from "../../components/UserComponent/Footer";
import CardProduct from "../../components/UserComponent/CardProduct";
import axios from "axios";

export default {
  components: {
    NavbarComponent,
    FooterComponent,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFoods() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
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
  },
  mounted() {
    //ketika halaman dipasang makan kodingannya berjalan

    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/products")
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
