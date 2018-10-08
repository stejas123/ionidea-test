import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DynamicImport from './dynamicRoutes';
import PrivateRoutes from './privateRoutes';

const Login = (props) => (
  <DynamicImport load={() => import('../components/login')}>
    {(Component) => Component === null
      ?         <div className={`backdrop centerDisplayContent`} style={{height: '100vh'}}>
      loading...
    </div>
      : <Component {...props} />}
  </DynamicImport>
)

const UserInfo = (props) => (
  <DynamicImport load={() => import('../components/userInfo')}>
    {(Component) => Component === null
      ?         <div className={`backdrop centerDisplayContent`} style={{height: '100vh'}}>
      loading...
    </div>
      : <Component {...props} />}
  </DynamicImport>
)

const PageNotFound = (props) => (
  <DynamicImport load={() => import('../components/page-not-found')}>
    {(Component) => Component === null
      ?         <div className={`backdrop centerDisplayContent`} style={{height: '100vh'}}>
      loading...
    </div>
      : <Component {...props} />}
  </DynamicImport>
)


// default router to import in App.
export default ()=>{
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoutes path="/userInfo" component={UserInfo} />
        <Route component={PageNotFound} />
        </Switch>
        </BrowserRouter>
    )
}
