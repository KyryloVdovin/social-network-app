import { NavLink } from 'react-router-dom';
import s from './users.module.css';

const User = ({ userId, smallPhoto, followed, usersData, name, status, ...props }) => {
    let avatarlURL = "https://static.kinoafisha.info/k/articles/1200/upload/editor/articles/824865442931.jpg";

    return (
        <div className={s.userContainer} key={userId}>
            <div>
                <div>
                    <NavLink to={'/profile/' + userId}>
                        <img src={smallPhoto != null ? smallPhoto : avatarlURL} className={s.userPhoto} />
                    </NavLink>
                </div>
            </div>
            <div className={s.detail}>
                <div className={s.name}>
                    {name}
                </div>
                <div>
                    {
                        !followed
                            ? <button className={s.submitBtn} disabled={usersData.isFollowingInProgress.some(id => id === userId)} onClick={() => {
                                usersData.FollowThunkCreator(userId);
                            }}>Follow</button>
                            : <button className={s.submitBtn} disabled={usersData.isFollowingInProgress.some(id => id === userId)} onClick={() => {
                                usersData.UnFollowThunkCreator(userId);
                            }}>Unfollow</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default User;