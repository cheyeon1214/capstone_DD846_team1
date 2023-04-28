<!--리뷰 관리-->

<template>
    <v-card class="mx-auto my-5" max-width="400" elevation="0"><br>
      <div class="reviewList" style="text-align: center; font-size: 18px; margin-top: -4%; margin-bottom: 8%;">
        <a>리뷰 관리</a>
        <v-divider class="mx-1 mb-1" style="margin-top: 4%;"></v-divider>
      </div>
        <v-card  v-for="r in reviews" :key="r.id" elevation="0"  style="margin-bottom: 10px;">
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
                <v-text-field v-model="reply" placeholder="답글을 남겨주세요" variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="3" style="margin-right: -30px;">
                <v-card-actions>
                    <v-btn icon="mdi-check" style="color: #0C70FE;" @click="sendReply"></v-btn>
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
    reply: "", // 답글 입력을 위한 변수 추가
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
        console.log('전송할 답글 정보:', this.reply); //프론트엔드에서 통신 테스트용
      try {
        const response = await axios.post('http://localhost:3007/replies', { //node.js의 해당 api 필요
        reply: this.reply
      });
      console.log(response.data); // POST 요청에 대한 응답
      this.reply = ''; // 입력 필드 비우기    
    } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>