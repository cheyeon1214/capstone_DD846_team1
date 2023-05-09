<!--리뷰 관리-->
<!--서혜린-->

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
              <!--<v-text-field v-model="reply[i]" placeholder="답글을 남겨주세요" variant="outlined"></v-text-field>-->
              <v-text-field v-model="newReply" placeholder="답글을 남겨주세요" variant="outlined"></v-text-field> <!--답글 출력-->
            </v-col>
            <v-col cols="3" style="margin-right: -30px;">
              <v-card-actions>
                  <v-btn icon="mdi-check" style="color: #0C70FE;" @click="sendReply(i)"></v-btn>
              </v-card-actions>
            </v-col>

            <!--답글 테스트-->
            <v-card style="margin-left: 15px; margin-bottom: 20px; margin-top: -10px;">
              <v-card-text>
                ⮡ &nbsp;답글: {{reply[i]}}
              </v-card-text>
            </v-card>

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
  reply: [], // 답글 저장
  newReply: "", // 답글 데이터 출력 위한 변수
}),
async created() {
  try {
    const res = await axios.get("http://localhost:3006/reviews");
    this.reviews = res.data;

    const response = await axios.get("http://localhost:3022/replies");
    this.reply = response.data;

  } catch (e) {
    console.error(e);
  }
},
methods: {
  async sendReply(i) {
    try {
      const response = await axios.post("http://localhost:3022/replies", {
      reply: this.reply[i], //this.replay[i]
      });
      console.log(response.data); // POST 요청에 대한 응답
      this.reply[i] = new Array(this.reviews.length).fill(""); // 리뷰 아이템 개수만큼 빈 문자열로 입력 필드 채움

      //답글 데이터 출력
      this.reply[i] = this.newReply; // 입력된 값을 reply 배열에 업데이트
      this.newReply = ""; // 텍스트 필드 초기화 (답글 출력)
      
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