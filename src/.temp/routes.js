export default [
  {
    path: "/talks/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-pages-talks-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\pages\\Talks.vue")
  },
  {
    path: "/tags/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\templates\\Tag.vue")
  },
  {
    path: "/talks/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-talk-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\templates\\Talk.vue")
  },
  {
    path: "/posts/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\templates\\Post.vue")
  },
  {
    path: "/thanks/",
    component: () => import(/* webpackChunkName: "page--src-pages-thanks-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\pages\\Thanks.vue")
  },
  {
    path: "/success/",
    component: () => import(/* webpackChunkName: "page--src-pages-success-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\pages\\Success.vue")
  },
  {
    path: "/report/",
    component: () => import(/* webpackChunkName: "page--src-pages-report-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\pages\\Report.vue")
  },
  {
    path: "/code-of-conduct/",
    component: () => import(/* webpackChunkName: "page--src-pages-code-of-conduct-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\pages\\CodeOfConduct.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\sources\\michaeljolley\\michaeljolley.github.io\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

