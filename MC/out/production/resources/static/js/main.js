import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'
import {connect} from './util/ws'

//this is for check profile and itfield not null
if(frontendData.profile) {
    connect()
}

Vue.use(VueResource)

new Vue({
    el:'#app',
    render: a=>a(App)

})





