import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'
import {connect} from './util/ws'
import  vuetify  from './plugin/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

//this is for check profile and itfield not null
if(frontendData.profile) {
    connect()
}

Vue.use(VueResource)

new Vue({
    el:'#app',
    vuetify,
    render: a=>a(App)

})





