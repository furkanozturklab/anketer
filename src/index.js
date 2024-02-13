import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import "style/custom.css";
import "style/style.css";
import "style/pypass.css";
import 'react-loading-skeleton/dist/skeleton.css'
import { Provider } from 'react-redux';
import store from "store/index"
import { BrowserRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </SkeletonTheme>



);
