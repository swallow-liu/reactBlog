import React from 'react'
import { Switch, Route} from 'react-router-dom'

const RouteWithSubRoutes = (route) => (
    <Switch>
        <Route path={route.path} render={props => (
            <route.component {...props} routes={route.routes}/>
        )}/>
    </Switch>
)
export default RouteWithSubRoutes