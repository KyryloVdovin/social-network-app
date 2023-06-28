import s from './users.module.css';
import Paginator from "./Paginator";
import User from './User';

const Users = ({ currentPage, usersData, onPageChanged, ...props }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={usersData.totalUsersCount} pageSize={usersData.pageSize} />
            <div className={s.users}>
                {
                    usersData.users.map(user =>
                        <User key={user.id} userId={user.id} smallPhoto={user.photos.small} followed={user.followed}
                            usersData={usersData} name={user.name} status={user.status} />
                    )
                }
            </div>
        </div>
    );
}

export default Users;