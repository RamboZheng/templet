import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Step1 from '../page/step1.vue'
import Step2 from '../page/step2.vue'
import Step3 from '../page/step3.vue'

module.exports = new VueRouter({
    routes: [
        { 
            path: '/',
            name: 'step1',
            component: Step1
        },
        { 
            path: '/step2',
            name: 'step2',
            component: Step2
        },
        { 
            path: '/step3',
            name: 'step3',
            component: Step3
        }
    ]
})