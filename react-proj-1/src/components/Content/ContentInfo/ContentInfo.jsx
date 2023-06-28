import s from './ContentInfo.module.css';
import PreloaderComponent from '../../Preloader/preloader';
import ContentStatusWithHooks from './StatusWithHooks';
import React, { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import { reduxForm } from "redux-form";

const Contacts = ({ contactTitle, contactValue }) => {
    const empty = '-------------------------';
    return (
        <div>
            <b className={s.fieldDataSize}>{contactTitle}:</b>
            <span className={s.fieldDataColor}>{contactValue === null ? empty : contactValue}</span>
        </div>
    )
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div className={s.profileData}>
            <div><b className={s.fieldDataSize}>NAME:</b> <span className={s.fieldDataColor}>{profile.fullName}</span></div>

            <div>
                <b className={s.fieldDataSize}>Looking for a job:</b> <span className={s.fieldDataColor}>{profile.lookingForAJob ? "yes" : "no"}</span>
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b className={s.fieldDataSize}>My professional skills:</b> <span className={s.fieldDataColor}>{profile.lookingForAJobDescription}</span>
                </div>
            }
            <div>
                <b className={s.fieldDataSize}>About me:</b> <span className={s.fieldDataColor}>{profile.aboutMe}</span>
            </div>
            <div>
                <b className={s.contacts}>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
            {isOwner && <div><button className={s.editBtn} onClick={goToEditMode}>Edit</button></div>}
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
            <div className={s.profileDataPhoto}>

                <div className={s.profilePhotoContainer}>
                    <img className={s.photo} src={props.profile.photos?.large || photo} />
                    {props.isOwner && <div>
                        <input type='file' onChange={onMainPhotoSelected}></input>
                    </div>}
                </div>
                <div className={s.profileDataContainer}>
                    <ContentStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk} />
                    {editMode ? <ProfileDataReduxForm onSubmit={onSubmit} profile={props.profile} isOwner={props.isOwner} />
                        : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}
                </div>
            </div>
        </div>
    );
});

export default ContentInfo;