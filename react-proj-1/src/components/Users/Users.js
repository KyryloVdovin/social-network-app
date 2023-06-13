import s from './users.module.css';
import Paginator from "./Paginator";
import User from './User';

const Users = ({ currentPage, usersData, ...props }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={props.onPageChanged} totalUsersCount={usersData.totalUsersCount} pageSize={usersData.pageSize} />

            {
                usersData.users.map(user =>
                    <User key={user.id} userId={user.id} smallPhoto={user.photos.small} followed={user.followed}
                        usersData={usersData} name={user.name} status={user.status} />
                )
            }
        </div>
    );
}

export default Users;