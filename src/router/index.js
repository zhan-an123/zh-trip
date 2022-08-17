import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    //没有匹配到路由展示的组件
    // {
    //   path: "/:pathMatch(.*)*",
    //   component: () => import("../components/NotFound.vue"),
    // },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/order/order.vue"),
    },
    {
      path: "/favor",
      name: "favor",
      component: () => import("@/views/favor/favor.vue"),
    },

    {
      path: "/message",
      name: "message",
      component: () => import("@/views/message/message.vue"),
    },
    {
      path: "/city",
      name: "city",
      component: () => import("@/views/city/city.vue"),
    },
  ],
});

// router.beforeEach((to, from) => {
//   const token = useCounterStore().token;
//   if (to.path === "/login") {
//     return "/login";
//   } else {
//     if (token) {
//       return;
//     } else {
//       return "/login";
//     }
//   }
// });

export default router;
