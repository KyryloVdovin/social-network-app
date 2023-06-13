import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" alt="" />
            {props.message}
            <div>
                <span>like</span> <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;