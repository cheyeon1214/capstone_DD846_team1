<!--상품관리-->
<!--이시언-->

<template>
  <v-card class="mx-auto my-5" max-width="400" title="상품 관리" elevation="0">
    <br/>
    <v-divider></v-divider>
  </v-card>

  <v-card v-for="pro in products" :key="pro.id" elevation="0" style="margin-bottom: 10px;">
    <v-img class="align-end" id="productImg" height="150" :src="pro.productImg" cover></v-img>
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

  <v-card class="mx-auto my-5" max-width="400" elevation="0">
    <v-container>
      <v-text-field v-model="add_name" :rules="[rules.required]" color="blue" label="상품 이름" variant="underlined"></v-text-field>
      <br/>
      <v-text-field v-model="add_price" :rules="[rules.required]" color="blue" label="가격" variant="underlined"></v-text-field>
      <br/>
      <v-file-input v-model="add_image" :rules="[rules.required]" color="blue" label="상품 이미지" variant="outlined"></v-file-input>
    </v-container>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#0C70FE" @click="addProduct">
        <v-btn type="submit">추가</v-btn>
      </v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        show: false,
        products: [],
        productName: "",
        nameValue: "",
        price: "",
        priceValue: "",
        reply: "",
        add_name: null,
        add_price: null,
        add_image: null,
        rules: {
          required: (value) => !!value|| "반드시 입력하세요",
        },
      };
    },

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

      async addProduct() {
        if (
          this.rules.required(this.add_name) === true &&
          this.rules.required(this.add_price) === true &&
          this.rules.required(this.add_image) === true
        ) {
          const newProduct = {
            name: this.add_name,
            price: this.add_price,
          };

          const formData = new FormData();
          formData.append("productImg", this.add_image);

          try {
            await axios.post("http://localhost:3013/products", newProduct);
            console.log("데이터가 성공적으로 추가되었습니다.");
            this.showAlert("새로운 상품이 등록되었습니다.");

            this.add_name = null;
            this.add_price = null;
            this.add_image = null;
          } catch (error) {
            console.error("데이터 추가 오류:", error);
          }
        }
      },

      showAlert(message) {
        alert(message);
      },
    },

    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
</script>
