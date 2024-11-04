async function getUserData(id) {
    const response = await fetch(`http://localhost:3000/api/users/${id}`);
    const data = await response.json();
    return data.userData[0];  
}

const UserDetails = async ({ params }) => {
    const id=await params.id;
    let userDetails = await getUserData(id);

    return (
        <div>
            <h1>User Details</h1>
            <p>name: {userDetails.name}</p>
            <p>Age: {userDetails.age}</p>
            <p>State: {userDetails.state}</p>
        </div>
    );
};

export default UserDetails;
