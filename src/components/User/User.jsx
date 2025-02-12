
const User = ({user}) => {
    const {name, id, email, phone} = user
    const userStyle ={
        border: '2px solid yellow',
        padding: '5px',
        margin: '15px',
        borderRadius: '5px',
        backgroundColor: 'slateblue'
 
    }
    return (
        <div style={userStyle}>
            <h2>user name: {name}</h2>
            <p>user email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;