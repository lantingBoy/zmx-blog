import { defineClientConfig } from 'vuepress/client'
import HomeComponents from './components/home.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('HomeComponents', HomeComponents)
  },
})