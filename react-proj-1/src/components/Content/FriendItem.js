import s from './FriendItem.module.css';

const FriendItem = (props) => { 
    debugger
    const defaultAvatar = "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA";
    let avatarSrc = props.photos.large === null ? defaultAvatar : props.avatarURL;
    return (
        <div className={s.item}>
            <img src={avatarSrc} alt="avatar" />
            <h2 className={s.friendName}>{props.name}</h2>
        </div>
    );
}

export default FriendItem;