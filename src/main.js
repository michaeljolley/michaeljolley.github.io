import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faChevronLeft, faChevronRight, faRss } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faYoutube, faLinkedin, faGithub, faTwitter, faDribbble, faGithubAlt, faTwitch } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faCodepen, faYoutube, faGithubAlt, faGithub, faLinkedin,
  faTwitter, faDribbble, faTwitch, faChevronUp, faChevronLeft, faChevronRight, faRss)

import "~/assets/main.scss";
import 'prismjs/themes/prism-okaidia.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)

  head.link.push({
    rel: 'stylesheet',
    href: '//fonts.googleapis.com/css?family=Lato:400,400italic,700,700italic'
  });
}
