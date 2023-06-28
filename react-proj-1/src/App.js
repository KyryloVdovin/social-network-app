import HeaderContainer from './components/Header/HeaderContainer';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/login';
import { BrowserRouter, HashRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './components/redux/appReducer';
import Preloader from './components/Preloader/preloader';
const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ContentContainer = React.lazy(() => import('./components/Content/ContentContainer'));

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };

    return <Children {...props} match={match} />
  }
}

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route exact path='/' element={<Navigate to="/profile" />} />
                <Route path="/Dialogs" element={<DialogContainer />} />
                <Route path='/profile/:userId' element={<ContentContainer />} />
                <Route path='/profile/' element={<ContentContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login/facebook" element={<div>Facebook</div>} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<div>404 NOT FOUND</div>} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
