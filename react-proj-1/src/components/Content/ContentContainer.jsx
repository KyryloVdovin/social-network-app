import Content from './Content';
import React from 'react';
import { connect } from 'react-redux';
import { userProfileThunk, getStatusThunk, updateStatusThunk, setPhoto, saveProfile } from '../redux/profileReducer';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };

        return <Children {...props} match={match} />
    }
}

class ContentContainer extends React.Component {

    refreshContent() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            // userId = this.props.match.params.authorizedUserId;
            userId = 29103;
        }

        // usersAPI.getUserProfileData(userId).then(response => {
        //     this.props.setUserPofileAC(response.data);
        // });
        this.props.userProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }
    componentDidMount() {
        this.refreshContent();
    }

    componentDidUpdate(prevProps, prevState, snapsht) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshContent();
        }
    }

    render() {
        return (
            <div className='content'>
                <Content {...this.props} setPhoto={this.props.setPhoto} saveProfile={this.props.saveProfile} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.contentPage.profile,
        status: state.contentPage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { userProfileThunk, getStatusThunk, updateStatusThunk, setPhoto, saveProfile }),
    withAuthRedirect,
    withRouter
)(ContentContainer);