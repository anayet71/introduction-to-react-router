import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
    const comment = useLoaderData();
    const {id, name, email, body} = comment
    return (
        <div>
            <h5> User ID: {id} </h5>
            <h4> Name: {name}</h4>
            <p>Comment: {body}</p>
        </div>
    );
};

export default CommentDetails;