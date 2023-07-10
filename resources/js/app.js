import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import * as icons from '@fortawesome/free-solid-svg-icons'

library.add(icons.faUser)


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .component('font-awesome-icon', FontAwesomeIcon)
      .use(plugin)
      .mount(el)
  },
})
