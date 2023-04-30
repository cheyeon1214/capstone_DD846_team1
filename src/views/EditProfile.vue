<!--프로필 편집-->

<template>
    <v-card class="mx-auto my-5" max-width="400" elevation="0">
    <v-card-title class="text-center" style="font-size: 24px;">프로필 편집</v-card-title>
    </v-card>
    <hr id="divisionLine">
  
      <br>
      <div style="color: gray;">프로필 사진 편집</div>
      <br>
      <div>
        <input multiple @change="onInputImage" ref="surveyImage" type="file">
      </div>
      <br>
  
      <v-form>
        <v-text-field v-model="user.name" label="이름"></v-text-field>
        <v-text-field v-model="user.email" label="이메일"></v-text-field>
        <v-text-field v-model="user.nickname" label="닉네임"></v-text-field>
        <v-text-field v-model="user.phone" label="연락처"></v-text-field>
        <v-text-field v-model="user.password" label="현재 비밀번호"></v-text-field>
        <v-text-field v-model="user.newPassword" label="새 비밀번호"></v-text-field>
        <v-text-field v-model="user.newPasswordConfirm" label="새 비밀번호 확인"></v-text-field>
        <v-btn type="submit" color="primary">저장</v-btn>
      </v-form>
</template>


<script>
  import axios from 'axios';
  const baseURL = "http://localhost:3001/users";

export default {
  data() {
    return {
      user: {
        id: null,
        name: '',
        email: '',
        nickname: '',
        phone: '',
        password: '',
        newPassword: '',
        newPasswordConfirm: '',
      },
    }
  },
  created() {

  },

  methods: {
    async save() {
     {
        try {
          const res = await axios.post(baseURL, {
            name: this.user.name,
            id: this.user.id,
            phone: this.user.phone,
            email: this.user.email,
            password: this.user.password,
          });

          axios.put(`${baseURL}/${res.data.id}`, {
            name: this.user.name,
            id: this.user.id,
            phone: this.user.phone,
            email: this.user.email,
            password: this.user.password,
            image: this.$refs.surveyImage.filters,
          });

        } catch (e) {
          console.error(e);
        }
      }
    },
  }
}
</script>
