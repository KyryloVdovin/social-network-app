import s from './FriendItem.module.css';

const FriendItem = (props) => { 
    return (
        <div className={s.item}>
            <img src={`${props.avatarURL}`} alt="avatar" />
            <h2 className={s.friendName}>{props.name}</h2>
        </div>
    );
}

export default FriendItem;