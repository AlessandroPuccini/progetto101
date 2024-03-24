import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/index.css';



const Userlist = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/record/')
        .then(response => {
            if(!response.ok) throw new Error('Request failed');
            return response.json();
        })
        .then(data => {
            setUsers(data);
        })
        .catch(error => {
            console.error('Error fetching users data:', error);
        });
    }, []);
    return (
        <>
        <Navbar />
        <div className='users-title'>
        <h3>Users list</h3>
        </div>
        <ul className='users'>
            {users.map((user) => {
                return <li key={user._id}>{user.name} - {user.email} </li>
            })}
        </ul>
        <Footer />
        </>
    );
};

export default Userlist
