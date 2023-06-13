import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingInProgress, getUsersThunkCreator, switchPageThunkCreator, FollowThunkCreator, UnFollowThunkCreator } from "../redux/usersReducer";
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import Users from './Users'
import PreloaderComponent from '../Preloader/preloader';
import { usersAPI } from "../../api/api";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowingInProgress } from "../redux/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return (<>
            {
                this.props.isFetching
                    ? <PreloaderComponent />
                    : <Users
                        usersData={this.props}
                        onPageChanged={this.onPageChanged}
                    />
            }

        </>);
    }
}

// let mapStatetoProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingInProgress: state.usersPage.isFollowingInProgress
//     }
// }
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