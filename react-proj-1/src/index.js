import store from './components/redux/redux-store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App state={store} />
    </Provider>
  </React.StrictMode>
);

// let renderTree = () => {
//   root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App state={store} />
//       </Provider>
//     </React.StrictMode>
//   );
// }

// renderTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
