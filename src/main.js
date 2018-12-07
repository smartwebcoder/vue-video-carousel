import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    image_lists: [
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
      'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=623ed05afcc5a3fa1e444ffca95854dc&w=1000&q=80',
      'https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg',
      'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
    ],
    video_lists: [
      'oceans', 'book', 'negative'
    ],
    codes: [
      '/code/code1.html',
      '/code/code1.html'
    ]
  }

})
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
