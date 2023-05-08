<!--상품 추가-->
<!--이시언-->

<template>
  <div>
    <h2>상품 추가</h2>
    <form @submit.prevent="addProduct">
      <div>
        <label for="name">이름:</label>
        <input type="text" id="name" v-model="product.name" required />
      </div>
      <div>
        <label for="price">가격:</label>
        <input type="number" id="price" v-model="product.price" required />
      </div>
      <div>
        <label for="image">이미지 URL:</label>
        <input type="url" id="image" v-model="product.image" required />
      </div>
      <button type="submit">추가</button>
      <button @click="$router.push('/')">취소</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "",
        price: null,
        image: "",
      },
    };
  },
  methods: {
    addProduct() {
      axios
        .post("/api/products", this.product)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
