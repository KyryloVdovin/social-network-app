import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.logo}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'></img>
                </div>
                <div className={s.loginBlock}>
                    {props.isAuth ? <div>{props.login} - <button className={s.log} onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;