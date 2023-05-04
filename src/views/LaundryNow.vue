<!--세탁물 현황-->

<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>세탁물 현황</h1>
          <br>
  
          <v-subheader>배송중</v-subheader>
          <br>
          <v-row>
            <v-col cols="4" v-for="(item, index) in form" :key="'form-' + index">
              <v-form>
                <v-text-field v-model="item.name" label="이름"></v-text-field>
                <v-text-field v-model="item.date" label="날짜"></v-text-field>
                <v-text-field v-model="item.item" label="품목"></v-text-field>
                <v-card class="pa-2 text-center" :key="'card-' + index">
                  {{ item.name }}<br>
                  {{ item.date }}<br>
                  {{ item.item }}
                  <br>
                  <v-btn @click="moveToCompleted(index)">완료</v-btn>
                </v-card>
              </v-form>
            </v-col>
          </v-row>
  
          <br>
          <v-subheader>배송완료</v-subheader>
          <br>
          <v-row>
            <v-col cols="4" v-for="(item, index) in completedForm" :key="'completed-form-' + index">
              <v-card class="pa-2 text-center" :key="'completed-card-' + index">
                {{ item.name }}<br>
                {{ item.date }}<br>
                {{ item.item }}
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: [
          { name: '', date: '', item: '' },
          { name: '', date: '', item: '' },
          { name: '', date: '', item: '' }
        ],
        completedForm: []
      }
    },
    methods: {
      moveToCompleted(index) {
        const item = this.form[index];
        this.form.splice(index, 1);
        this.completedForm.push(item);
      }
    }
  }
  </script>
  
  <style scoped>
  ::v-deep .v-card {
    background-color: #e8e8e8;
  }
  </style>
  