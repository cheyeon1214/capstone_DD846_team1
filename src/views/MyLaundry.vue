<!--내 세탁소-->
<!--서혜린-->

<template>
    <div id="laund-list">
        <v-card class="mx-auto my-5" max-width="500" v-for="mylaundry in mylaundrys" :key="mylaundry.id" elevation="0">
            <v-img class="align-end text-white" id="laund-img" height="150"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjRfMTQ3%2FMDAxNjY0MDA4MTk4MzAz.BwhTgWGfyhuJY0X5BwkEBx-MCnAp1AiontZ8lctUZcog.p1YZYnoJbu2O6wimUoYzP6ZSLj8UdUW6POKhIBcJtTMg.JPEG.sol_ji1%2FIMG_2992.jpg&type=sc960_832"
                cover>
                <v-card-title id="laund-title">{{ mylaundry.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-3" id="laund-sub-title">{{ mylaundry.subtitle }}</v-card-subtitle>
            <v-card-text>
                <div id="laund-address">{{ mylaundry.address }}</div>
                <div id="laund-info">{{ mylaundry.info }}</div>
            </v-card-text>

            <v-row class="mx-0" style="margin-top: -35px;">
                <v-rating :model-value=mylaundry.stars color="amber" density="compact" 
                    half-increments readonly size="small" style="margin-left: 15px; margin-top: 20px;"></v-rating>
            </v-row>

            <v-divider class="mx-1 mb-1" style="margin-top: 30px;"></v-divider>
        </v-card>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        show: false,
        mylaundrys: []
    }),
    async created() {
        try {
            const res = await axios.get('http://localhost:3009/mylaundrys');
            this.mylaundrys = res.data;
        } catch (e) {
            console.error(e);
        }
    }
}
</script>