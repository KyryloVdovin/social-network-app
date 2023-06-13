import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import FriendItem from './../Content/FriendItem';

const Navbar = (props) => {
    let friendsItems = props.store.navbarFriends.friends.map(data => <FriendItem name={data.name} avatarURL={data.avatarURL} key={data.id}/>);

    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.item }>Profle</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Dialogs' className = { navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#f'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#f'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#f'>Settings</NavLink>
            </div>

            <div className='frends-content'>
                <h2 className={classes.frendsTitle}>Friends</h2>
                <div className={classes.friendsContainer}>
                    {friendsItems}
                </div>
            </div>
      </nav>
    );
}

export default Navbar;