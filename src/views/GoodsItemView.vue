<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">{{ product.name }}</h1>
      </div>
    </div>

    <section class="shop" v-if="product">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img
              class="shop__girl col-lg-12"
              alt="coffee_item"
              :src="product.image"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point" v-if="product.country">
              <span>Country:</span>
              {{ product.country }}
            </div>
            <div class="shop__point" v-if="product.description">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
  components: { NavBarComponent },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch(`http://localhost:4545/${this.pageName}/${this.$route.params.id}`)
      .then((res) => res.json())

      .then((data) => {
        this.product = data;
        // this.$store.dispatch('setCoffeeData', data);
      });
  },
  destroyed() {
    this.product = null;
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    card() {
      return this.$store.getters["getProductById"](this.$route.params.id);
    },
  },
};
</script>
