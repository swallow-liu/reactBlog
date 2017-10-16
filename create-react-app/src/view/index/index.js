import React from 'react'
import { Link } from 'react-router-dom'
import RouteWithSubRoutes from '../../route/router.sub'

const Index = ({routes}) => (
    <div>
        <h2>Index</h2>
        <ul>
            <li><Link to="/index/introduce">introduce</Link></li>
            <li><Link to="/index/permanent">permanent</Link></li>
        </ul>

        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))}
    </div>
)
export default Index