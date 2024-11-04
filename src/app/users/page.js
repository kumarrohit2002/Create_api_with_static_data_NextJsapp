import Link from "next/link";

async function getUserData() {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    return data;  
}

const Users = async () => {
    const users = await getUserData();
    console.log(users);
    return (
        <div>
            <h1>All Users</h1>
            {
                users.userData.map((item)=>(
                    <div key={item.id} style={{color: 'pink', border:'2px solid red', margin:'5px' }}>
                        <Link href={`/users/${item.id}`}><h1>Name: {item.name}</h1></Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;
