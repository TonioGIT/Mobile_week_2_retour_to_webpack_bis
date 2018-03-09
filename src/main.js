import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import Machine from './Machine.vue'
import DatasAPI from './data_machines_api.vue'
Vue.component('list-compo', MachinesList)
Vue.component('map-compo', MachinesMap)
Vue.component('machine-compo', Machine)
Vue.component('data-compo', DatasAPI)

Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDgSJsYSrgx2_m7nh_GnN_AAAUP58cXXQ8',
    // libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})