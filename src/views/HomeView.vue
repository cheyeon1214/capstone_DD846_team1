<!--홈-->
<!--서혜린-->

<template>
  <v-carousel cycle height="250" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="slide in slides" :key="slide.id">
      <v-sheet height="100%">
        <v-img :src="slide.imageSrc" :alt="slide.altText" height="100%" contain></v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

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