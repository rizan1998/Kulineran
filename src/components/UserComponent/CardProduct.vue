<template>
  <div class="cardproduct">
    <div class="card shadow card-product">
      <img
        class="card-img-top"
        :src="'assets/images/' + product.gambar"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Rp. {{ product.harga }}</p>
        <router-link :to="'/Foods/' + product.id" class="btn btn-success"
          ><b-icon-cart></b-icon-cart> Pesan</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>