import { Input, Textarea, createField } from '../../common/FormControls/FormControls';
import style from '../../common/FormControls/FormsControls.module.css';
import { Field } from "redux-form"

const ProfileDataForm = (props) => {
    const { handleSubmit, profile, error } = props;
    
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>NAME:</b> {createField("Name", "fullName", [], Input)}
            </div>

            <div>
                <b>Looking for a job:</b> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}

            </div>
            <div>
                <b>My professional skills:</b>
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me:</b>
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

export default ProfileDataForm;