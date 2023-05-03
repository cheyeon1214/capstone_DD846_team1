<!--세탁물 현황-->

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>세탁물 현황</h1>
        <v-subheader>배송중</v-subheader>
        <v-row>
          <v-col cols="4" v-for="i in 3" :key="i">
            <v-card class="pa-2 text-center">{{ i }}</v-card>
          </v-col>
        </v-row>
        <v-subheader>배송완료</v-subheader>
        <v-row>
          <v-col cols="4" v-for="c in ['ㄱ', 'ㄴ', 'ㄷ']" :key="c">
            <v-card class="pa-2 text-center">{{ c }}</v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
