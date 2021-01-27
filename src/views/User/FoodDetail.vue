<template>
  <div class="FoodDetail">
    <NavbarComponent />
    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/Foods">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "../../components/UserComponent/Navbar";
import FooterComponent from "../../components/UserComponent/Footer";
import axios from "axios";
export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
  props: ["id"],
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProduct(data) {
      // console.log(data);
      this.products = data;
    },
    searchFoods() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => {
          // handle success
          // console.log("berhasil:", response);
          if (response.data.length == 0) {
            this.setProduct(null);
          }
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