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


const handleEdit = async (_id, newName, newEmail) => {
    try {
        const response = await fetch(`http://localhost:5050/record/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newName, email: newEmail }),
        });
        if(response.ok){
            console.log('User edited successfully');
        }else{
            console.error('Error editing user');
        }
    } catch (error) {
        console.error('Error editing user:', error);
    }
};

const handleDelete = async (_id) => {
    try {
      const response = await fetch(`http://localhost:5050/record/${_id}`, {
        method: 'DELETE',
      });
  
      if(response.ok){
        console.log('User deleted successfully');
        setUsers(users.filter(user => user._id !== _id));
      }else{
        console.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

    return (
        <>
        <Navbar />
        <div className='users-title'>
        <h3>Users list</h3>
        </div>
        <ul className='users'>
            {users.map((user) => {
                return <li key={user._id}>{user.name} - {user.email}
                    <button>Edit</button>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                </li>
            })}
           
        </ul>
        <Footer />
        </>
    );
};

export default Userlist
