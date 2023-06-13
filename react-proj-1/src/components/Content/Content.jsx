import MyPostContainer from './MyPostContainer';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = (props) => {
    return (
        <div className='content'>
            <ContentInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            <MyPostContainer />
        </div>
    );
}

export default Content;