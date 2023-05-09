<!--주문관리-->

<template>
    <div class="manageorder">
        <div class="mx-auto my-5" style="margin-top: 15px; max-width: 500px;">
            <b>&nbsp;&nbsp;세탁물 요청</b>
        </div>
        <v-card class="mx-auto my-5" max-width="500" v-for="(request, index) in filteredRequests('요청중')" v-bind:key="request.id" elevation="0" query="request.id">
            <div v-if="index === 0 || request.date !== requests[index - 1].date" style="margin-bottom: 5px;">
                <div id="date" style="margin-left: 10px; font-size: 14px;">
                    <b>{{ request.date }}</b>
                </div>
            </div>
            <v-card color="#5E5A80" style="color: white;">
                <v-row style="margin-top: -19px; margin-bottom: -18px;">
                    <v-col><v-card-text id="userId" style="margin-top: 4px; font-size: 14px;">
                        <b>{{ request.userId }}&nbsp;&nbsp;|</b>
                    </v-card-text></v-col>
                    <v-col><v-card-text id="name" style="font-size: 14px; margin-left: -60px;">
                        <b>&nbsp;&nbsp;&nbsp;{{ request.name }}</b>
                    </v-card-text></v-col>
                    <v-col style="margin-top: 3px;"><v-card-text id="requirement" style="margin-top: 5px; margin-left: -190px;">
                        &nbsp;<p>{{ request.requirement }}</p>
                    </v-card-text></v-col>
                    <v-card-actions style="margin-right: -10px;">
                      <v-btn id="accept" icon="mdi-check" variant="outlined" size="32px" style="border-radius: 15%;" @click="clickAccept(request.id)"></v-btn>
                    </v-card-actions>
                    <v-card-actions style="margin-right: -10px;">
                      <v-btn id="cancel" icon="mdi-close" variant="outlined" size="32px" style="border-radius: 15%;" @click="rejectRequest(index)"></v-btn>
                    </v-card-actions>
                    <v-card-actions style="margin-right: 17px;">
                      <v-btn id="moreInfo" icon="mdi-plus" variant="outlined" size="32px" style="border-radius: 15%;"
                            v-bind:to="{ name: 'orderdetails', query: { id: request.id } }"></v-btn>
                    </v-card-actions>
                </v-row>
            </v-card>
        </v-card>
        <v-divider class="mx-1 mb-1" style="margin-top: 30px;"></v-divider>

        <div class="mx-auto my-5" style="margin-top: 15px; max-width: 500px;">
            <div id="beforeDelivery" style="margin-bottom: 10px;"><b>&nbsp;&nbsp;배송전</b></div>
            <v-card v-for="(request, index) in filteredRequests('배송전')" :key="request.id" elevation="0">
                <v-card color="#5E5A80" style="color: white; margin-bottom: 10px;">
                    <v-row style="margin-top: -19px; margin-bottom: -18px;">
                        <v-col><v-card-text id="userId" style="margin-top: 4px; font-size: 14px;">
                            <b>{{ request.userId }}&nbsp;&nbsp;|</b>
                        </v-card-text></v-col>
                        <v-col><v-card-text id="name" style="font-size: 14px; margin-left: -60px;">
                            <b>&nbsp;&nbsp;&nbsp;{{ request.name }}</b>
                        </v-card-text></v-col>
                        <v-col style="margin-top: 3px;"><v-card-text id="requirement" style="margin-top: 5px; margin-left: -190px;">
                            &nbsp;<p>{{ request.requirement }}</p>
                        </v-card-text></v-col>
                        <v-card-actions style="margin-right: 20px;">
                          <v-btn id="start" variant="outlined" style="border-radius: 20px; font-size: 12px;" @click="clickStartDelivery(request.id)">배송시작</v-btn>
                        </v-card-actions>
                    </v-row>
                </v-card>
            </v-card>
        </div><v-divider class="mx-1 mb-1" style="margin-top: 30px;"></v-divider>

        <div class="mx-auto my-5" style="margin-top: 15px; max-width: 500px;">
            <div id="onDelivery" style="margin-bottom: 10px;"><b>&nbsp;&nbsp;배송중</b></div>
            <v-card v-for="(request, index) in filteredRequests('배송중')" :key="request.id" elevation="0">
                <v-card color="#5E5A80" style="color: white; margin-bottom: 10px;">
                    <v-row style="margin-top: -19px; margin-bottom: -18px;">
                        <v-col><v-card-text id="userId" style="margin-top: 4px; font-size: 14px;">
                            <b>{{ request.userId }}&nbsp;&nbsp;|</b>
                        </v-card-text></v-col>
                        <v-col><v-card-text id="name" style="font-size: 14px; margin-left: -60px;">
                            <b>&nbsp;&nbsp;&nbsp;{{ request.name }}</b>
                        </v-card-text></v-col>
                        <v-col style="margin-top: 3px;"><v-card-text id="requirement" style="margin-top: 5px; margin-left: -190px;">
                            &nbsp;<p>{{ request.requirement }}</p>
                        </v-card-text></v-col>
                        <v-card-actions style="margin-right: 20px;">
                          <v-btn id="complete" variant="outlined" style="border-radius: 20px; font-size: 12px;" @click="clickCompleteDelivery(request.id)">배송완료</v-btn>
                        </v-card-actions>
                    </v-row>
                </v-card>
            </v-card>
        </div><v-divider class="mx-1 mb-1" style="margin-top: 30px;"></v-divider>

        <div class="mx-auto my-5" style="margin-top: 15px; max-width: 500px;">
            <div id="completeDelivery" style="margin-bottom: 10px;"><b>&nbsp;&nbsp;배송완료</b></div>
            <v-card v-for="(request, index) in filteredRequests('배송완료')" :key="request.id" elevation="0">
                <v-card color="#5E5A80" style="color: white; margin-bottom: 10px;">
                    <v-row style="margin-top: -19px; margin-bottom: -18px;">
                        <v-col><v-card-text id="userId" style="margin-top: 4px; font-size: 14px;">
                            <b>{{ request.userId }}&nbsp;&nbsp;|</b>
                        </v-card-text></v-col>
                        <v-col><v-card-text id="name" style="font-size: 14px; margin-left: -60px;">
                            <b>&nbsp;&nbsp;&nbsp;{{ request.name }}</b>
                        </v-card-text></v-col>
                        <v-col style="margin-top: 3px;"><v-card-text id="requirement" style="margin-top: 5px; margin-left: -190px;">
                            &nbsp;<p>{{ request.requirement }}</p>
                        </v-card-text></v-col>
                        <v-card-actions style="margin-right: 20px;">
                        </v-card-actions>
                    </v-row>
                </v-card>
            </v-card>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: () => ({
        show: false,
        requests: [],
        beforeShipping: [],
    }),
    async created() {
        try {
            const res = await axios.get('http://localhost:3012/requests');
            this.requests = res.data;
        } catch (e) {
            console.error(e);
        }
    },
    methods: {
        async rejectRequest(index) {
            try {
                const requestId = this.requests[index].id;
                await axios.delete(`http://localhost:3012/requests/${requestId}`);
                this.showAlert("세탁 요청이 거절되었습니다.");
                this.requests.splice(index, 1);
            } catch (e) {
                console.error(e);
            }
        },
        filteredRequests(status) {  //배송 상태별로 구분
            return this.requests.filter(request => request.status === status);
        },
        // 수락 버튼 -> 배송전으로 이동
        async clickAccept(requestId) {
            try {
                const response = await axios.get(`http://localhost:3012/requests/${requestId}`);
                const request = response.data;
                request.status = "배송전";  // JSON 데이터의 "status" 값을 "배송전"으로 수정
                await axios.put(`http://localhost:3012/requests/${requestId}`, request);
                window.location.reload(); // 페이지 새로고침 (= this.$router.go();)   
                this.showAlert("세탁 요청이 수락되었습니다.");
            } catch (e) {
                console.error(e);
            }
        },
        // 배송시작 버튼 -> 배송중으로 이동
        async clickStartDelivery(requestId) {
            try {
                const response = await axios.get(`http://localhost:3012/requests/${requestId}`);
                const request = response.data;
                request.status = "배송중";
                await axios.put(`http://localhost:3012/requests/${requestId}`, request);
                window.location.reload();
                this.showAlert("배송이 시작되었습니다.");
            } catch (e) {
                console.error(e);
            }
        },
        // 배송완료 버튼 -> 배송완료로 이동
        async clickCompleteDelivery(requestId) {
            try {
                const response = await axios.get(`http://localhost:3012/requests/${requestId}`);
                const request = response.data;
                request.status = "배송완료";
                await axios.put(`http://localhost:3012/requests/${requestId}`, request);
                window.location.reload(); 
                this.showAlert("배송이 완료되었습니다.");
            } catch (e) {
                console.error(e);
            }
        },
        showAlert(message) {
            alert(message);
        },
    },
}
</script>