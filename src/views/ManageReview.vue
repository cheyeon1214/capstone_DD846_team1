<!--리뷰 관리-->

<template>
    <v-card class="mx-auto my-5" max-width="400" title="리뷰 관리" elevation="0"><br>
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
        reviews: []
    }),
    async created() {
        try {
            const res = await axios.get('http://localhost:3006/reviews');
            this.reviews = res.data;
        } catch (e) {
            console.error(e);
        }
    }
}
</script>


<!--<script>
import axios from "axios";

export default {
    data: () => ({
        show: false,
        reviews: [],
        reply: "", 
    }),
    async created() {
        try {
            const res = await axios.get('http://localhost:3006/reviews');
            this.reviews = res.data;
            this.sendReply(); // sendReply 함수 호출
        } catch (e) {
            console.error(e);
        }
    },
    methods: {
    async sendReply() {
        console.log('전송할 답글 정보:', this.reply);
    }
}
}
</script>-->