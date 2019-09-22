const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      // {
      //   path: '/home', component: () => import('pages/Index.vue')
      // },
      {
        path: '/book_now',
        component: () => import('pages/book_now/BookNow.vue'),
        children: [
          {
            path: 'sign_up', component: () => import('pages/book_now/SignUp.vue')
          }
        ]
      },
      {
        path: '/services',
        component: () => import('pages/services/Service.vue'),
        children: [
          {
            path: 'services_list', component: () => import('pages/services/ServiceList.vue')
          }
        ]
      },
      {
        path: '/inventory',
        component: () => import('pages/inventory/Inventory.vue'),
        children: [
          {
            path: 'add_item', component: () => import('pages/inventory/AddItem.vue')
          }
        ]
      },
      {
        path: '/location',
        component: () => import('pages/Location.vue')
      },
      {
        path: '/about',
        component: () => import('pages/About.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
