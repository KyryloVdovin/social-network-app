import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingInProgress, getUsersThunkCreator, switchPageThunkCreator, FollowThunkCreator, UnFollowThunkCreator } from "../redux/usersReducer";
import { connect } from 'react-redux';
import React from 'react';
import Users from './Users'
import PreloaderComponent from '../Preloader/preloader';
import "./users-container.css";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowingInProgress } from "../redux/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return (
            <div className="users-container">
                {
                    this.props.isFetching
                        ? <PreloaderComponent />
                        : <Users
                            usersData={this.props}
                            onPageChanged={this.onPageChanged}
                            currentPage={this.props.currentPage}
                        />
                }

            </div>);
    }
}

let mapStatetoProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}

const UsersContainer = connect(mapStatetoProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingInProgress,
    getUsers: getUsersThunkCreator,
    switchPageThunkCreator,
    FollowThunkCreator,
    UnFollowThunkCreator
})(UsersAPIComponent);

export default UsersContainer;