const RouteWithSubRoutes = (route) => (
    <Switch>
        <Route path={route.path} render={props => (
            <route.component {...props} routes={route.routes}/>
        )}/>
    </Switch>
)
export default RouteWithSubRoutes