<template>
  <div>
    <br>
    <h2 class="text-center">내가 쓴 리뷰</h2>
    <hr id="div_line" />

    <v-container>
      <v-row>
        <v-card v-for="(review, index) in reviews" :key="index">
          <v-card-title>
            {{ review.title }}
          </v-card-title>
          <v-card-text>
            {{ review.content }}
          </v-card-text>
          <v-card-actions>
            <v-rating v-model="review.rating" />
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      reviews: []
    };
  },
  async created() {
    try { 
      const res = await axios.get('http://localhost:3004/reviews');
      this.reviews = res.data.reviews;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
