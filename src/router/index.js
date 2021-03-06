import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import Index from '@/components/Index'
import design from '@/components/design'
import masterpiece from '@/components/masterpiece'
import designDetails from '@/components/designDetails'

Vue.use(Router)
Vue.prototype.axios= axios

export default new Router({
	mode:'history',
     routes:[
       {
         path: '/',
         name: 'Index',
         component: Index
       },
       {
         path: '/design',
         name: 'design',
         component: design
       },
       {
        path: '/masterpiece',
        name: 'masterpiece',
        component: masterpiece
      },
       {
        path: '/designDetails',
        name: 'designDetails',
        component: designDetails
      }
     ]
})
