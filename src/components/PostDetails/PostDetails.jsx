import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams()
    const navigate = useNavigate()
    const {id, title, body} =post

    console.log(postId)

    const handleBack = ()=>{
        navigate(-1)
    }

    
    return (
        <div>
               <h3>Post details about:{id} </h3>  
               <p>Title: {title}</p>       
               <p><small>Body:{body} </small></p>
               <button onClick={handleBack}>Go back</button>
        </div>
    );
 };
 
 export default PostDetails;