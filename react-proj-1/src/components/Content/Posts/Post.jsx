import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.flex}>
                <img src="https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" alt="" />
                <div>{props.message}</div>
            </div>
            <div>
                <span>likes:</span> <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;