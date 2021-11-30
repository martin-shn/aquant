import React from "react";
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import routes from './routes.js'
import {AppHeader} from './cmps/AppHeader'
import './assets/style/style.scss'

class _App extends React.Component {

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.location.pathname !== this.props.location.pathname) {
    //         window.scrollTo(0, 0)
    //     }
    // }

    render() {
        const { pathname } = this.props.history.location

        return (
            < >
                <AppHeader />
                <main className={` ${pathname.includes('/stay/') ? 'main-container' : 'main-container-home '}overflow-hidden`}>
                    <Switch>
                        {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
                    </Switch>
                </main>
                {/* <AppFooter /> */}
            </>
        )
    }
}
export const App = withRouter(_App)