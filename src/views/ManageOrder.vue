<!--주문관리-->

<template>
    <div class="manageorder">
        <div class="mx-auto my-5" style="margin-top: 15px; max-width: 500px;">
            <b>&nbsp;&nbsp;세탁물 요청</b>
        </div>
        <!--<v-divider class="mx-1 mb-1" style="margin-top: 3%;"></v-divider>-->
        <v-card class="mx-auto my-5" max-width="500" v-for="(request, index) in requests" v-bind:key="request.id" elevation="0">
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
                      <v-btn id="accept" icon="mdi-check" variant="outlined" size="32px" style="border-radius: 15%;" @click="moveToBefore(index)"></v-btn>
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
            <div id="status" style="margin-bottom: 10px;"><b>&nbsp;&nbsp;배송전</b></div>
            <v-card v-for="(request, index) in beforeShipping" :key="request.id" elevation="0">
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
                          <v-btn id="moveIng" variant="outlined" style="border-radius: 20px; font-size: 12px;" @click="moveToIng(index)">배송시작</v-btn>
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
                this.requests.splice(index, 1);
                this.showAlert("세탁 요청이 거절되었습니다.");
            } catch (e) {
                console.error(e);
            }
        },
        // 수락 버튼 -> 배송전으로 이동
        moveToBefore(index) {
            const beforeShipping = this.requests.splice(index, 1)[0];
            this.beforeShipping.unshift(beforeShipping);
            this.showAlert("세탁 요청이 수락되었습니다.");

            this.beforeShipping[index].status = '배송전';
            const request = this.beforeShipping.splice(index, 1)[0];
            this.shipping.push(request);
        },
        //배송시작 버튼 -> 배송중으로 이동
        moveToIng(index) {

        },
        showAlert(message) {
            alert(message);
        },
    },
}
</script>