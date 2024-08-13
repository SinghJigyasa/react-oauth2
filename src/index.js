import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-rznll6sngfx50spg.us.auth0.com"
  clientId="3dGHZJVFT3iaqzCEKUuSQesiD53bQyNK"
  
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience:"https://dev-rznll6sngfx50spg.us.auth0.com/api/v2/",
    scope:" read:current_user "
   
  }}
>
  <App />
</Auth0Provider>,
);
reportWebVitals();
