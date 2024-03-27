import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/index.css';





const Userlist = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');

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

    const handleEdit = async (_id) => {
        try {
            await fetch(`http://localhost:5050/record/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newName, email: newEmail }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(async () => {
                console.log('User edited successfully');
                const fetchResponse = await fetch(`http://localhost:5050/record/`);
                const usersData = await fetchResponse.json();
                setUsers(usersData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
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
        <h3>USER LIST</h3>
        </div>
        <ul className='users'>
            {users.map((user) => (
                 <li key={user._id}>
                    {editingUser === user._id ? (
                        <form onSubmit={()=> handleEdit(user._id)}>
                         <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='name'/>
                         <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder='email'/>
                            <button type='submit'>Save</button>
                        </form>
                    ) : (
                        <>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <button onClick={() => setEditingUser(user._id)}>Edit</button>
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                        </>
                    )}
                   
                </li>
            ))}
           
        </ul>
        <Footer />
        </>
    );
};

export default Userlist


