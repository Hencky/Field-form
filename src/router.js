import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Ref from './routes/Hook/Ref';
import Basic from './routes/Demo/Basic';
import Form from './routes/Demo/Form';
import List from './routes/Demo/List';
import FormProvider from './routes/Demo/FormProvider';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/ref" component={Ref} />
        <Route path="/demo/basic" component={Basic} />
        <Route path="/demo/form" component={Form} />
        <Route path="/demo/list" component={List} />
        <Route path="/demo/provider" component={FormProvider} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
