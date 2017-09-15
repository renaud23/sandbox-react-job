import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default (props) => {
  const { component: Component, isAuthenticated } = props;
  const rest = Object.assign({}, props);
  delete rest.component;
  return (
    <Route
      props={rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component props={props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};
