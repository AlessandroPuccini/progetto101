import React, {useState} from 'react';
import axios from 'axios';

function Input({id, info, reg, error, errorMsg, type='string', rules={} }) {

let [inputValue, setInputValue] = useState('');

const saveData = async () => {
    try{
      await axios.post('http://localhost:3001/writetodatabase', {content: inputValue});
        console.log("Data:",inputValue );
        alert("Data saved:", inputValue);
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


  return (
    <div className='admin-login'>
        <label htmlFor={id}> {info}</label>
      <input 
      {...reg(info, rules)}
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      type={type}
      id={id}
      placeholder={info}
      />
        {error && <span>{errorMsg}</span>}
    </div>
  )
}

export default Input
