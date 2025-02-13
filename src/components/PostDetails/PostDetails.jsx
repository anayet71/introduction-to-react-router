import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();

    const handleBack = ()=>{
        navigate(-1)
    }

    const navigate = useNavigate()
    console.log(post)
    const {id, title, body} =post
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