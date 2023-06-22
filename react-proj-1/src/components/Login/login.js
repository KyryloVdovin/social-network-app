import { Field, reduxForm } from "redux-form"
// import {  } from "../redux/usersReducer";
import { connect } from 'react-redux';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { Input, createField } from '../common/FormControls/FormControls';
import { login } from '../redux/authReducer';
import { Navigate } from 'react-router-dom';
import style from '../common/FormControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return <>
        <form onSubmit={handleSubmit}>
            <div>
                {createField("Email", "email", [requiredField], Input)}
            </div>
            <div>
                {createField("Password", "password", [requiredField], Input, { type: "password" })}
            </div>
            <div>
                {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

            </div>
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("symbols from image", "captcha", [requiredField], Input)}
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        let { email, password, rememberMe, captcha } = formData;
        props.login(email, password, rememberMe, captcha);
    }
    if (props.isAuth) {
        // return <>
        //     <h1>Login</h1>
        //     <LoginReduxForm onSubmit={onSubmit} />
        // </>
        if (props.isAuth) {
            return <Navigate to={"/profile"} />
        }
    }
    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login })(Login);