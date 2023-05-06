<!--수정중-->

<template>
  <v-card class="mx-auto my-5" max-width="400" title="상품 관리" elevation="0">
    <br />
    <v-divider></v-divider>

    <v-card v-for="(product, index) in products" :key="index" elevation="0" style="margin-bottom: 10px;">
      <v-img class="align-end text-white" id="productImg" height="150" :src="product.image" cover></v-img>

      <v-card-text style="margin-bottom: -5px;">
        <span id="productName" style="font-weight: bold; font-size: 15px;">
          {{ product.name }} &nbsp;
        </span>
        <span id="productPrice" style="color: gray">{{ product.price }} 원</span>
      </v-card-text>

      <v-row>
        <v-col cols="5" style="margin-left: 30px;">
          <v-text-field v-model="product.name" placeholder="상품 이름" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field v-model="product.price" placeholder="상품 가격" variant="outlined"></v-text-field>
        </v-col>
      </v-row>  
      <v-card-actions style="margin-left: 250px; margin-top: -10px;">
        <v-btn icon="mdi-check" @click="updateProduct(index)" style="margin-top: -30px;"><v-icon></v-icon></v-btn>
        <v-btn icon="mdi-delete" @click="deleteProduct(index)" style="margin-top: -30px;"><v-icon></v-icon></v-btn>
      </v-card-actions>
      

      <v-divider class="mx-1 mb-1"></v-divider>

    </v-card>
    <add-product @product-added="addProduct"></add-product>

  </v-card>
</template>

<script>
import axios from 'axios'
import AddProduct from './AddProduct.vue'

export default {
  components: {
    'add-product': AddProduct
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    axios.get('/products.json')
      .then(response => {
        this.products = response.data.products
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    updateProduct(index, product) {
      this.products[index] = product
      axios.put('/products.json', { products: this.products })
        .catch(error => {
          console.log(error)
        })
    },
    deleteProduct(index) {
      this.products.splice(index, 1)
      axios.put('/products.json', { products: this.products })
        .catch(error => {
          console.log(error)
        })
    },
    addProduct(product) {
      this.products.push(product)
      axios.put('/products.json', { products: this.products })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
