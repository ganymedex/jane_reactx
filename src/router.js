import React from 'react';
import { Router, Route, IndexRoute, Link, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import EnystList from './routes/EnustList';
import MainPage from './routes/MainPage';
function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/index"/>
      <Route path="/index">
        <IndexRoute component={IndexPage}/>
        <Route path=":index" component={IndexPage}/>
      </Route>
       <Route path="/enusts">
        <IndexRoute component={EnystList}/>
        <Route path=":enusts" component={EnystList}/>
      </Route>
       <Route path="/main">
        <IndexRoute component={MainPage}/>
        <Route path=":main" component={MainPage}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
