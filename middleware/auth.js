// export default function ({ $fire, route, redirect, store }) {
//     if (route.path.startsWith('/auth')) {
//       if ($fire.auth.currentUser) {
//         return redirect('/')
//       }
//     } else if (route.path.startsWith('/vendor/dashboard')) {
//       if (!$fire.auth.currentUser) {
//         return redirect('/vendor/auth/signin')
//       }
  
//       if (!store.state.isConcessionaire) {
//         return redirect('/')
//       }
//     } else if (route.path.startsWith('/vendor')) {
//       if (route.path == '/vendor') {
//         return redirect('/vendor/dashboard')
//       }
//     } else if (route.path.startsWith('/admin')) {
//       if (!$fire.auth.currentUser || !store.state.isAdmin) {
//         return redirect('/')
//       }
//     } else if (route.path.startsWith('/pay')) {
//       if (!route.query.id) {
//         return redirect('/')
//       }
//     } else if (route.path.startsWith('/order')) {
//       if (!route.query.id || !route.query.shop) {
//         return redirect('/trackorder')
//       }
//     } else if (route.path.startsWith('/confirm')) {
//       if (store.state.cart.items.length <= 0) {
//         return redirect('/')
//       }
//     } else if (route.path.startsWith('/guestcheckout')) {
//       if ($fire.auth.currentUser || store.state.cart.items.length <= 0) {
//         return redirect('/')
//       }
//     }
//   }
  