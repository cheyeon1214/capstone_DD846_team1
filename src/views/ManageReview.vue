<!--리뷰 관리-->

<template>
  <v-card class="mx-auto my-5" max-width="400" elevation="0"><br>
    <div style="margin-top: -28px;"></div>
      <v-card  v-for="(r, i) in reviews" :key="r.id" elevation="0"  style="margin-bottom: 10px;">
          <v-card-text style="margin-bottom: -5px;">
              <span id="userID" style="font-weight: bold; font-size: 15px;">
                  {{ r.userId }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span id="reviewDate" style="color: gray">{{ r.reviewDate }}</span>
          </v-card-text>
          <v-img class="align-end text-white" id="reviewImg" height="150"
              :src="r.reviewImg" cover>
          </v-img>
          <v-row>
              <v-rating :model-value=r.stars color="amber" density="compact" 
                      half-increments readonly size="small" style="margin-left: 23px; margin-top: 20px;"> 
              </v-rating>
              <v-card-text id="reviewContent" style="margin-top: 8px;">{{ r.reviewContent }}</v-card-text>
          </v-row>
          <v-row>
            <v-col cols="1">
              <v-card-text style="font-size: larger;">⮡ </v-card-text>
            </v-col>
            <v-col cols="9" style="margin-left: 6px; margin-right: -25px;">
              <v-text-field v-model="reply[i]" placeholder="답글을 남겨주세요" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="3" style="margin-right: -30px;">
              <v-card-actions>
                  <v-btn icon="mdi-check" style="color: #0C70FE;" @click="sendReply(i)"></v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-divider class="mx-1 mb-1"></v-divider>
      </v-card>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
data: () => ({
  show: false,
  reviews: [],
  reply: [], // 답글 입력을 위한 변수 추가
}),
async created() {
  try {
    const res = await axios.get("http://localhost:3006/reviews");
    this.reviews = res.data;
  } catch (e) {
    console.error(e);
  }
},
methods: {
  async sendReply() {
    try {
      const response = await axios.post("http://localhost:3022/replies", {
        reply: this.reply,
      });
      console.log(response.data); // POST 요청에 대한 응답
      this.reply = new Array(this.reviews.length).fill(""); // 리뷰 아이템 개수만큼 빈 문자열로 입력 필드 채움
    } catch (e) {
      console.error(e);
    }
  },
},
headers: {
  'Access-Control-Allow-Origin': '*'
}
};
</script>