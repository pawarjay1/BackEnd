import { useEffect, useState } from 'react';

import axios from 'axios';  

function App() {
  const [msg, setMsg] = useState(""); 

  useEffect(()=>{
    axios.get('http://localhost:5000/api/msg')
      .then((res)=> setMsg(res.data.msg))
      .catch((err)=>console.log(err));
  },[]);

  return (
    <>
      <h3>Message from backend!</h3>

      <h1>{msg}</h1>
    </>
  )
}

export default App; 
