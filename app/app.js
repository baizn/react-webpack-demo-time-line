
import React from 'react';
import { render } from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router } from 'react-router';

const history = useBasename(createHistory)({
  basename: '/'
});

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/TimeLine')
  } ]
}

render(
  <Router history={history} routes={rootRoute} />,
  document.querySelector('#timeine')
);
