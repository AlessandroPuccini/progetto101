import React,{useState, useEffect} from 'react';
import axios from 'axios';

function Read() {
    const [serverData, setServerData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
           try{
              const response = await axios.get('http://localhost:3001/readfromserver');
                const dataFromServer = response.data.message;
                setServerData(dataFromServer);
                
           } catch (error) {
            console.error("Error fetching data:", error);
           }
        };

        fetchData();
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default Read
