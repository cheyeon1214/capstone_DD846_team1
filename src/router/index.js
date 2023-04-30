import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AroundLaundryVue from '@/views/AroundLaundry.vue'
import UsageHistoryVue from '@/views/UsageHistory.vue'
import MyPageVue from '@/views/MyPage.vue'

import LaundryDetailVue from '@/views/LaundryDetail.vue'
import SubmitLaundry from '@/views/SubmitLaundry.vue'

import LoginFormVue from '@/views/LoginForm.vue'
import SignUpFormVue from '@/views/SignUpForm.vue'

import AddReviewVue from '@/views/AddReview.vue'
import ReviewListVue from '@/views/ReviewList.vue'
import EditProfileVue from '@/views/EditProfile.vue'
import FavoriteLaundryVue from '@/views/FavoriteLaundry.vue'
import QnAVue from '@/views/QnA.vue'
import WWNoticeVue from '@/views/WWNotice.vue'
import NoticeDetail1Vue from '@/views/NoticeDetail1.vue'
import NoticeDetail2Vue from '@/views/NoticeDetail2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aroundlaundry',
    name: 'aroundlaundry',
    component: AroundLaundryVue
  },
  {
    path: '/usagehistory',
    name: 'usage',
    component: UsageHistoryVue
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPageVue
  },
  {
    path: '/laundrydetail/:id', 
    name: 'laundrydetail',
    component: LaundryDetailVue,
    props: true
  },
  {
    path: '/submitlaundry',
    name: 'submitlaundry',
    component: SubmitLaundry
  },

  {
    path: '/login',
    name: 'login',
    component: LoginFormVue
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpFormVue
  },
  {
    path: '/addreview/:id',
    name: 'addReview',
    component: AddReviewVue,
  },
  {
    path: '/reviewlist',
    name: 'reviewlist',
    component: ReviewListVue
  },
  {
    path: '/editprofile',
    name: 'editprofile',
    component: EditProfileVue
  },
  {
    path: '/favoritelaundry',
    name: 'favoritelaundry',
    component: FavoriteLaundryVue
  },
  {
    path: '/qna',
    name: 'Q&A',
    component: QnAVue
  },
  {
    path: '/wwnotice',
    name: 'wwnotice',
    component: WWNoticeVue
  },
  {
    path: '/noticedetail1',
    name: 'noticedetail1',
    component: NoticeDetail1Vue
  },
  {
    path: '/noticedetail2',
    name: 'noticedetail2',
    component: NoticeDetail2Vue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
