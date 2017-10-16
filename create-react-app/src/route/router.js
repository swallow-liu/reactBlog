import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './router.config'
import RouteWithSubRoutes from './router.sub'

const RouteConfigExample = () => (
    <Router>
        <div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)

export default RouteConfigExample