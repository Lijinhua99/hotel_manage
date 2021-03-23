import Vue from 'vue'
import Router from 'vue-router'
import ManagerPage from '@/components/page/ManagerPage'
import App from '@/App.vue'
import KpiPage from '@/components/page/KpiPage'
import Title from '@/components/common/Title'
import RoomsPage from '@/components/page/RoomsPage'
import LiveinPage from '@/components/page/LiveinPage'
import BookPage from '@/components/page/BookPage'
import AddRoom from '@/components/dialog/AddRoom'
import AddBook from '@/components/dialog/AddBook'
import UpdateRoom from '@/components/dialog/UpdateRoom'
import ShowUser from '@/components/dialog/ShowUser'
import UpdateBook from '@/components/dialog/UpdateBook'
import ShowRoom from '@/components/dialog/ShowRoom'
import AddLivein from '@/components/dialog/AddLivein'
import UpdateLivein from '@/components/dialog/UpdateLivein'
import Login from '@/components/page/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/manager',
        name: 'ManagerPage',
        component: ManagerPage
      },
    {
      path: '/kpi',
      name: 'KpiPage',
      component: KpiPage
    },
    {
        path: '/title',
        name: 'Title',
        component: Title
    },
    {
        path: '/rooms',
        name: 'RoomsPage',
        component: RoomsPage
    },
    {
        path: '/livein',
        name: 'LiveinPage',
        component: LiveinPage
    },
    {
        path: '/book',
        name: 'BookPage',
        component: BookPage
    },
    {
        path: '/addroom',
        name: 'AddRoom',
        component: AddRoom
    },
    {
        path: '/addbook',
        name: 'AddBook',
        component: AddBook
    },
    {
        path: '/updateroom',
        name: 'UpdateRoom',
        component: UpdateRoom
    },
    {
        path: '/updatebook',
        name: 'UpdateBook',
        component: UpdateBook
    },
    {
        path: '/showuser',
        name: 'ShowUser',
        component: ShowUser
    },
    {
        path: '/showroom',
        name: 'ShowRoom',
        component: ShowRoom
    },
    {
        path: '/addlivein',
        name: 'AddLivein',
        component: AddLivein
    },
    {
        path: '/updatelivein',
        name: 'UpdateLivein',
        component: UpdateLivein
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
  ]
})
