<template>
    <v-bottom-navigation v-model="value" color="teal" mode="shift">
        <v-btn router-link to="/">
            <v-icon>mdi-home</v-icon>
            <span>HOME</span>
        </v-btn>

        <v-btn >
            <v-icon>mdi-washing-machine</v-icon>
            <span>주변세탁소</span>
        </v-btn>

        <v-btn >
            <v-icon>mdi-format-list-bulleted</v-icon>
            <span>이용내역</span>
        </v-btn>

        <v-btn >
            <v-icon>mdi-account-outline</v-icon>
            <span>MY</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    data: () => ({ value: null }),
}
</script>