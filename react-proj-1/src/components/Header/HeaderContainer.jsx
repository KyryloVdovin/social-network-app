import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { setAuthUserData, authThunkCreator } from "../redux/authReducer";
import { logout } from '../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // usersAPI.getMyAccount().then(response => {
        //     if (response.data.resultCode === 0) {
        //         let { id, email, login } = response.data.data;
        //         this.props.setAuthUserData(id, email, login);
        //     }
        // });
        this.props.authThunkCreator();
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStatetoProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStatetoProps, { setAuthUserData, authThunkCreator, logout })(HeaderContainer);