import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post
    const postGrid = {
        border: '2px solid tomato',
        borderRadius: '7px',
        textAlign: 'left',
        padding: '10px',
    }
    return (
        <div style={postGrid}>
            <h3>ID: {id}</h3>
            <h5>Title: {title}</h5>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button> Show Details</button></Link>
        </div>
    );
};

export default Post;