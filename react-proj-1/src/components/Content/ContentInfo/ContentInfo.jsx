import s from './ContentInfo.module.css';
import PreloaderComponent from '../../Preloader/preloader';
import ContentStatusWithHooks from './StatusWithHooks';
import React from 'react';

const ContentInfo = React.memo(props => {
    if (!props.profile) {
        return <PreloaderComponent />
    }
    console.log("ContentInfo");
    return (
        <div>
            <div>
                {/* <img src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'></img> */}
            </div>
            <div>
                <img src={props.profile.photos.large} />
                <ContentStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk} />
                <div>NAME:</div>
                <span>{props.profile.fullName}</span>
            </div>
        </div>
    );
});

export default ContentInfo;