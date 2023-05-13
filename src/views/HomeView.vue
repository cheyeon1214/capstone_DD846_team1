<!--홈-->
<!--서혜린-->

<template>
  <v-carousel cycle height="250" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide) in slides">
      <v-sheet height="100%">
        <v-img :src="slide.imageSrc" :alt="slide.altText" height="100%" contain></v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

    <v-card to="managelaundry"
      class="mx-auto my-10"
      width="300"
      prepend-icon="mdi-washing-machine"
    >
      <template v-slot:title>
        세탁소 관리
      </template>

      <v-card-text>
       세탁소 관리
      </v-card-text>
    </v-card>

    <v-card to="manageproduct"
      class="mx-auto my-10"
      width="300"
      prepend-icon="mdi-tshirt-crew"
    >
      <template v-slot:title>
        상품 관리
      </template>

      <v-card-text>
        상품 관리
      </v-card-text>
    </v-card>

    <v-card to="managereview"
      class="mx-auto my-10"
      width="300"
      prepend-icon="mdi-message-reply-text-outline"
    >
      <template v-slot:title>
        리뷰 관리
      </template>

      <v-card-text>
        리뷰 관리
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          imageSrc: require('@/assets/images/001.jpg'),
          altText: 'First Slide',
        },
        {
          imageSrc: require('@/assets/images/002.jpg'),
          altText: 'Second Slide',
        },
        {
          imageSrc: require('@/assets/images/003.jpg'),
          altText: 'Third Slide',
        },
        {
          imageSrc: require('@/assets/images/004.jpg'),
          altText: 'Fourth Slide',
        },
        {
          imageSrc: require('@/assets/images/005.jpg'),
          altText: 'Fifth Slide',
        },
      ],
    }
  },
}
</script>
