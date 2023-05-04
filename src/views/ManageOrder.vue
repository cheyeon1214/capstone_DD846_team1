<!--주문관리-->

<template>
    <div class="manageorder">
        <v-card class="mx-auto my-5" max-width="500" v-for="(request, index) in requests" v-bind:key="request.id" elevation="0">
            <div v-if="index === 0 || request.date !== requests[index - 1].date" style="margin-bottom: 10px;">
                <div id="date">
                    <b>{{ request.date }}</b>
                </div>
            </div>
            <v-card color="#5E5A80" style="color: white;"> <!--variant="outlined"-->
                <v-row>
                <v-col><v-card-text id="userId" style="margin-top: 4px; font-size: 15px;">
                    <b>{{ request.userId }}&nbsp;&nbsp;|</b>
                </v-card-text></v-col>
                <v-col style=""><v-card-text id="name" style="font-size: 15px; margin-left: -60px;">
                    <b>&nbsp;&nbsp;{{ request.name }}</b>
                </v-card-text></v-col>
                <v-col><v-card-text id="requirement" style="margin-top: 5px; margin-left: -100px;">
                    &nbsp;&nbsp;&nbsp;{{ request.requirement }}
                </v-card-text></v-col>
                <v-card-actions style="margin-right: -7px;">
                    <v-btn id="accept" icon="mdi-check" variant="outlined" size="35px" style="border-radius: 15%;"></v-btn>
                </v-card-actions>
                <v-card-actions style="margin-right: -7px;">
                    <v-btn id="cancel" icon="mdi-close" variant="outlined" size="35px" style="border-radius: 15%;"></v-btn>
                </v-card-actions>
                <v-card-actions style="margin-right: 20px;">
                    <v-btn id="seeMore" icon="mdi-plus" variant="outlined" size="35px" style="border-radius: 15%;"></v-btn>
                </v-card-actions>
              </v-row>
            </v-card>
        </v-card>
        
        <v-divider class="mx-1 mb-1"></v-divider>
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