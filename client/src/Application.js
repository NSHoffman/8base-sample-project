import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AppProvider } from '@8base/react-sdk';
import { Auth, AUTH_STRATEGIES } from '@8base/auth';
import { BoostProvider, AsyncContent } from '@8base/boost';
import { ToastContainer, toast } from 'react-toastify';

import { ProtectedRoute } from 'shared/components';
import { TOAST_SUCCESS_MESSAGE } from 'shared/constants';

import { MainPlate, ContentPlate, Nav } from './components';
import { Auth as AuthCallback } from './routes/auth';
import { Customers } from './routes/customers';
import { Products } from './routes/products';
import { Orders } from './routes/orders';

const { 
  REACT_APP_AUTH0_CLIENT_ID, 
  REACT_APP_AUTH0_DOMAIN, 
  REACT_APP_8BASE_API_ENDPOINT 
} = process.env;

const authClient = Auth.createClient({
  strategy: AUTH_STRATEGIES.WEB_AUTH0,
  subscribable: true,
}, {
  clientId: REACT_APP_AUTH0_CLIENT_ID,
  domain: REACT_APP_AUTH0_DOMAIN,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/auth`,
});

class Application extends React.PureComponent {
  renderContent = ({ loading }) => (
    <AsyncContent loading={loading} stretch>
      <Switch>
        <Route path="/auth" component={AuthCallback} />
        <Route>
          <MainPlate>
            <Nav.Plate color="BLACK">
              <Nav.Item icon="Search" to="/products" label="Products" />
              <Nav.Item icon="Group" to="/customers" label="Customers" />
              <Nav.Item icon="Contract" to="/orders" label="Orders" />
            </Nav.Plate>
            <ContentPlate>
              <Switch>
                <ProtectedRoute exact path="/products" component={Products} />
                <ProtectedRoute exact path="/customers" component={Customers} />
                <ProtectedRoute exact path="/orders" component={Orders} />
                <Redirect to="/products" />
              </Switch>
            </ContentPlate>
          </MainPlate>
        </Route>
      </Switch>
    </AsyncContent>
  );

  onRequestSuccess = ({ operation }) => {
    const message = operation.getContext()[TOAST_SUCCESS_MESSAGE];

    if (message) {
      toast.success(message);
    }
  };

  onRequestError = ({ graphQLErrors }) => {
    const hasGraphQLErrors = Array.isArray(graphQLErrors) && graphQLErrors.length > 0;

    if (hasGraphQLErrors) {
      graphQLErrors.forEach(error => {
        toast.error(error.message);
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <BoostProvider>
          <AppProvider
            uri={REACT_APP_8BASE_API_ENDPOINT}
            authClient={authClient}
            onRequestSuccess={this.onRequestSuccess}
            onRequestError={this.onRequestError}
          >
            {this.renderContent}
          </AppProvider>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </BoostProvider>
      </BrowserRouter>
    );
  }
}

export { Application };
