const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'book_now',
        component: () => import('pages/book_now/BookNow.vue'),
        children: [
          { path: '', component: () => import('pages/Index.vue') },
          {
            path: 'sign_up', component: () => import('pages/book_now/SignUp.vue')
          }]
      }, {
        path: 'inventory',
        component: () => import('pages/inventory/Inventory.vue'),
        children: [
          { path: '', component: () => import('pages/Index.vue') },
          {
            path: 'add_item', component: () => import('pages/inventory/AddItem.vue')
          }
        ]
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
