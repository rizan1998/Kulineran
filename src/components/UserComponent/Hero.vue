<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-md-block d-none">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu</strong>
                <p>In Your Gedget</p>
              </h2>
              <p>Ayo Segera Pilih dan pesan makanan favorit anda</p>
              <router-link to="/Foods">
                <button to="/Pesan" class="btn btn-lg btn-success">
                  <b-icon-arrow-right></b-icon-arrow-right> Pesan
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../../assets/images/hero.png" width="100%" alt="" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row">
        <div class="col-md-6 mb-3">
          <img src="../../assets/images/hero.png" width="100%" alt="" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu</strong>
                <p>In Your Gedget</p>
              </h2>
              <p>Ayo Segera Pilih dan pesan makanan favorit anda</p>
              <button to="/Pesan" class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right> Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>