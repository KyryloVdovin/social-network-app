import { Field, reduxForm } from "redux-form"
// import {  } from "../redux/usersReducer";
import { connect } from 'react-redux';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { Input, createField } from '../common/FormControls/FormControls';
import { login } from '../redux/authReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from "redux";
import { Navigate } from 'react-router-dom';
import style from '../common/FormControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error }) => {
    return <>
        <form onSubmit={handleSubmit}>
            <div>
                {/* <Field placeholder="Email" validate={[requiredField]} name={"email"} component={Input} /> */}
                {createField("Email", "email", [requiredField], Input)}
            </div>
            <div>
                {/* <Field placeholder="Password" validate={[requiredField]} name={"password"} component={Input} type="password" /> */}
                {createField("Password", "password", [requiredField], Input, { type: "password" })}
            </div>
            <div>
                {/* <Field component={Input} name={"rememberMe"} type="checkbox" /> remember me */}
                {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

            </div>
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
        let { email, password, rememberMe } = formData;
        props.login(email, password, rememberMe);
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
        <LoginReduxForm onSubmit={onSubmit} />
    </>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);