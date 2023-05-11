<!--상품관리-->
<!--이시언-->

<template>
  <v-card class="mx-auto my-5" max-width="400" title="상품 관리" elevation="0">
    <br/>
    <v-divider></v-divider>
  </v-card>

  <v-card  v-for="pro in products" :key="pro.id" elevation="0" style="margin-bottom: 10px;">
          <v-img class="align-end" id="productImg" height="150"
              :src="pro.productImg" cover>
          </v-img>
          <v-card-text style="margin-bottom: -5px;">
              <span id="productName" style="font-weight: bold; font-size: 15px;">
                  {{ pro.productName }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span id="price" style="font-weight: bold; font-size: 15px;">
                  {{ pro.price }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
          </v-card-text>

          <v-row>
            <v-col cols="5" style="margin-left: 30px;">
              <v-text-field v-model="pro.productName" :placeholder="pro.productName" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="5" style="margin-left: 30px;">
              <v-text-field v-model="pro.price" :placeholder="pro.price" variant="outlined"></v-text-field>
            </v-col>
          </v-row>  

          <v-row>
            <v-card-actions style="margin-left: 255px; margin-top: -10px;">
              <v-btn icon="mdi-check" @click="sendProductNameAndPrice(pro, pro.productName, pro.price)" style="margin-top: -30px;"><v-icon></v-icon></v-btn>
            </v-card-actions>
            <v-card-actions style="margin-left: 20px; margin-top: -10px;">
              <v-btn id="delete" icon="mdi-delete" style="margin-top: -30px;" @click="deleteproduct(pro.id)"><v-icon></v-icon></v-btn>
            </v-card-actions>
          </v-row>
  </v-card>

  <v-card>
    <add-product @product-added="addProduct"></add-product>
  </v-card>

</template>


<script>
  import axios from "axios";

  export default {
    data: () => ({
      show: false,
      products: [],
      productName: "",
      nameValue: "",
      price: "",
      priceValue: "",
      reply: ""
    }),

    async created() {
      try {
        const res = await axios.get("http://localhost:3013/products");
        this.products = res.data;
      } catch (e) {
        console.error(e);
      }
    },

    methods: {
  async sendProductNameAndPrice(pro, productName, price) {
    try {
      pro.productName = productName || pro.productName;
      pro.price = price || pro.price;
      await axios.put(`http://localhost:3013/products/${pro.id}`, pro);
      this.showAlert("상품 정보가 변경되었습니다.");
    } catch (e) {
      console.error(e);
    }
  },

  async deleteproduct(deleteId) {
    try {
      await axios.delete(`http://localhost:3013/products/${deleteId}`);
      window.location.reload(); 
      this.showAlert("상품이 삭제되었습니다.");
    } catch (e) {
      console.error(e);
    }
  },

  async AddProduct(pro, productName, price, productImg) {
    try {
      pro.productName = productName || pro.productName;
      pro.price = price || pro.price;
      pro.productImg = productImg || pro.productImg;
      await axios.put(`http://localhost:3013/products/${pro.id}`, pro);
      this.showAlert("상품 정보가 추가되었습니다.");
    } catch (e) {
      console.error(e);
    }
  },

  showAlert(message) {
    alert(message);
  }
},


    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
</script>
