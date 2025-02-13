import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const postGrid = {
        display: 'grid',
        gridTemplateColumns:  'repeat(3, 1fr) ',
        border: '2px solid tomato',
        borderRadius: '10px'
    }
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h1>Post {posts.length}</h1>
            <div style={postGrid} >
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;