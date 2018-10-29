import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import TestEnv from './routes/TestEnv'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={TestEnv} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
