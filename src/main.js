import Vue from 'vue';
import '@/firebase/init';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = null;

// Wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {
  // Init app if not already created
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
