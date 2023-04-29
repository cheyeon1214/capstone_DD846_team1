<!--판매내역-->

<template>
    <div class="wrapper">
        <v-card class="mx-auto my-5" max-width="500" elevation="0">
            <div style="margin-top: -7%;"></div>
            <div v-for="(lh, index) in laundryhistorys" v-bind:key="lh.id">
                <div v-if="index === 0 || lh.date !== laundryhistorys[index - 1].date">
                    <div class="date" id="date">
                        <b>{{ lh.date }}</b>
                    </div>
                </div>
                <v-card v-bind:key="lh.id" elevation="0">
                    <div class="washingStatus">
                        <v-img id="washingImg" :src="lh.washingImg" cover></v-img>
                        <v-card-text>
                            <div id="name">
                                품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;목&nbsp;&nbsp;|&nbsp;&nbsp;{{ lh.name }}
                            </div>
                            <div id="cost">세탁비용&nbsp;|&nbsp;&nbsp;{{ lh.cost }}</div>
                            <div id="requirement">요청사항&nbsp;|&nbsp;&nbsp;{{ lh.requirement }}</div>
                        </v-card-text>
                    </div>
                </v-card>
            </div>
            <br>
        </v-card>
    </div>
</template>

<style>
.myWashing {
    margin-top: 20px;
    font-size: 18px;
    text-align: center;
}

#divisionLine {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 20px;
  margin-bottom: 10px;
}
#divisionLine2 { 
    width: 70%;
    margin-left: 95px;
    margin-top: 10px;
    margin-bottom: 5px;
}

.date {
    margin-top: 40px;
    margin-left: 4%;
    font-size: 15px;
}

.washingStatus {
    height: 110px;
    border-radius: 13px;
    font-size: smaller;
    background-color: white;
    border: 1px solid gainsboro;
    font-display: center;
    margin-bottom: 5px;
    margin-top: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: auto;
}

#name {
    margin-bottom: 3px;
    margin-top: 5px;
}
#cost {
    margin-bottom: 3px;
}
#requirement {
    margin-bottom: 3px;
}
#laundryName {
    margin-left: 4px;
}
#reviewBtn {
    width: 10px;
    height: 24px;
    background-color: #5E5A80;
    color: white;
    border-radius: 10px;
    margin-top: 1px;
    box-shadow: none;
}

.delivery {
    color: red;
    text-decoration-line: none;
}

#washingImg {
    width: 85px;
    height: 80px;
    float: left;
    margin-left: 15px;
    margin-top: 15px;
    margin-right: 17px;
    border-radius: 5px;
}
</style>

<script>
import axios from "axios";

export default {
    data: () => ({
        show: false,
        laundryhistorys: []
    }),
    async created() {
        try {
            const res = await axios.get('http://localhost:3011/laundryhistorys');
            this.laundryhistorys = res.data;
        } catch (e) {
            console.error(e);
        }
    }
}
</script>