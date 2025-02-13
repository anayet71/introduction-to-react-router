import { Link } from "react-router-dom";
import './Comment.css'

const Comment = ({comment}) => {
    const {name, email, body, id} =comment
    return (
        <div className="comment">
            <h3>Name: {name}</h3>
            <p><small>Email: {email}</small></p>
            <h6>Comment: {body}</h6>
            <Link to={`/comment/${id}`}>See Details</Link>
        </div>
    );
};

export default Comment;