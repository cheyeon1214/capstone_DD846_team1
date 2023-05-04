<!--요청된 세탁물 상세정보-->

<template>
    <div class="orderdetails">
        <v-card class="mx-auto my-5" max-width="500" elevation="0"  color="#5E5A80" style="color: white;">
            <div style="text-align: center; font-size: 18px; margin-top: 20px; margin-bottom: 15px;">
                <a>상세 정보</a>
                <v-divider class="mx-1 mb-1" style="margin-top: 4%;"></v-divider>
            </div>
                <v-card-text style="margin-left: 10px; margin-bottom: 15px;">
                    <p><b style="color: #adb5bd">세탁물이미지</b>
                        <v-avatar class="ma-3" rounded="0" style="width: 80%; height: 200px;">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover style="align-items: center;"></v-img>
                        </v-avatar></p><br>
                    <p><b style="color: #adb5bd">요청날짜</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        2023.05.05</p><br>
                    <p><b style="color: #adb5bd">고객아이디</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        userId</p><br>
                    <p><b style="color: #adb5bd">세탁품목</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        운동화</p><br>
                    <p><b style="color: #adb5bd">요청사항</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        얼룩 지워주세요</p><br>
                    <p><b style="color: #adb5bd">세탁가격</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        7,000원</p><br>
                    <p><b style="color: #adb5bd">배달주소</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        경기도 수원시 영통구</p>
                </v-card-text>
            
        </v-card>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: () => ({
        show: false,
        requests: []
    }),
    async created() {
        try {
            const res = await axios.get('http://localhost:3012/requests');
            this.requests = res.data;
        } catch (e) {
            console.error(e);
        }
    }
}
</script>