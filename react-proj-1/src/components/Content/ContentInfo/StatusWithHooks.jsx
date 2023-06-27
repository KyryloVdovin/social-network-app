import React, { useEffect, useState } from 'react';
import s from './ContentInfo.module.css';
import PreloaderComponent from '../../Preloader/preloader';

const ContentStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activeteEditMode = () => {
        setEditMode(true);
    };

    const deactiveteEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status);
    };
    
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    
    return (
        <div className={s.status}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeteEditMode}>{props.status || "------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactiveteEditMode} value={status} />
                </div>
            }
        </div>
    )
}

export default ContentStatusWithHooks;