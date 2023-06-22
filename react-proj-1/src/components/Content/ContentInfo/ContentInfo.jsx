import s from './ContentInfo.module.css';
import PreloaderComponent from '../../Preloader/preloader';
import ContentStatusWithHooks from './StatusWithHooks';
import React, { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import { reduxForm } from "redux-form";

const Contacts = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    {
        Object.keys(profile.contacts).map(key => {
            console.log("key = " + key);
            console.log("profile.contacts[key] = " + profile.contacts[key]);
        })
    }

    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div><b>NAME:</b> <span>{profile.fullName}</span></div>

            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

let ProfileDataReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm);

const ContentInfo = React.memo(props => {
    let photo = "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg";

    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEditMode(false);
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.setPhoto(e.target.files[0]);
        }
    }

    if (!props.profile) {
        return <PreloaderComponent />
    }

    return (
        <div>
            <div>
                <img className={s.photo} src={props.profile.photos?.large || photo} />
                {props.isOwner && <input type='file' onChange={onMainPhotoSelected}></input>}
                <ContentStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk} />
                {editMode ? <ProfileDataReduxForm onSubmit={onSubmit} profile={props.profile} isOwner={props.isOwner} />
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}

            </div>
        </div>
    );
});

export default ContentInfo;