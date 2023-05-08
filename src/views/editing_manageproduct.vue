<!--이시언_수정중-->

<template>
  <div>
    <h2>상품 관리</h2>
    <div>
      <button @click="addProduct">상품 추가</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>가격</th>
          <th>이미지</th>
          <th>작업</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <img :src="product.image" alt="상품 이미지" height="50" />
          </td>
          <td>
            <button @click="editProduct(product)">수정</button>
            <button @click="deleteProduct(product)">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ManageProduct",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get("products.json")
        .then((response) => {
          this.products = response.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addProduct() {
      this.$router.push("/add");
    },
    editProduct(product) {
      this.$router.push({
        name: "edit",
        params: { id: product.id },
      });
    },
    deleteProduct(product) {
      if (confirm("삭제하시겠습니까?")) {
        axios
          .delete(`products/${product.id}.json`)
          .then(() => {
            this.products = this.products.filter(
              (p) => p.id !== product.id
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

