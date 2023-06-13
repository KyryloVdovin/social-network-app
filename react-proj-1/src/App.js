import HeaderContainer from './components/Header/HeaderContainer';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import ContentContainer from './components/Content/ContentContainer';
// import DialogContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/login';
import { BrowserRouter, HashRouter, Route, Routes, useParams } from "react-router-dom";
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

  /*
  Решение, чтобы не делать редирект в componentDidMount:

Создаем локальный state в ProfileContainer с полем, например, 
"redirect" с дефолтным значением false, и в componentDidMount(), 
когда нет userId в url  и пользователь не авторизован, 
то делаем this.setState({ redirect: true }), а в render()  делаем 
проверку на this.state.redirect, если равно true, 
то возвращаем <Redirect to="/login" />, если равно false, возвращаем страницу
  */

  render() {
    // if (!this.props.initialized) {
    //   return <Preloader />
    // }

    return (
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar store={this.props.state.getState()} />
          <div className='app-wrapper-content'>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/Dialogs" element={<DialogContainer />} />
                <Route path='/profile/:userId' element={<ContentContainer />} />
                <Route path='/profile/' element={<ContentContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<Login />} />
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
