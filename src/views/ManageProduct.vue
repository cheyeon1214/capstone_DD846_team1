<!--상품 관리-->

<template>
    <v-card class="mx-auto my-5" max-width="400" title="상품 관리" elevation="0"><br>
        <v-divider></v-divider>
      <v-card v-for="(product, index) in products" :key="index" elevation="0" style="margin-bottom: 10px;">
        <v-img class="align-end text-white" id="productImg" height="150" :src="product.image" cover>
        </v-img>
        <v-card-text style="margin-bottom: -5px;">
          <span id="productName" style="font-weight: bold; font-size: 15px;">
            {{ product.name }}
          </span>
          <span id="productPrice" style="color: gray">{{ product.price }} 원</span>
        </v-card-text>
        <v-row>
          <v-col cols="1">
            <v-card-text style="font-size: larger;">⮡ </v-card-text>
          </v-col>
          <v-col cols="9" style="margin-left: 6px; margin-right: -25px;">
            <v-text-field v-model="editedProduct.name" placeholder="상품 이름" variant="outlined"></v-text-field>
            <v-text-field v-model="editedProduct.price" placeholder="상품 가격" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="1" style="margin-left: -35px;">
            <v-card-actions>
              <v-btn icon color="success" @click="updateProduct(index)"><v-icon>mdi-check</v-icon></v-btn>
              <v-btn icon color="error" @click="deleteProduct(index)"><v-icon>mdi-delete</v-icon></v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
        <v-divider class="mx-1 mb-1"></v-divider>
      </v-card>
      <add-product :products="products" @product-added="addProduct"></add-product>
    </v-card>
  </template>
  
  <script>
  import AddProduct from './AddProduct.vue'
  
  export default {
    components: {
      'add-product': AddProduct
    },
    data: () => ({
      products: [
        {id: 1, name: '상의', price: 5000, image: 'https://picsum.photos/200/200?random=1'},
        {id: 2, name: '하의', price: 10000, image: 'https://picsum.photos/200/200?random=2'},
        {id: 3, name: '신발', price: 10000, image: 'https://picsum.photos/200/200?random=3'}
      ],
      editedProduct: {
        id: '',
        name: '',
        price: '',
        image: ''
      }
    }),
    methods: {
      updateProduct(index) {
        this.products[index] = this.editedProduct
        this.editedProduct = {
          id: '',
          name: '',
          price: '',
          image: ''
        }
      },
      deleteProduct(index) {
        this.products.splice(index, 1)
      },
      addProduct(product) {
        this.products.push(product)
      }
    }
  }
  </script>