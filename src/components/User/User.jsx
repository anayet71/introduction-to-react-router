import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { name, id, email, phone } = user
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        margin: '15px',
        borderRadius: '5px',

    }
    return (
        <div style={userStyle}>
            <h2>user name: {name}</h2>
            <p>user email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <Link to={`/users/${id}`}>
            <button>Click me</button>
            </Link>
        </div>
    );
};

export default User;