import 'babel-polyfill'; //兼容浏览器低内核
import '../css/index.scss';

import Vue from 'vue';
import Navigation from 'vue-navigation'
import store from '../vuex/store';
import router from '../router/router';
import { log, jsbridge } from 'icity';

Vue.use(Navigation, {router, store});

env.init();
mock.user();
log.on(env.isOutLog);

function IndexObj() {}

IndexObj.prototype.check = function() {
    return true;
}

IndexObj.prototype.initVue = function() {
    let ctx = this;
    new Vue({
        el: '#app',
        store,
        router
    });
};

jsbridge.init(function() {
    let obj = new IndexObj();
    if(obj.check()) {
        obj.initVue();
    }
});