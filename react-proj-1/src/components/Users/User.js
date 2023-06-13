import { NavLink } from 'react-router-dom';
import s from './users.module.css';

const User = ({ userId, smallPhoto, followed, usersData, name, status, ...props }) => {
    let avatarlURL = "https://static.kinoafisha.info/k/articles/1200/upload/editor/articles/824865442931.jpg";

    return (
        <div key={userId}>
            <span>
                <div>
                    <NavLink to={'/profile/' + userId}>
                        <img src={smallPhoto != null ? smallPhoto : avatarlURL} className={s.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {
                        !followed
                            ? <button disabled={usersData.isFollowingInProgress.some(id => id === userId)} onClick={() => {
                                usersData.FollowThunkCreator(userId);
                            }}>Follow</button>
                            : <button disabled={usersData.isFollowingInProgress.some(id => id === userId)} onClick={() => {
                                usersData.UnFollowThunkCreator(userId);
                            }}>Unfollow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {name}
                    </div>
                    <div>
                        {status}
                    </div>
                </span>
            </span>
        </div>
    );
}

export default User;