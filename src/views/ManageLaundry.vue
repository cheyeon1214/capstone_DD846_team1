<!--세탁소 관리-->

<template>
    <v-card class="mx-auto my-5" max-width="400" title="세탁소 관리" elevation="0"><br>
        <v-container>
            <v-text-field v-model="name" :rules="[rules.required]" 
                color="blue" label="세탁소명" placeholder="세탁소 이름을 입력해주세요" variant="underlined"></v-text-field><br>

            <v-text-field v-model="intro" :rules="[rules.minRules]" 
                color="blue" label="소개글" placeholder="세탁소 소개글을 작성해주세요" variant="underlined"></v-text-field><br>

            <v-row>
              <v-col cols="6">
                <v-text-field v-model="openTime" :rules="[rules.required]"
                    color="blue" label="오픈 시간" type="time" variant="underlined"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="closeTime" :rules="[rules.required]"
                    color="blue" label="마감 시간" type="time" variant="underlined"></v-text-field>
              </v-col>
            </v-row><br>

            <v-text-field v-model="notice" :rules="[rules.required]" 
                color="blue" label="공지사항" placeholder="공지사항을 작성해주세요" variant="underlined"></v-text-field><br>

            <v-file-input v-model="image" :rules="[rules.required]"
                color="blue" label="세탁소 이미지" variant="outlined"></v-file-input>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="#0C70FE" @click="addManageLaundrys">
                등록
                <v-icon icon="mdi-chevron-right" color="#0C70FE" end></v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from 'axios';
const baseURL = "http://localhost:3005/managelaundrys"; //node.js의 해당 api 필요

export default {
    data() {
        return {
            name: null,
            intro: null,
            openTime: null,
            closeTime: null,
            notice: null,
            image: null,

            managelaundrys: [],
            rules: {
                required: value => !!value || '반드시 입력하세요',
                minRules: value => value.length >= 5 || '5자 이상 입력하세요',
            },
            
        }
    },
    methods: {
        async addManageLaundrys() {
            if (
            this.rules.required(this.name) === true && 
            this.rules.minRules(this.intro) === true &&
            this.rules.required(this.openTime) === true && 
            this.rules.required(this.closeTime) === true &&
            this.rules.required(this.notice) === true &&
            this.rules.required(this.image) === true
            ) {
                console.log('<전송할 정보>',
                            '이름:', this.name,
                            '소개:', this.intro,
                            '오픈시간:', this.openTime,
                            '마감시간:', this.closeTime,
                            '공지사항:', this.notice
                            ); //프론트엔드에서 통신 테스트용

                try {
                    const res = await axios.post(baseURL, {
                        name: this.name,
                        intro: this.intro,
                        openTime: this.openTime,
                        closeTime: this.closeTime,
                        notice: this.notice,
                        image: this.image
                    });

                    this.managelaundrys = [...this.managelaundrys, res.data];
                } catch (e) {
                    console.error(e);
                }
            }
            
        },
    },
    
};
</script>