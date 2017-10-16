import Login from '../view/login/login'
import Index from '../view/index/index'
import Introduce from '../view/introduce/introduce'
import Permanent from '../view/permanent/permanent'

const routes = [
    { path: '/login',
        component: Login
    },
    { path: '/index',
        component: Index,
        routes: [
            { path: '/index/introduce',
                component: Introduce
            },
            { path: '/index/permanent',
                component: Permanent
            }
        ]
    }
]
export default routes