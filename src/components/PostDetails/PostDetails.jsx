import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    const {id, title, body} =post
    return (
        <div>
               <h3>Post details about:{id} </h3>  
               <p>Title: {title}</p>       
               <p><small>Body:{body} </small></p>
        </div>
    );
 };
 
 export default PostDetails;