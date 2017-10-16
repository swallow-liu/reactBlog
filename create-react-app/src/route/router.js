import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import routes from './router.config'
import RouteWithSubRoutes from './router.sub'


const RouteConfigExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/login">Tacos</Link></li>
                <li><Link to="/index">Sandwiches</Link></li>
            </ul>

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)

export default RouteConfigExample